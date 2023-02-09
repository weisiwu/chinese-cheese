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
        this.state = {
            points: null
        };
    }

    /** 私有方法 */
    _updatePoints() {
        this.setState({
            points: InitCheckBoardPointsTmp
        })
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
                    <Checkerboard move={this._updatePoints} />
                    <CheckerPonits points={this.state.points} />
                </DndProvider>
            </>
        );
    }
}

export default App;