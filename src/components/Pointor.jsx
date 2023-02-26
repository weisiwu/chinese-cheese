/**
 * 棋盘落子点
*/
import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'react-redux';
import { ItemTypes } from '../utils/constants';
import { canChessDrop } from '../utils/Game.js'
import '../styles/pointor.less';

// 落子点
const Pointor = connect((state) => ({
    points: state.pointors
}))(({ className, row, col, move, points }) => {
    const [{ _ }, drop] = useDrop(
        () => ({
            accept: ItemTypes.CARD,
            canDrop: (moveChess) => {
                // 先设置为所有的点都能落子
                return canChessDrop(moveChess, { row, col }, points);
            },
            // drop事件发生的时候，重新渲染棋盘，并且执行一堆操作。
            // 调用 Game.js
            drop: (moveChess) => {
                // 看看其他demo是不是drop的时候直接render
                // hover的棋子要变色
                // 可以走通，但是要修改整个元数据
                const { group, role, fromRow, fromCol } = moveChess || {};
                move({ group, role }, { row: fromRow, col: fromCol });
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }),
        [points],
    );

    if (!(row && col)) { return null; }

    return (
        <div
            ref={drop}
            className={className}
            row={row}
            col={col}
            id={`${row}_${col}`} />
    );
});

export { Pointor };
export default Pointor;