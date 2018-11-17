import React, { Component } from 'react';

class Comment extends Component {
    render(){
        return(
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginBottom: "20px"}}>
                <div className="comments" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <div style={{ width: "20px"}}></div>
                        <div style={{ width: "40px", height: "40px"}}>
                            <img src="../assets/profile-default.png" 
                                alt="profile" style={{ width: "40px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                        </div>
                    <div style={{ width: "10px"}}></div>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <h6 style={{ margin: "0px", color: "#ababab"}}>김수현</h6>
                    <p style={{ margin: "0px 0px 0px 1px", color: "#ababab", fontSize: "12px"}}>2018년 11월 17일</p>
                </div>
                <div style={{ width: "10px"}}></div>
                    <a className="btn-flat" style={{ color: "#fff000"}}>답글</a>
                </div>
                <div style={{ marginLeft: "70px" }}>
                    <h6 style={{ color: "#FFFFFF" }}>귀엽당</h6>
                </div>
            </div>
        );
    }
}

export default Comment;