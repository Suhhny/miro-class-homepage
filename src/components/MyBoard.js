import React, { Component } from 'react';

class Activity extends Component {
    render(){
        return(
            <div style={{ width: "100%", height: "100px", maxwidth: "70%"}}>
                <div style={{ backgroundColor: "#eff3f7", width: "650px", height: "80px", borderRadius: "2px",
                            boxShadow: "0 8px 38px hsla(0,0%,52%,.3), 0 5px 12px hsla(0,0%,52%,.22)",
                            display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <div style={{ flexGrow: "1", height: "60px"}}>
                        <img src="../assets/profile.png" 
                            alt="profile" style={{ width: "60px", height: "60px", borderRadius: "100%", marginLeft: "15px"}}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: "8"}}>
                        <div style={{ display: "flex", flexDirection: "row", margin: "0", alignItems: "flex-end"}}>
                            <p style={{ margin: "0", color: "#6496e5", fontSize: "20px", fontWeight: "bold", fontFamily: "Nanum Myeongjo"}}>제목입니다만,,,</p>
                            <p style={{ margin: "0", color: "#ababab", fontSize: "13px"}}>에 댓글이 12개 달렸습니다.</p>
                        </div>
                        <p style={{ margin: "0 0 0 5px", color: "#000000"}}>수달 호주의 수도 어쩌구 저쩌고</p>
                    </div>
                    <div style={{ flexGrow: "1"}}>
                        <p style={{ color: "#ababab", fontSize: "14px"}}>2018년 11월 17일</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Activity;