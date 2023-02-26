/**
 * 游戏逻4辑
*/
import { BLACK_ROLE, RED_ROLE, ROLE, WINNER } from './constants.js';

/**
 * 在象棋游戏对局中，有部分数据是最终要显示的，如棋子位置、棋盘等
 * 有些数据不需要显示，它们更像是一种规则，将他们放在store中就不合适
 * 它们和视图无关，但是又横亘游戏全局，比如：当前行动方、第几轮、对局记录等
*/
export class Game {
    constructor({ role = ROLE.BLACK } = {}) {
        this.round = 0;
        this.roundChangeCbs = [];
        this.groupInAction = role; // 默认黑子先
        this.roundCache = [];
        this.timer = null;
        this.gameTimer = 0;
        this.timerCbs = []; // 每秒钟的回调函数
        this.result = WINNER.NOT_FINISH; // 进行中
        this.groupTurn = {
            [ROLE.BLACK]: ROLE.RED,
            [ROLE.RED]: ROLE.BLACK,
        };
        this.gameFinishCbs = [];
    }

    applyTie = () => {
        if (this.result === WINNER.NOT_FINISH) {
            this.result = WINNER.TIE;
            this.roundChange();
        }
    };

    timerInterval = () => {
        this.timer = setInterval(() => {
            this.gameTimer += 1000;
            this.timerCbs.forEach((cb) => {
                if (typeof cb === 'function') { cb(); }
            });
        }, 1000);
    };

    addTimerCb = (cb) => {
        this.timerCbs.push(cb || (() => {}));
    };

    /**
     * @param {object} points 对局所有的棋子
    */
    roundChange = (points) => {
        // (wsw)TODO: 补充棋谱缓存
        // this.roundCache.push();
        this.round ++;
        if (this.round === 1) {
            this.timerInterval();
        }

        if (this.result === WINNER.NOT_FINISH) {
            this.groupInAction = this.groupTurn[this.groupInAction];
        } else {
            clearInterval(this.timer);
            // 平局、结束提示
            this.gameFinishCbs.forEach((cb) => {
                if (typeof cb === 'function') { cb(this.result); }
            });
        }

        this.roundChangeCbs.forEach((cb) => {
            if (typeof cb === 'function') { cb(); }
        });
    };

    addRoundChangeCb = (cb) => {
        this.roundChangeCbs.push(cb || (() => {}));
    };

    /**
     * @param {object} points 对局所有的棋子
     * @return {enum} 对局状况
    */
    judgeFinish = (points, { targetRow, targetCol, willToTie = false } = {}) => {
        if (willToTie) {
            this.result = WINNER.TIE; // 求和
            return;
        }

        const isRed = this.groupInAction === ROLE.RED;
        const _ROLE = isRed ? BLACK_ROLE : RED_ROLE;
        let isFinish = false;

        // 判断是否有本轮行动方的将棋是否还在
        if (points[targetRow][targetCol]) {
            if (points[targetRow][targetCol].role === _ROLE.MARSHAL) {
                isFinish = true;
            }
        }

        if (isFinish) {
            // 轮到一方行动，该方无将棋，判负
            this.result = isRed ? WINNER.RED : WINNER.BLACK;
        } else {
            this.result = WINNER.NOT_FINISH;
        }
    };

    addGameFinishCb = (cb) => {
        this.gameFinishCbs.push(cb || (() => {}));
    };
};

const _game = new Game();
export default _game;

/**8 * 棋子是否可以落子
 10 @param chess 棋子信息
 * 4@param fromPoint 棋子出发点
 * 6@param targetPoint 棋子落点
 * @param points 整盘棋子布局
 * @returns Boolean 是否可以落子
*/
export const canChessDrop = (chess, targetPoint, points) => {
    // 不是行动方不可移动
    if (_game.groupInAction !== chess.group) { return false; }
    let canDrop = false;
    if (!(targetPoint && chess && points.length)) { return canDrop; }
    const {
        targetRow, targetCol,
        fromRow, fromCol,
    } = parsePosition(chess, targetPoint, points);
    if (targetRow === fromRow && targetCol === fromCol) { return canDrop; }

    const { role } = chess || {};

    switch (role) {
        case BLACK_ROLE.SOLIDER:
        case RED_ROLE.SOLIDER:
            canDrop = isViolateSoliderRule(chess, targetPoint, points);
            break;
        case BLACK_ROLE.GUN:
        case RED_ROLE.GUN:
            canDrop = isViolateGunRule(chess, targetPoint, points);
            break;
        case BLACK_ROLE.VEHICLE:
        case RED_ROLE.VEHICLE:
            canDrop = isViolateVehicleRule(chess, targetPoint, points);
            break;
        case BLACK_ROLE.HORSE:
        case RED_ROLE.HORSE:
            canDrop = isViolateHorserRule(chess, targetPoint, points);
            break;
        case BLACK_ROLE.ELEPHANT:
        case RED_ROLE.ELEPHANT:
            canDrop = isViolateElephantRule(chess, targetPoint, points);
            break;
        case BLACK_ROLE.GUARD:
        case RED_ROLE.GUARD:
            canDrop = isViolateGuardRule(chess, targetPoint, points);
            break;
        case BLACK_ROLE.MARSHAL:
        case RED_ROLE.MARSHAL:
            canDrop = isViolateMarshalRule(chess, targetPoint, points);
            break;
        default:
            break;
    }
    return canDrop;
};

