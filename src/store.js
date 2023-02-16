/**
 * 游戏全局数据管理
*/
import { createStore } from 'redux';
import { ROLE, WINNER } from './utils/constants';

/*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';

/*
 * action 创建函数
 */
export function addTodo(text) {
    return { type: ADD_TODO, text };
}

const reducers = () => {
    return {};
};

const store = createStore(reducers, {
    pointors: [], // 所有棋子信息
    groupInAction: ROLE.BLACK, // 当前行动方，黑子优先
    startTime: 0, // 游戏开始时间
    round: 0, // 游戏进行局数
    roundCache: [], // 对局记载 - 后续生成棋谱使用
    result: WINNER.NOT_FINISH, // 何方取胜
});