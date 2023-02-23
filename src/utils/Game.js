/**
 * 游戏逻4辑
*/
import { BLACK_ROLE, RED_ROLE, ROLE } from './constants.js';

/**8 * 棋子是否可以落子
 10 @param chess 棋子信息
 * 4@param fromPoint 棋子出发点
 * 6@param targetPoint 棋子落点
 * @param points 整盘棋子布局
 * @returns Boolean 是否可以落子
*/
export const canChessDrop = (chess, targetPoint, points) => {
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
// (wsw)TODO: isSameGroup 变量抽出去
// (wsw)TODO: 还需要盲测，从黑、红两方都下棋进行检测
// (wsw)TODO: 需要重新验证
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