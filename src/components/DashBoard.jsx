/**
 * 棋盘落子点
*/
import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import moment  from 'moment';
import { ROLE } from '../utils/constants';
import game from '../utils/Game';
import '../styles/dashboard.less';

// 落子点
const DashBoard = connect((state) => ({
}))(class DashBoard extends React.Component {
    state = {
        gameTimer: game.gameTimer || 0,
        groupInAction: game.groupInAction,
    };

    _timeFormat(time) {
        if (!time) { return ''; }
        return moment(time).utcOffset(0).format('HH:mm:ss');
    }

    _applyTie() {
        game.applyTie();
    }

    componentDidMount() {
        game.addTimerCb(() => {
            this.setState({ gameTimer: game.gameTimer });
        });
        game.addRoundChangeCb(() => {
            this.setState({ groupInAction: game.groupInAction });
        });
    }

    render () {
        const { gameTimer, groupInAction } = this.state || {};
        const byTurn = `轮到: ${groupInAction === ROLE.BLACK ? '黑方' : '红方'}落子`;

        return (
            createPortal((
                <div id='Dashboard'>
                    <p className="dashboard_text">{`用时: ${this._timeFormat(gameTimer) || '00:00:00'}`}</p>
                    <p className="dashboard_text">{byTurn}</p>
                    <div className="dashboard_btns">
                        <p className="dashboard_btn" onClick={this._applyTie}>求和</p>
                        <p className="dashboard_btn">导出棋谱</p>
                    </div>
                </div>
            ), document.body)
       );
    }
});

export { DashBoard };
export default DashBoard;