import React, { Component } from 'react';

class UserIntro extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#333333"}}>
                <div style={{ height: "60px", backgroundColor: "#333333", display: "flex", flexDirection: "row"}}>
                    <div style={{ height: "60px", backgroundColor: "#333333"}}>
                        <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><h6 style={{ color: "#ABABAB" }}>마이페이지</h6></a>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><h6 style={{ color: "#ABABAB" }}>글 쓰러 가기</h6></a>
                    </div>
                </div>
                <div className="container" style={{ display:'flex', flexDirection: "column", justifyContent: "space-around", 
                                                    alignItems: "center", width: "500px", height: "200px", backgroundColor: "#333333"}}>
                        <div style={{marginTop: "0px"}}>
                            <h2 style={{ color: "#fff000", display: "inline" }}><strong>김수현</strong></h2>
                            <h4 style={{ color: "#ffffff", display: "inline" }}>님 , 안녕하세요. </h4>
                        </div>
                        <div style={{marginBottom: "20px"}}>
                            {/* <h4 style={{ color: "#ffffff", display: "inline" }}> 댓글이 </h4>
                            <h2 style={{ color: "#fff000", display: "inline" }}> 3</h2>
                            <h4 style={{ color: "#ffffff", display: "inline" }}> 개 달렸어.</h4> */}
                            <h4 style={{ color: "#ffffff", display: "inline" }}>새로운 알림이 없어요.</h4>
                        </div>
                </div>
            </div>
        );
    }
}

export default UserIntro;