import React, { Component } from 'react';

class Comment extends Component {
    render(){
        return(
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginBottom: "20px"}}>
                <div className="comments" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "space-between"}}>
                    <div style={{ width: "20px"}}></div>
                    <div style={{ width: "40px", height: "40px"}}>
                        <img src="../assets/profile.png" 
                            alt="profile" style={{ width: "40px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                    </div>
                    <div style={{ width: "10px"}}></div>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <h6 style={{ margin: "0px", color: "#000000"}}>Suhhny</h6>
                        <p style={{ margin: "0px 0px 0px 1px", color: "#ababab", fontSize: "12px"}}>2018년 11월 17일</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexGrow: "1"}}>
                        <a style={{ margin: "9px 4px 9px 10px" }}>
                            <span style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                                <i className="tiny material-icons" style={{ color: "#6496e5", height: "14px"}}>mood</i>
                                <p style={{display: "inline", color: "#6496e5", fontSize: "12px", margin: "0"}}>36</p>
                            </span>
                        </a>
                        <a style={{ margin: "9px 0px 9px 5px" }}>
                            <span style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                                <i className="tiny material-icons" style={{ color: "#6496e5", height: "14px"}}>mood_bad</i>
                                <p style={{display: "inline", color: "#6496e5", fontSize: "12px", margin: "0"}}>3</p>
                            </span>
                        </a>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start"}}>
                        <a><p style={{ color: "#ababab", fontSize: "13px", margin: "5px" }}>답글</p></a>
                        <a><p style={{ color: "#ababab", fontSize: "13px", margin: "5px" }}>수정</p></a>
                        <a><p style={{ color: "#ff3030", fontSize: "13px", margin: "5px" }}>삭제</p></a>
                    </div>
                </div>
                <div style={{ marginLeft: "70px" }}>
                    <h6 style={{ color: "#000000", fontFamily: "Nanum Myeongjo" }}>Comment Test</h6>
                </div>
                <div style={{ marginTop: "22px"}}>
                    <div style={{ width: "100%", height: "1px", backgroundColor: "#f2f2f2"}}></div>
                </div>
            </div>
        );
    }
}

export default Comment;