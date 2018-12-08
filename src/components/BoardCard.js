import React, { Component } from 'react';

class BoardCard extends Component {
    render(){
        return(
                <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin:"0px 0px 0px 0px", alignItems: "center",
                                                    width: "260px", height: "400px", backgroundColor: "#ffffff", borderRadius: "2px", boxShadow: "0 8px 38px hsla(0,0%,52%,.3), 0 5px 12px hsla(0,0%,52%,.22)"}}>
                    <div style={{ width: "100%", height: "170px", margin: "0px", display: "flex", justifyContent: "center", flexDirection: "column", backgroundColor: "#fcfcfc"}}>
                        <img src="../assets/react.jpeg" alt="thumbnail"
                            style={{ width: "100%", height: "auto", alignSelf: "center"}}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "240px"}}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", margin: "10px 0px 0px 30px", height: "30px"}}>
                            <img src="../assets/profile.png"
                                alt="profile" style={{ width: "20px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                            <p style={{ color: "#6496e5", fontSize: "13px"}}>&nbsp;&nbsp; Suhhny</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", height: "140px"}}>
                            <p style={{ fontSize: "20px", margin:"10px 24px 0px 24px", fontFamily: "Nanum Myeongjo", fontWeight: "bold"}}>REACT props와 state</p>
                            <p style={{ fontSize: "10px", margin: "10px 0px 0px 24px", color: "#c6c6c6"}}>#REACT</p>
                        </div>
                        <div style={{ display: "flex", flowDirection: "row", justifyContent: "space-between", alignItems: "flex-end", width: "200px", alignSelf: "center"}}>
                            <p style={{margin: "0", color: "#c6c6c6"}}>2018.11.17</p>
                            <span>
                                <p style={{ display: "inline", color: "#c6c6c6"}}>댓글 </p>
                                <p style={{ display: "inline", color: "#c6c6c6"}}> 100</p>
                                <p style={{ display: "inline", color: "#c6c6c6"}}>개</p>
                            </span>
                        </div>
                    </div>
                </div>
        );
    }
}

export default BoardCard;
