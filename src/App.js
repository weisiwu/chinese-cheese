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
        // this._updatePoints = this._updatePoints.bind(this);
        // this._movePoint = this._movePoint.bind(this);
        // this.dispatch = useDispatch();
        // this.state = {
        //     points: null
        // };
    }

    /** 私有方法 */

    /** 生命周期 */

    render() {
        return (
            <>
                <Provider store={store}>
                    <DndProvider backend={HTML5Backend}>
                        <Checkerboard />
                        <CheckerPonits />
                    </DndProvider>
                </Provider>
            </>
        );
    }
}

export default App;