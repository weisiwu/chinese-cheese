/**
 * 棋子布局
 * 这个组件直接盖在棋盘上，棋盘自身几乎不会重新渲染
*/
import React from 'react';
import { createPortal } from 'react-dom';
import Chessman from './Chessman.jsx';
// import { BLACK_ROLE, RED_ROLE } from '../utils/constants.js';
import '../styles/checkerponits.less';

class CheckerPonits extends React.Component {
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
        // console.log('_renderPoint', position, point, node);
        const { role, group } = point || {};
        console.log('point', role, group);
        if (!(role && group && node)) { return null; }
        return createPortal((
            <Chessman key={position} group={group} role={role} />
        ), node);
    }

    render() {
        if (!this.props.points) { return null; }
        return (
            <>
            {this._renderPoints()}
            </>
        );
    }
}

export { CheckerPonits };
export default CheckerPonits;