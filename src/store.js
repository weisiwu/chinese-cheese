/**
 * 游戏全局数据管理
*/
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { ROLE, WINNER, InitCheckBoardPoints } from './utils/constants';

// 所有棋子信息
const pointors = createSlice({
    name: 'pointors',
    initialState: [],
    reducers: {
        // 落子后使用该函数
        updatePointors: (state, { payload }) => {
            const { chess, targetRow, targetCol } = payload || {};
            const { fromRow, fromCol } = chess || {};

            if (fromRow && fromCol && targetRow && targetCol) {
                state[fromRow][fromCol] = '';
                state[targetRow][targetCol] = chess;
            }
            return state;
        },
        resetPointors: () => {
            return InitCheckBoardPoints;
        },
    }
});

// 当前行动方，黑子优先
const groupInAction = createSlice({
    name: 'groupInAction',
    initialState: ROLE.BLACK,
    // (wsw)TODO: 待补充
    reducers: {}
});

// 游戏开始时间
const startTime = createSlice({
    name: 'startTime',
    initialState: 0,
    // (wsw)TODO: 待补充
    reducers: {}
});

// 游戏进行局数
const round = createSlice({
    name: 'round',
    initialState: 0,
    // (wsw)TODO: 待补充
    reducers: {}
});

// 对局记载 - 后续生成棋谱使用
const roundCache = createSlice({
    name: 'roundCache',
    initialState: [],
    // (wsw)TODO: 待补充
    reducers: {}
});

// 何方取胜
const result = createSlice({
    name: 'result',
    initialState: WINNER.NOT_FINISH,
    // (wsw)TODO: 待补充
    reducers: {}
});

export const Actions = {
    ...pointors.actions,
    ...groupInAction.actions,
    ...startTime.actions,
    ...round.actions,
    ...roundCache.actions,
    ...result.actions,
};

export default configureStore({
    reducer: {
        pointors: pointors.reducer,
        groupInAction: groupInAction.reducer,
        startTime: startTime.reducer,
        round: round.reducer,
        roundCache: roundCache.reducer,
        result: result.reducer,
    },
});