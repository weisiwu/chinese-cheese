import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Provider } from 'react-redux';
import { Modal, Button } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Checkerboard from './components/Checkerboard.jsx';
import CheckerPonits from './components/CheckerPonits.jsx';
import DashBoard from './components/DashBoard.jsx';
import store from './store.js';
import game from './utils/Game';
import { WINNER } from './utils/constants';

// (wsw)TODO: 整体转换为TS
// (wsw)TODO: 添加单元测试
class App extends React.Component {
    state = {
        isModalOpen: false
    };

    /** 私有方法 */
    _renderModal() {
        const { isModalOpen } = this.state;
        const result = game.result;
        let title = '';

        if (result === WINNER.TIE) {
            title = '平局！';
        } else if (result === WINNER.RED) {
            title = '恭喜红方玩家！';
        } else {
            title = '恭喜黑方玩家！';
        }

        return createPortal(
            <Modal
                title={title}
                open={isModalOpen}
                footer={[
                    <Button
                        key="ok"
                        type='primary'
                        onClick={() => this.setState({ isModalOpen: !isModalOpen })}>确定</Button>]}>
                <p>二国争强各用兵，摆成队伍定输赢。</p>
                <p>马行曲路当知道，将守深宫戒远征。</p>
                <p>乘险出车收败卒，隔河飞炮下重城。</p>
                <p>等闲识得军情事，一着功成见太平。</p>
            </Modal>,
            document.body
        );
    }

    /** 生命周期 */
    componentDidMount() {
        game.addGameFinishCb(() => {
            this.setState({ isModalOpen: true })
        });
    }

    render() {
        return (
            <>
                <Provider store={store}>
                    <DndProvider backend={HTML5Backend}>
                        <Checkerboard />
                        <CheckerPonits />
                        <DashBoard />
                        {this._renderModal()}
                    </DndProvider>
                </Provider>
            </>
        );
    }
}

export default App;