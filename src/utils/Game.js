/**
 * 游戏逻辑
*/
import { BLACK_ROLE, RED_ROLE, ROLE } from './constants.js';

/**
 * 棋子是否可以落子
 * @param chess 棋子信息
 * @param fromPoint 棋子出发点
 * @param targetPoint 棋子落点
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
 * 判断棋子是否越界
 * @param chess 棋子信息
 * @param row 所在行
 * @returns Boolean 是否为越界
*/
const isCrossBorder = (chess, row) => {
    const { group } = chess || {};
    return group === ROLE.RED ? row < 6 : row >= 6;
}

/**
 * 下列为是否违反各个角色（如车、炮）移动规则判断 
 * 参数顺序相同，缺少则表示无需此参数
 * @param {Object} chess 被移动的棋子，含起始位置、棋子信息
 * @param {Object} targetPoint 目标位置信息
 * @param {Array} points 所有棋子信息
 * @return {Boolean} 是否可以落子
*/
const isViolateSoliderRule = (chess, targetPoint) => {
    const { row: targetRow, col: targetCol } = targetPoint || {};
    const fromRow = Number(chess.fromRow);
    const fromCol = Number(chess.fromCol);
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
const isViolateVehicleRule = (chess, targetPoint, points) => {};
const isViolateHorserRule = () => {};
const isViolateElephantRule = () => {};
const isViolateGuardRule = () => {};
const isViolateMarshalRule = () => {};
const isViolateGunRule = () => {};