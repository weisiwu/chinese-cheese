import React from 'react';
import Checkerboard from './components/checkerboard.jsx';
import CheckerPonits from './components/CheckerPonits.jsx';
import { InitCheckBoardPoints } from '../src/utils/constants.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: null
        };
    }

    componentDidMount() {
        // 棋盘就绪后，渲染棋子初始化布局
        this.setState({
            points: InitCheckBoardPoints
        });
    }

    render() {
        return (
            <>
                <Checkerboard />
                <CheckerPonits points={this.state.points} />
            </>
        );
    }
}

export default App;