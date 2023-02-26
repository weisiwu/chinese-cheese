/**
 * 游戏全局数据管理
*/
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { InitCheckBoardPoints } from './utils/constants';
import game from './utils/Game.js'

// 所有棋子信息
const pointors = createSlice({
    name: 'pointors',
    initialState: [],
    reducers: {
        // 落子后使用该函数
        updatePointors: (points, { payload }) => {
            const { chess, targetRow, targetCol } = payload || {};
            const { group, role, fromRow, fromCol } = chess || {};
            if (Number(targetRow) === Number(fromRow) && Number(targetCol) === Number(fromCol)) { return points; }
            if (targetRow && targetCol) {
                const _targetRow = targetRow - 1;
                const _targetCol = targetCol - 1;
                const _fromRow = fromRow - 1;
                const _fromCol = fromCol - 1;
                if (_targetRow <= 9 && _targetCol <= 8) {
                    // 移动选中棋子
                    points[_targetRow][_targetCol] = { role, group };
                    // 删除已有之前棋子。
                    points[_fromRow][_fromCol] = '';
                }
            }
            // 进入下一轮
            game.roundChange(points);
            return points;
        },
        resetPointors: () => {
            return InitCheckBoardPoints;
        },
    }
});

export const Actions = {
    ...pointors.actions,
};

export default configureStore({
    reducer: {
        pointors: pointors.reducer,
    },
});