import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Checkerboard from './components/Checkerboard.jsx';
import CheckerPonits from './components/CheckerPonits.jsx';
import store from './store.js'

// (wsw)TODO: 整体转换为TS
// (wsw)TODO: 添加单元测试
// (wsw)TODO: 打包生成什么东西？
// (wsw)TODO: 尽快生成一个在github 上也能看的效果
// (wsw)TODO: 将移动棋子的效果替换掉，太丑了
class App extends React.Component {
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