import React from 'react';
import Checkerboard from './components/checkerboard.jsx';

// function App() {
//   return (
//     <div id="Checkerboard">
//       <div class="grid">
//           <div class="pointer-black" row="1" col="1">
//               <div class="chessman" group="black">車</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="1" col="2">
//               <div class="chessman" group="black">馬</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="1" col="3">
//               <div class="chessman" group="black">象</div>
//           </div>
//       </div>
//       <div class="grid slant">
//           <div class="pointer-black" row="1" col="4">
//               <div class="chessman" group="black">仕</div>
//           </div>
//       </div>
//       <div class="grid slant-back">
//           <div class="pointer-black" row="1" col="5">
//               <div class="chessman" group="black">将</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="1" col="6">
//               <div class="chessman" group="black">仕</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="1" col="7">
//               <div class="chessman" group="black">象</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="1" col="8">
//               <div class="chessman" group="black">馬</div>
//           </div>
//           <div class="pointer-black pointer-rt" row="1" col="9">
//               <div class="chessman" group="black">車</div>
//           </div>
//       </div>
//       <div class="grid anchor-rb">
//           <div class="pointer-black" row="2" col="1"></div>
//       </div>
//       <div class="grid anchor-lb">
//           <div class="pointer-black" row="2" col="2"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="2" col="3"></div>
//       </div>
//       <div class="grid slant-back">
//           <div class="pointer-black" row="2" col="4"></div>
//       </div>
//       <div class="grid slant">
//           <div class="pointer-black" row="2" col="5"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="2" col="6"></div>
//       </div>
//       <div class="grid anchor-rb">
//           <div class="pointer-black" row="2" col="7"></div>
//       </div>
//       <div class="grid anchor-lb">
//           <div class="pointer-black" row="2" col="8"></div>
//           <div class="pointer-black pointer-rt" row="2" col="9"></div>
//       </div>
//       <div class="grid anchor-rt">
//           <div class="pointer-black" row="3" col="1"></div>
//       </div>
//       <div class="grid anchor-lt">
//           <div class="pointer-black" row="3" col="2">
//               <div class="chessman" group="black">炮</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="3" col="3"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="3" col="4"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="3" col="5"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="3" col="6"></div>
//       </div>
//       <div class="grid anchor-rt">
//           <div class="pointer-black" row="3" col="7"></div>
//       </div>
//       <div class="grid anchor-lt">
//           <div class="pointer-black" row="3" col="8">
//               <div class="chessman" group="black">炮</div>
//           </div>
//           <div class="pointer-black pointer-rt" row="3" col="9"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="1">
//               <div class="chessman" group="black">卒</div>
//           </div>
//           <div class="pointer-black pointer-lb" row="5" col="1"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="2"></div>
//           <div class="pointer-black pointer-lb" row="5" col="2"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="3">
//               <div class="chessman" group="black">卒</div>
//           </div>
//           <div class="pointer-black pointer-lb" row="5" col="3"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="4"></div>
//           <div class="pointer-black pointer-lb" row="5" col="4"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="5">
//               <div class="chessman" group="black">卒</div>
//           </div>
//           <div class="pointer-black pointer-lb" row="5" col="5"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="6"></div>
//           <div class="pointer-black pointer-lb" row="5" col="6"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="7">
//               <div class="chessman" group="black">卒</div>
//           </div>
//           <div class="pointer-black pointer-lb" row="5" col="7"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-black" row="4" col="8"></div>
//           <div class="pointer-black pointer-rt" row="4" col="9">
//               <div class="chessman" group="black">卒</div>
//           </div>
//           <div class="pointer-black pointer-lb" row="5" col="8"></div>
//           <div class="pointer-black pointer-rb" row="5" col="9"></div>
//       </div>
//       <div class="divider"></div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="1"></div>
//           <div class="pointer-red" row="7" col="1">
//               <div class="chessman" group="red">兵</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="2"></div>
//           <div class="pointer-red" row="7" col="2"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="3"></div>
//           <div class="pointer-red" row="7" col="3">
//               <div class="chessman" group="red">兵</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="4"></div>
//           <div class="pointer-red" row="7" col="4"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="5"></div>
//           <div class="pointer-red" row="7" col="5">
//               <div class="chessman" group="red">兵</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="6"></div>
//           <div class="pointer-red" row="7" col="6"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="7"></div>
//           <div class="pointer-red" row="7" col="7">
//               <div class="chessman" group="red">兵</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red pointer-lt" row="6" col="8"></div>
//           <div class="pointer-red pointer-rt" row="6" col="9"></div>
//           <div class="pointer-red" row="7" col="8"></div>
//           <div class="pointer-red pointer-rb" row="7" col="9">
//               <div class="chessman" group="red">兵</div>
//           </div>
//       </div>
//       <div class="grid anchor-rb">
//           <div class="pointer-red" row="8" col="1"></div>
//       </div>
//       <div class="grid anchor-lb">
//           <div class="pointer-red" row="8" col="2">
//               <div class="chessman" group="red">砲</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="8" col="3"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="8" col="4"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="8" col="5"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="8" col="6"></div>
//       </div>
//       <div class="grid anchor-rb">
//           <div class="pointer-red" row="8" col="7"></div>
//       </div>
//       <div class="grid anchor-lb">
//           <div class="pointer-red" row="8" col="8">
//               <div class="chessman" group="red">砲</div>
//           </div>
//           <div class="pointer-red pointer-rb" row="8" col="9"></div>
//       </div>
//       <div class="grid anchor-rt">
//           <div class="pointer-red" row="9" col="1"></div>
//       </div>
//       <div class="grid anchor-lt">
//           <div class="pointer-red" row="9" col="2"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="9" col="3"></div>
//       </div>
//       <div class="grid slant">
//           <div class="pointer-red" row="9" col="4"></div>
//       </div>
//       <div class="grid slant-back">
//           <div class="pointer-red" row="9" col="5"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="9" col="6"></div>
//       </div>
//       <div class="grid anchor-rt">
//           <div class="pointer-red" row="9" col="7"></div>
//       </div>
//       <div class="grid anchor-lt">
//           <div class="pointer-red" row="9" col="8"></div>
//           <div class="pointer-red pointer-rb" row="9" col="9"></div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="10" col="1">
//               <div class="chessman" group="red">車</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="10" col="2">
//               <div class="chessman" group="red">馬</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="10" col="3">
//               <div class="chessman" group="red">相</div>
//           </div>
//       </div>
//       <div class="grid slant-back">
//           <div class="pointer-red" row="10" col="4">
//               <div class="chessman" group="red">仕</div>
//           </div>
//       </div>
//       <div class="grid slant">
//           <div class="pointer-red" row="10" col="5">
//               <div class="chessman" group="red">帅</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="10" col="6">
//               <div class="chessman" group="red">仕</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="10" col="7">
//               <div class="chessman" group="red">相</div>
//           </div>
//       </div>
//       <div class="grid">
//           <div class="pointer-red" row="10" col="8">
//               <div class="chessman" group="red">馬</div>
//           </div>
//           <div class="pointer-red pointer-rb" row="10" col="9">
//               <div class="chessman" group="red">車</div>
//           </div>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
    render() {
        return (<React.Fragment>
            <Checkerboard />
        </React.Fragment>)
    };
}

export default App;
