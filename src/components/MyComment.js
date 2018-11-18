import React, { Component } from 'react';

class Activity extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#5a5c5e", margin: "7px 0px 7px 0px", width: "550px", height: "80px", borderRadius: "5px",
                        display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", opacity: "0.7"}}>
                <div style={{ flexGrow: "1", height: "60px"}}>
                    <img src="../assets/profile-default.png" 
                        alt="profile" style={{ width: "60px", height: "60px", borderRadius: "100%", marginLeft: "15px"}}/>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: "8"}}>
                    <div style={{ display: "flex", flexDirection: "row", margin: "0", alignItems: "flex-end"}}>
                        <p style={{ margin: "0", color: "#fff000", fontSize: "20px"}}>제목입니다만,,,</p>
                        <p style={{ margin: "0", color: "#ababab", fontSize: "13px"}}>게시물에 댓글을 남겼습니다.</p>
                    </div>
                    <p style={{ margin: "0 0 0 5px", color: "#ffffff"}}>내가 단 댓글</p>
                </div>
                <div style={{ flexGrow: "1"}}>
                    <p style={{ color: "#ababab", fontSize: "14px"}}>2018년 11월 18일</p>
                </div>
            </div>
        );
    }
}

export default Activity;