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
    if (!(points && chess)) { return canDrop; }

    const { role, group } = chess || {};

    if (isCrossBorder(chess, targetPoint.row)) { return canDrop; }

    switch (role) {
        case BLACK_ROLE.SOLIDER:
        case RED_ROLE.SOLIDER:
            canDrop = isViolateSoliderRule();
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
    let isCross = false;

    const { role, group } = chess || {};

    switch (role) {
        case BLACK_ROLE.ELEPHANT:
        case RED_ROLE.ELEPHANT:
        case BLACK_ROLE.GUARD:
        case RED_ROLE.GUARD:
        case BLACK_ROLE.MARSHAL:
        case RED_ROLE.MARSHAL:
            isCross = group === ROLE.RED ? row < 6 : row >= 6;
            break;
        default:
            break;
    }
    return isCross;
}

// 下列为是否违反各个角色（如车、炮）移动规则判断
const isViolateSoliderRule = () => {
    return false;
};
const isViolateVehicleRule = () => {};
const isViolateHorserRule = () => {};
const isViolateElephantRule = () => {};
const isViolateGuardRule = () => {};
const isViolateMarshalRule = () => {};
const isViolateGunRule = () => {};