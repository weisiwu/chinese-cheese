/**
 * 棋子
*/
import React from 'react';
import '../styles/chessman.less';

class Chessman extends React.Component {
    render() {
        const { group, role } = this.props;
        if (!role) {
            return null;
        }
        return (<div class="chessman" group={group}>{role}</div>);
    }
}

export { Chessman };
export default Chessman;