/**
 * 解析棋子位置
 * @param {Object} chess 棋子信息
 * @param {Object} targetPoint 目标位置信息
 * @param {Array(Object)} points 全局棋子信息
 * @returns {Object} 起点xy，终点xy
*/
const parsePosition = (chess, targetPoint, points) => {
    const targetRow = Number(targetPoint.row - 1);
    const targetCol = Number(targetPoint.col - 1);
    const fromRow = Number(chess.fromRow - 1);
    const fromCol = Number(chess.fromCol - 1);
    const rowChanges = Math.abs(targetRow - fromRow);
    const colChanges = Math.abs(targetCol - fromCol);
    const isSameGroup = (points[targetRow][targetCol].group === chess.group) && chess.group;

    return {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges,
        group: chess.group,
        isSameGroup
    };
};

/**
 * 判断棋子是否越界
 * @param chess 棋子信息
 * @param row 所在行
 * @returns Boolean 是否为越界
*/
const isCrossBorder = (chess, row) => {
    const { group } = chess || {};
    return group === ROLE.RED ? row <= 5 : row >= 6;
}

// 将、士移动范围
const MARSHAL_SAPCE = {
    [ROLE.BLACK]: {
        startRow: 0,
        endRow: 2,
        startCol: 3,
        endCol: 5,
    },
    [ROLE.RED]: {
        startRow: 7,
        endRow: 9,
        startCol: 3,
        endCol: 5,
    },
};

