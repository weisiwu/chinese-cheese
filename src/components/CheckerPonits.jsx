/**
 * 将所有棋子一一挂接到落子点
 * 直接盖在棋盘上，棋盘自身几乎不会重新渲染
*/
import React from 'react';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import Chessman from './Chessman.jsx';

const CheckerPonits = connect((state) => ({
    points: state.pointors
}))(class CheckerPonits extends React.Component {
    // 渲染全盘棋子
    _renderPoints = () => {
        if (!Array.isArray(this.props.points)) { return null; }
        return this.props.points.map((row, _rowId) => {
            const rowId = _rowId + 1;
            return row.map((point, _colId) => {
                const colId = _colId + 1;
                return this._renderPoint(`${rowId}_${colId}`, point);
            })
        });
    }

    // 渲染单个棋子
    _renderPoint = (position, point) => {
        if (!(position && point)) { return null; }
        const node = document.getElementById(position);
        console.log('position',position)
        const { role, group } = point || {};
        if (!(role && group && node)) { return null; }
        return createPortal((
            <Chessman key={position} position={position} group={group} role={role} />
        ), node);
    }

    render() {
        console.log('棋盘上的棋子11', this.props.points);
        if (!this.props.points) { return null; }
        return (
            <>
            {this._renderPoints()}
            </>
        );
    }
});

export { CheckerPonits };
export default CheckerPonits;