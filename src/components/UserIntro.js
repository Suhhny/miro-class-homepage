import React, { Component } from 'react';

class UserIntro extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc"}}>
                <div style={{ height: "60px", backgroundColor: "#fcfcfc", display: "flex", flexDirection: "row"}}>
                    <div style={{ height: "60px", backgroundColor: "#fcfcfc"}}>
                        <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><p style={{ color: "#6496e5", fontSize: "13px" }}>마이페이지</p></a>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><p style={{ color: "#6496e5", fontSize: "13px" }}>글 쓰러 가기</p></a>
                    </div>
                </div>
                <div className="container" style={{ display:'flex', flexDirection: "column", justifyContent: "space-around", 
                                                    alignItems: "center", width: "500px", backgroundColor: "#fcfcfc"}}>
                        <div style={{marginTop: "0px"}}>
                            <h3 style={{ color: "#6496e5", display: "inline" }}><strong>김수현</strong></h3>
                            <h5 style={{ color: "#000000", display: "inline" }}>님, &nbsp;&nbsp;안녕하세요. </h5>
                        </div>
                        <div style={{marginBottom: "20px"}}>
                            <h6 style={{ color: "#000000", display: "inline" }}> 댓글이 </h6>
                            <h5 style={{ color: "#6496e5", display: "inline" }}> 3</h5>
                            <h6 style={{ color: "#000000", display: "inline" }}> 개 달렸습니다.</h6>
                            {/* <h6 style={{ color: "#000000", display: "inline" }}>새로운 알림이 없어요.</h6> */}
                        </div>
                </div>
            </div>
        );
    }
}

export default UserIntro;