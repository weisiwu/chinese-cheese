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
                return canChessDrop(moveChess, { row, col }, points);
            },
            // drop事件发生的时候，重新渲染棋盘，并且执行一堆操作。
            drop: (moveChess) => {
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