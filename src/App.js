import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Checkerboard from './components/Checkerboard.jsx';
import CheckerPonits from './components/CheckerPonits.jsx';
import { InitCheckBoardPoints, InitCheckBoardPointsTmp } from '../src/utils/constants.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this._updatePoints = this._updatePoints.bind(this);
        this._movePoint = this._movePoint.bind(this);
        this.state = {
            points: null
        };
    }

    /** 私有方法 */
    /**
     * 渲染整体棋盘
     */
    _updatePoints(points = InitCheckBoardPointsTmp) {
        this.setState({ points });
    }

    /**
     * 移动单个棋子
    */
    _movePoint(
        { group, role }: chess = {},
        { row: targetRow, col: targetCol }: target = {},
        { row: fromRow, col: fromCol }: from = {}
    ) {
        if (Number(targetRow) === Number(fromRow) && Number(targetCol) === Number(fromCol)) { return; }
        if (targetRow && targetCol) {
            const currentPoints = this.state.points || {};
            const _targetRow = targetRow - 1;
            const _targetCol = targetCol - 1;
            const _fromRow = fromRow - 1;
            const _fromCol = fromCol - 1;
            console.log('xx', currentPoints[_targetRow]);
            if (_targetRow <= 9 && _targetCol <= 8) {
                // 移动选中棋子
                currentPoints[_targetRow][_targetCol] = { role, group };
                // 删除已有之前棋子。
                currentPoints[_fromRow][_fromCol] = '';
            }
            this._updatePoints(currentPoints);
        }
    }

    /** 生命周期 */
    componentDidMount() {
        // 棋盘就绪后，渲染棋子初始化布局
        this.setState({
            points: InitCheckBoardPoints
        });
    }

    render() {
        return (
            <>
                <DndProvider backend={HTML5Backend}>
                    <Checkerboard
                        move={this._movePoint}
                        points={this.state.points} />
                    <CheckerPonits
                        points={this.state.points} />
                </DndProvider>
            </>
        );
    }
}

export default App;