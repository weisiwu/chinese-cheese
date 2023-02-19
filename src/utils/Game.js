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
    if (!(targetPoint && chess)) { return canDrop; }

    const { role, group } = chess || {};


    switch (role) {
        case BLACK_ROLE.SOLIDER:
        case RED_ROLE.SOLIDER:
            canDrop = isViolateSoliderRule(chess, targetPoint);
            break;
        case BLACK_ROLE.GUN:
        case RED_ROLE.GUN:
            canDrop = isViolateGunRule();
            break;
        case BLACK_ROLE.VEHICLE:
        case RED_ROLE.VEHICLE:
            canDrop = isViolateVehicleRule();
            break;
        case BLACK_ROLE.HORSE:
        case RED_ROLE.HORSE:
            canDrop = isViolateHorserRule();
            break;
        case BLACK_ROLE.ELEPHANT:
        case RED_ROLE.ELEPHANT:
            canDrop = isViolateElephantRule();
            break;
        case BLACK_ROLE.GUARD:
        case RED_ROLE.GUARD:
            canDrop = isViolateGuardRule();
            break;
        case BLACK_ROLE.MARSHAL:
        case RED_ROLE.MARSHAL:
            canDrop = isViolateMarshalRule();
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
 * @returns {Object} 起点xy，终点xy
*/
const parsePosition = (chess, targetPoint) => {
    const targetRow = Number(targetPoint.row);
    const targetCol = Number(targetPoint.col);
    const fromRow = Number(chess.fromRow);
    const fromCol = Number(chess.fromCol);
    const rowChanges = Math.abs(targetRow - fromRow);
    const colChanges = Math.abs(targetCol - fromCol);

    return {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges
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
    return group === ROLE.RED ? row < 6 : row >= 6;
}

// 将、士移动范围
const MARSHAL_SAPCE = {
    BLACK: {
        startRow: 1,
        endRow: 3,
        startCol: 4,
        endCol: 6,
    },
    RED: {
        startRow: 8,
        endRow: 10,
        startCol: 4,
        endCol: 6,
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
const isViolateSoliderRule = (chess, targetPoint) => {
    const { targetRow, targetCol, fromRow, fromCol } = parsePosition(chess, targetPoint);
    const isRed = chess.group === ROLE.RED;
    const isCross = isCrossBorder(chess, targetRow);

    if (isCross) {
        return (
            Math.abs(fromCol - targetCol) + (Math.abs(fromRow - targetRow)) === 1
            && (isRed ? targetRow <= fromRow : targetRow >= fromRow)
        );
    }
    if (isRed) {
        return (
            targetRow === fromRow - 1 && targetCol === fromCol
        );
    } else {
        return (
            targetRow === fromRow + 1 && targetCol === fromCol
        );
    }
};
// TODO: 未验证
const isViolateVehicleRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges
    } = parsePosition(chess, targetPoint);
    let isPass = true;

    // 是否在同一行 && 是否在同一列
    if (rowChanges === 0 || colChanges === 0) {
        // 前进方向是存在阻碍
        if (colChanges === 0) {
            const max = Math.max(fromRow, targetRow);
            const min = Math.min(fromRow, targetRow);
            // (wsw)TODO: 可能在终点有问题，同时要防止棋子原地不动
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
        return isPass;
    }

    return false;
};
// (wsw)TODO: 待验证
const isViolateHorserRule = (chess, targetPoint, points) => {
    const {
        fromRow, fromCol,
        rowChanges, colChanges
    } = parsePosition(chess, targetPoint);

    if ((rowChanges + colChanges) === 3) {
        // 找到马腿
        if (rowChanges === 2) {
            return points[fromRow + 1][fromCol];
        } else {
            return points[fromRow][fromCol + 1];
        }
    }

    return false;
};
// (wsw)TODO: 待验证
const isViolateElephantRule = (chess, targetPoint, points) => {
    const {
        fromRow, fromCol,
        rowChanges, colChanges
    } = parsePosition(chess, targetPoint);

    if ((rowChanges + colChanges) === 4) {
        return points[fromRow + 1][fromCol + 1];
    }

    return false;
};
// (wsw)TODO: 待验证
const isViolateGuardRule = (chess, targetPoint) => {
    const {
        targetRow, targetCol,
        rowChanges, colChanges
    } = parsePosition(chess, targetPoint);
    const role = chess.role;

    // 需要限定移动范围
    if (rowChanges === 1) {
        return (
            MARSHAL_SAPCE[role].startRow <= targetRow
            && MARSHAL_SAPCE[role].endRow >= targetRow
        );
    } else if (colChanges === 1) {
        return (
            MARSHAL_SAPCE[role].startCol <= targetCol
            && MARSHAL_SAPCE[role].endCol >= targetCol
        );
    } else if (rowChanges === 1 && colChanges === 1) {
        return (
            (
                MARSHAL_SAPCE[role].startCol <= targetCol
                && MARSHAL_SAPCE[role].endCol >= targetCol
            ) && (
                MARSHAL_SAPCE[role].startRow <= targetRow
                && MARSHAL_SAPCE[role].endRow >= targetRow
            )
        );
    }

    return false;
};
// (wsw)TODO: 待验证
// (wsw)TODO: 其它棋子移动，导致的两将对立的情况呢？
const isViolateMarshalRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        rowChanges, colChanges
    } = parsePosition(chess, targetPoint);
    const role = chess.role;
    let isPass = false;

    // 需要限定移动范围
    if ((rowChanges + colChanges) === 1) {
        if (
            (
                MARSHAL_SAPCE[role].startRow <= targetRow
                && MARSHAL_SAPCE[role].endRow >= targetRow
            ) && (
                MARSHAL_SAPCE[role].startCol <= targetCol
                && MARSHAL_SAPCE[role].endCol >= targetCol
            )
        ) {
            for (let _row = 2; _row < 9; _row ++) {
                if (points[_row][targetCol]) {
                    isPass = true;
                    break;
                }
            }
        }
        return isPass;
    }

    return false;
};
// (wsw)TODO: 待验证
const isViolateGunRule = (chess, targetPoint, points) => {
    const {
        targetRow, targetCol,
        fromRow, fromCol,
        rowChanges, colChanges
    } = parsePosition(chess, targetPoint);
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
        return _num === 1;
    }

    return false;
};