/**
 * 棋盘样式布局
 * 包括楚河汉界、炮的落子点、交错线等
*/
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Pointor } from './Pointor.jsx';
import { Actions } from '../store.js'
import '../styles/checkerboard.less';

// 棋盘关键纹理位置(行_列)
const slant = ['1_4', '2_5', '8_4', '9_5'];
const slantBack = ['1_5', '2_4', '8_5', '9_4'];
const anchorRb = ['2_1', '2_7', '7_1', '7_7'];
const anchorRt = ['3_1', '3_7', '8_1', '8_7'];
const anchorLt = ['3_2', '3_8', '8_2', '8_8'];
const anchorLb = ['2_2', '2_8', '7_2', '7_8'];


// Step1 棋盘渲染
// 1、 改造棋盘，在对应节点上留下钩子，方便后续棋子渲染定位
// 2、 画出楚河汉界
// 3、 在页面上画一个棋子
// 4、 棋盘不重复刷新，渲染后，留出钩子，每次移动棋子，都通过renderPortal的方式去渲染棋子们的新位置
// Step2 棋子整体渲染
// Step3 棋子移动和规则
// 1、 棋子可以拖动，可以落下
// 2、 挪动棋子动效
// 3、 落子就干掉所在地的棋子
// 4、 给棋子-兵 的移动添加规则
// 5、 给棋子-炮 的移动添加规则
// 6、 给棋子-车 的移动添加规则
// 6、 给棋子-马 的移动添加规则
// 6、 给棋子-相 的移动添加规则
// 6、 给棋子-士 的移动添加规则
// 6、 给棋子-将 的移动添加规则
// Step4 整局相关
// Step5 是否可以落子提示
// Step6 Ts化改造
const Checkerboard = connect((state) => ({
    points: state.pointors
}), {
    move: Actions.updatePointors,
    init: Actions.resetPointors,
})(({ move, points, init }) => {
    /**
     * 渲染格子
     * @param {Number} row 多少行
     * @param {Number} col 多少列
     * @param {Boolean} isDivider 是否为楚河汉界那行
     * @returns xml
     */
    const _renderGrid = (row, col, isDivider = false) => {
        const id = `${row}_${col}`;
        // slant 和 point 都是纹理，命中条件((行+列))，即渲染
        const baseCls = row <= 5 ? 'pointer-black' : 'pointer-red';
        const isLast = col === 8;
        let extCls = '';
        let gridCls = '';
        if (slant.includes(id)) { extCls += ' slant'; }
        if (slantBack.includes(id)) { extCls += ' slant-back'; }
        if (anchorRb.includes(id)) { extCls += ' anchor-rb'; }
        if (anchorRt.includes(id)) { extCls += ' anchor-rt'; }
        if (anchorLt.includes(id)) { extCls += ' anchor-lt'; }
        if (anchorLb.includes(id)) { extCls += ' anchor-lb'; }
        if (isDivider) { extCls += ' hide-border'; }
        const _move = useCallback((targetRow, targetCol) => {
            return ({ group, role }, { row: fromRow, col: fromCol }) => {
                move({
                    chess: { group, role, fromRow, fromCol },
                    targetRow,
                    targetCol,
                });
            };
        }, [col, row]);

        if (row === 5) {
            return (
                <div key={id} className={`grid ${extCls}`}>
                    {/* 黑棋边界 */}
                    <Pointor move={_move(row, col)} className={`${baseCls} pointer-bottom`} row={row} col={col} />
                    {
                        isLast
                            ? <Pointor move={_move(row, col + 1)} className={`${baseCls} pointer-bottom last`} row={row} col={col + 1} />
                            : null
                    }
                    {/* 红棋边界 */}
                    <Pointor move={_move(row + 1, col)} className="pointer-red pointer-top" row={row + 1} col={col} />
                    {
                        isLast
                            ? <Pointor move={_move(row + 1, col + 1)} className="pointer-red pointer-top last" row={row + 1} col={col + 1} />
                            : null
                    }
                </div>
            );
        }

        const _row = row > 5 ? row + 1 : row;
        return (
            <div key={id} className={`grid ${extCls}`}>
                <Pointor move={_move(_row, col)} className={`${baseCls}${gridCls}`} row={_row} col={col} />
                {
                    isLast
                        ? <Pointor move={_move(_row, col + 1)} className={`${baseCls} last`} row={_row} col={col + 1} />
                        : null
                }
            </div>
        );
    }

    /**
     * 按照行进行渲染
     * @param {Number} row 多少行
     * @returns xml
     */
    const _renderLine = (row) => {
        if (row === 5) {
            return (
                <div className="divider" key={row}>
                    { _renderBanner() }
                    { Array(8).fill('').map((_, _col) => _renderGrid(row, _col + 1, true)) }
                </div>
            );
        }
        return <>
            { Array(8).fill('').map((_, _col) => _renderGrid(row, _col + 1)) }
        </>;
    }

    // 楚河汉界
    const _renderBanner = () => {
        return (
            <>
                <div className='banner-left'><p>楚 河</p></div>
                <div className='banner-right'><p>汉 界</p></div>
            </>
        );
    }

    useEffect(() => {
        init();
    }, []);

    // 布局是八横八纵，横向多一个楚河汉界
    return (
        <div id="Checkerboard">
            { Array(9).fill('').map((_, _row) => _renderLine(_row + 1)) }
        </div>
    );
});

export { Checkerboard };
export default Checkerboard;