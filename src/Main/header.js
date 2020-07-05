import React, { Component } from 'react';

class Header extends Component{

    render() {
        return (
        <div className="header">
            <div id="menuButtonBox">
                <button id="menuButton" onMouseDown={this.props.handleMouseDown}></button>
            </div>
            <div className="logoBox">
                <div id="headerTitle">
                    Journal of ABC
                </div>
            </div>
        </div>
        );
    }

}

export default Header;

// function Header() {
//     return (
//         <div className="header">
//             <div id="menuButtonBox">
//                 <button id="menuButton"></button>
//             </div>
//             <div className="logoBox">
//                 <div id="headerTitle">
//                     Journal of ABC
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Header;