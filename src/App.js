import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Checkerboard from './components/Checkerboard.jsx';
import CheckerPonits from './components/CheckerPonits.jsx';
import { InitCheckBoardPoints } from '../src/utils/constants.js';
import store from './store.js'

// (wsw)TODO: 整体转换为TS
// (wsw)TODO: 添加单元测试
// (wsw)TODO: 打包生成什么东西？
class App extends React.Component {
    constructor(props) {
        super(props);
        this._updatePoints = this._updatePoints.bind(this);
        this._movePoint = this._movePoint.bind(this);
        // this.dispatch = useDispatch();
        this.state = {
            points: null
        };
    }

    /** 私有方法 */
    /**
     * 渲染整体棋盘
     */
    _updatePoints(points = InitCheckBoardPoints) {
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
        // this.setState({
        //     points: InitCheckBoardPoints
        // });
        console.log('dispatc', this.props)
    }

    render() {
        console.log('store', this.props)
        return (
            <>
                <Provider store={store}>
                    <DndProvider backend={HTML5Backend}>
                        <Checkerboard move={this._movePoint} />
                        <CheckerPonits />
                    </DndProvider>
                </Provider>
            </>
        );
    }
}

export default App;