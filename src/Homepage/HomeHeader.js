import React from 'react';

function HomeHeader() {
    return (
        <div className="home-header">
                {/* <div className="c1r1 div-padding solid-line"></div>
                <div className="c2r1 div-padding solid-line"></div>
                <div className="c3r1 div-padding solid-line"></div>
                <div className="c1r2 div-padding solid-line"></div>
                <div className="c2r2 div-padding solid-line"></div> */}

            <div className="r1 div-padding">
                <div className="c1r1 div-padding solid-line fixed-height"></div>
                <div className="c2r1 div-padding solid-line fixed-height"></div>
                <div className="c3r1 div-padding solid-line fixed-height"></div>
            </div>
            <div className="r2 div-padding">
                <div className="c1r2 div-padding solid-line fixed-height"></div>
                <div className="c2r2 div-padding solid-line fixed-height"></div>
            </div>
        </div>
    );
}

export default HomeHeader;