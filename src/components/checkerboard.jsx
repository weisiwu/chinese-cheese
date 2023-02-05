import React from 'react';
import Chessman from './chessman.jsx';
import {CheckBoardPoints} from '../utils/constants.js';
import '../styles/checkerboard.less';

class Checkerboard extends React.Component {
    render() {
        return (
            <div id="Checkerboard">
                <div className="grid"><div className="pointer-black" row="1" col="1"></div></div>
                <div className="grid"><div className="pointer-black" row="1" col="2"></div></div>
                <div className="grid"><div className="pointer-black" row="1" col="3"></div></div>
                <div className="grid slant"><div className="pointer-black" row="1" col="4"></div></div>
                <div className="grid slant-back"><div className="pointer-black" row="1" col="5"></div></div>
                <div className="grid"><div className="pointer-black" row="1" col="6"></div></div>
                <div className="grid"><div className="pointer-black" row="1" col="7"></div></div>
                <div className="grid">
                    <div className="pointer-black" row="1" col="8"></div>
                    <div className="pointer-black pointer-rt" row="1" col="9"></div>
                </div>
                <div className="grid anchor-rb"><div className="pointer-black" row="2" col="1"></div></div>
                <div className="grid anchor-lb"><div className="pointer-black" row="2" col="2"></div></div>
                <div className="grid"><div className="pointer-black" row="2" col="3"></div></div>
                <div className="grid slant-back"><div className="pointer-black" row="2" col="4"></div></div>
                <div className="grid slant"><div className="pointer-black" row="2" col="5"></div></div>
                <div className="grid"><div className="pointer-black" row="2" col="6"></div></div>
                <div className="grid anchor-rb"><div className="pointer-black" row="2" col="7"></div></div>
                <div className="grid anchor-lb">
                    <div className="pointer-black" row="2" col="8"></div>
                    <div className="pointer-black pointer-rt" row="2" col="9"></div>
                </div>
                <div className="grid anchor-rt"><div className="pointer-black" row="3" col="1"></div></div>
                <div className="grid anchor-lt"><div className="pointer-black" row="3" col="2"></div></div>
                <div className="grid"><div className="pointer-black" row="3" col="3"></div></div>
                <div className="grid"><div className="pointer-black" row="3" col="4"></div></div>
                <div className="grid"><div className="pointer-black" row="3" col="5"></div></div>
                <div className="grid"><div className="pointer-black" row="3" col="6"></div></div>
                <div className="grid anchor-rt"><div className="pointer-black" row="3" col="7"></div></div>
                <div className="grid anchor-lt">
                    <div className="pointer-black" row="3" col="8"></div>
                    <div className="pointer-black pointer-rt" row="3" col="9"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="1"></div>
                    <div className="pointer-black pointer-lb" row="5" col="1"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="2"></div>
                    <div className="pointer-black pointer-lb" row="5" col="2"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="3"></div>
                    <div className="pointer-black pointer-lb" row="5" col="3"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="4"></div>
                    <div className="pointer-black pointer-lb" row="5" col="4"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="5"></div>
                    <div className="pointer-black pointer-lb" row="5" col="5"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="6"></div>
                    <div className="pointer-black pointer-lb" row="5" col="6"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="7"></div>
                    <div className="pointer-black pointer-lb" row="5" col="7"></div>
                </div>
                <div className="grid">
                    <div className="pointer-black" row="4" col="8"></div>
                    <div className="pointer-black pointer-rt" row="4" col="9"></div>
                    <div className="pointer-black pointer-lb" row="5" col="8"></div>
                    <div className="pointer-black pointer-rb" row="5" col="9"></div>
                </div>
                <div className="divider"></div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="1"></div>
                    <div className="pointer-red" row="7" col="1"></div>
                </div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="2"></div>
                    <div className="pointer-red" row="7" col="2"></div>
                </div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="3"></div>
                    <div className="pointer-red" row="7" col="3"></div>
                </div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="4"></div>
                    <div className="pointer-red" row="7" col="4"></div>
                </div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="5"></div>
                    <div className="pointer-red" row="7" col="5"></div>
                </div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="6"></div>
                    <div className="pointer-red" row="7" col="6"></div>
                </div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="7"></div>
                    <div className="pointer-red" row="7" col="7"></div>
                </div>
                <div className="grid">
                    <div className="pointer-red pointer-lt" row="6" col="8"></div>
                    <div className="pointer-red pointer-rt" row="6" col="9"></div>
                    <div className="pointer-red" row="7" col="8"></div>
                    <div className="pointer-red pointer-rb" row="7" col="9"></div>
                </div>
                <div className="grid anchor-rb"><div className="pointer-red" row="8" col="1"></div></div>
                <div className="grid anchor-lb"><div className="pointer-red" row="8" col="2"></div></div>
                <div className="grid"><div className="pointer-red" row="8" col="3"></div></div>
                <div className="grid"><div className="pointer-red" row="8" col="4"></div></div>
                <div className="grid"><div className="pointer-red" row="8" col="5"></div></div>
                <div className="grid"><div className="pointer-red" row="8" col="6"></div></div>
                <div className="grid anchor-rb"><div className="pointer-red" row="8" col="7"></div></div>
                <div className="grid anchor-lb">
                    <div className="pointer-red" row="8" col="8"></div>
                    <div className="pointer-red pointer-rb" row="8" col="9"></div>
                </div>
                <div className="grid anchor-rt"><div className="pointer-red" row="9" col="1"></div></div>
                <div className="grid anchor-lt"><div className="pointer-red" row="9" col="2"></div></div>
                <div className="grid"><div className="pointer-red" row="9" col="3"></div></div>
                <div className="grid slant"><div className="pointer-red" row="9" col="4"></div></div>
                <div className="grid slant-back"><div className="pointer-red" row="9" col="5"></div></div>
                <div className="grid"><div className="pointer-red" row="9" col="6"></div></div>
                <div className="grid anchor-rt"><div className="pointer-red" row="9" col="7"></div></div>
                <div className="grid anchor-lt">
                    <div className="pointer-red" row="9" col="8"></div>
                    <div className="pointer-red pointer-rb" row="9" col="9"></div>
                </div>
                <div className="grid"><div className="pointer-red" row="10" col="1"></div></div>
                <div className="grid"><div className="pointer-red" row="10" col="2"></div></div>
                <div className="grid"><div className="pointer-red" row="10" col="3"></div></div>
                <div className="grid slant-back"><div className="pointer-red" row="10" col="4"></div></div>
                <div className="grid slant"><div className="pointer-red" row="10" col="5"></div></div>
                <div className="grid"><div className="pointer-red" row="10" col="6"></div></div>
                <div className="grid"><div className="pointer-red" row="10" col="7"></div></div>
                <div className="grid">
                    <div className="pointer-red" row="10" col="8"></div>
                    <div className="pointer-red pointer-rb" row="10" col="9"></div>
                </div>
            </div>
          );
    }
}

export {Checkerboard};
export default Checkerboard;