/**
 * 下列为是否违反各个角色（如车、炮）移动规则判断 
 * 参数顺序相同，缺少则表示无需此参数
 * @param {Object} chess 被移动的棋子，含起始位置、棋子信息
 * @param {Object} targetPoint 目标位置信息
 * @param {Array} points 所有棋子信息
 * @return {Boolean} 是否可以落子
*/
// (wsw)TODO: 添加失败停止，和棋局导出（会多处这么一个按钮）。
// (wsw)TODO: 其它棋子移动，导致的两将对立的情况呢？
// 兵、卒
const isViolateSoliderRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges,
        isSameGroup
    } = parsePosition(chess, targetPoint, points);
    const isRed = chess.group === ROLE.RED;
    const isCross = isCrossBorder(chess, fromRow + 1);
    let isPass = true;

    if (isCross) {
        isPass = (
            (colChanges + rowChanges) === 1
            && (isRed ? targetRow <= fromRow : targetRow >= fromRow)
        );
    } else {
        if (isRed) {
            isPass = (
                targetRow === fromRow - 1 && colChanges === 0
            );
        } else {
            isPass = (
                targetRow === fromRow + 1 && colChanges === 0
            );
        }
    }

    if (isPass && isSameGroup) {
        return false;
    }

    return isPass;
};
// 車、车
const isViolateVehicleRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges,
        isSameGroup
    } = parsePosition(chess, targetPoint, points);
    let isPass = true;

    // 是否在同一行 && 是否在同一列
    if (rowChanges === 0 || colChanges === 0) {
        // 前进方向是存在阻碍
        if (colChanges === 0) {
            const max = Math.max(fromRow, targetRow);
            const min = Math.min(fromRow, targetRow);
            for (let _row = min + 1; _row < max; _row ++) {
                if (points[_row][targetCol]) {
                    isPass = false;
                    break;
                }
            }
        } else {
            const max = Math.max(fromCol, targetCol);
            const min = Math.min(fromCol, targetCol);
            for (let _col = min + 1; _col < max; _col ++) {
                if (points[targetRow][_col]) {
                    isPass = false;
                    break;
                }   
            }
        }
        if (isPass && isSameGroup) {
            return false;
        }
        return isPass;
    }

    return false;
};
// 马、馬
const isViolateHorserRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges,
        isSameGroup
    } = parsePosition(chess, targetPoint, points);
    let isPass = true;

    if ((rowChanges + colChanges) === 3) {
        // 找到马腿
        if (rowChanges === 2) {
            const min = Math.min(fromRow, targetRow);
            isPass = !points[min + 1][fromCol];
        } else {
            const min = Math.min(fromCol, targetCol);
            isPass = !points[fromRow][min + 1];
        }
        if (isPass && isSameGroup) {
            return false;
        }
        return isPass;
    }
    return false;
};
// 象、相
const isViolateElephantRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges,
        isSameGroup
    } = parsePosition(chess, targetPoint, points);
    let isPass = true;

    if (rowChanges === 2 && colChanges === 2) {
        const minRow = Math.min(fromRow, targetRow);
        const minCol = Math.min(fromCol, targetCol);

        isPass = !points[minRow + 1][minCol + 1];

        if (isPass && isSameGroup) {
            return false;
        }
        return isPass;
    }

    return false;
};
// 士、仕
const isViolateGuardRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        rowChanges, colChanges,
        isSameGroup, group
    } = parsePosition(chess, targetPoint, points);
    let isPass = true;

    // 需要限定移动范围
    if (rowChanges === 1 && colChanges === 1) {
        isPass = (
            (
                MARSHAL_SAPCE[group].startCol <= targetCol
                && MARSHAL_SAPCE[group].endCol >= targetCol
            ) && (
                MARSHAL_SAPCE[group].startRow <= targetRow
                && MARSHAL_SAPCE[group].endRow >= targetRow
            )
        );
    } else if (rowChanges === 1) {
        isPass = (
            MARSHAL_SAPCE[group].startRow <= targetRow
            && MARSHAL_SAPCE[group].endRow >= targetRow
        );
    } else if (colChanges === 1) {
        isPass = (
            MARSHAL_SAPCE[group].startCol <= targetCol
            && MARSHAL_SAPCE[group].endCol >= targetCol
        );
    }

    if (isPass && isSameGroup) {
        return false;
    }

    return isPass;
};
// 将、帅
const isViolateMarshalRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        rowChanges, colChanges,
        isSameGroup, group
    } = parsePosition(chess, targetPoint, points);
    let isPass = true;

    // 需要限定移动范围
    if ((rowChanges + colChanges) === 1) {
        if (
            (
                MARSHAL_SAPCE[group].startRow <= targetRow
                && MARSHAL_SAPCE[group].endRow >= targetRow
            ) && (
                MARSHAL_SAPCE[group].startCol <= targetCol
                && MARSHAL_SAPCE[group].endCol >= targetCol
            )
        ) {
            if (group === ROLE.BLACK) {
                for (let _row = targetRow; _row <= 9; _row ++) {
                    if (points[_row][targetCol]) {
                        isPass = points[_row][targetCol].role !== RED_ROLE.MARSHAL;
                        break;
                    }
                }
            } else {
                for (let _row = targetRow; _row >= 0; _row --) {
                    if (points[_row][targetCol]) {
                        isPass = points[_row][targetCol].role !== BLACK_ROLE.MARSHAL;
                        break;
                    }
                }
            }
        }
        if (isPass && isSameGroup) {
            return false;
        }
        return isPass;
    }

    return false;
};
// 炮、砲
const isViolateGunRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges,
        isSameGroup
    } = parsePosition(chess, targetPoint, points);
    let _num = 0;

    if (rowChanges === 0 || colChanges === 0) {
        // 是否存在炮架
        if (colChanges === 0) {
            const max = Math.max(fromRow, targetRow);
            const min = Math.min(fromRow, targetRow);
            for (let _row = min + 1; _row < max; _row ++) {
                if (points[_row][fromCol]) {
                    _num ++;
                }
            }
        } else {
            const max = Math.max(fromCol, targetCol);
            const min = Math.min(fromCol, targetCol);
            for (let _col = min + 1; _col < max; _col ++) {
                if (points[fromRow][_col]) {
                    _num ++;
                }   
            }
        }
        // 隔子打子
        if (_num === 1 && points[targetRow][targetCol] && !isSameGroup) {
            return true;
        }
        if (_num === 0 && !points[targetRow][targetCol]) {
            return true;
        }
    }

    return false;
};