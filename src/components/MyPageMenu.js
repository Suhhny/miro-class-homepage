import React, { Component } from 'react';
import Activity from './Activity';
import MyBoard from './MyBoard';
import MyComment from './MyComment'

class MyPageMenu extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc", position: "fixed", width: "100%", height: "100%"}}>
                <div style={{ height: "60px", backgroundColor: "#fcfcfc", display: "flex", flexDirection: "row"}}>
                    <div style={{ height: "60px", backgroundColor: "#fcfcfc"}}>
                        <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><p style={{ color: "#6496e5", fontSize: "13px" }}>프로필 변경</p></a>
                    </div>
                </div> 
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "flex-start"}}>
                    <div className="profile" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems:"center", height: "900px", flexGrow: "1"}}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexGrow: "1"}}>
                            <div style={{ width: "80px", height: "80px"}}>
                                <img src="../assets/profile.png" 
                                    alt="profile" style={{ width: "80px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                            </div>
                            <div style={{ width: "25px"}}></div>
                            <div style={{ display: "flex", flexDirection: "column"}}>
                                <h4 style={{ margin: "4px", color: "#6496e5", fontFamily: "Nanum Myeongjo", fontWeight: "bold"}}>김수현</h4>
                                <h6 style={{ margin: "2px 2px 2px 8px", color: "#ababab"}}>description</h6>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", flexGrow: "1"}}>
                            <h6 style={{ margin: "5px", color: "#6b6b6b" }}>gerang9119@gmail.com</h6>
                            <h6 style={{ margin: "5px", color: "#6b6b6b" }}>전자공학부</h6>
                            <h6 style={{ margin: "5px", color: "#6b6b6b" }}>여성</h6>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "baseline", flexGrow: "3" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                                {/* focus line */}
                                <div style={{ backgroundColor: "#6496e5", width: "2px", height: "45px"}}></div>
                                <div style={{ width: "15px"}}></div>
                                {/* focus line end */}
                                <h5 style={{ color: "#000000" }}>활동알림 </h5>
                                <div style={{ width: "15px"}}></div>
                                <p style={{ color: "#6496e5", fontSize: "25px", margin: "0 0 4px 0" }}> 3</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                                {/* focus line */}
                                <div style={{ backgroundColor: "", width: "2px", height: "45px"}}></div>
                                <div style={{ width: "15px"}}></div>
                                <h5 style={{ color: "#000000" }}>내가 쓴 글</h5>
                                <div style={{ width: "15px"}}></div>
                                <p style={{ color: "#6496e5", fontSize: "25px", margin: "0 0 4px 0"  }}>4</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                                {/* focus line */}
                                <div style={{ backgroundColor: "", width: "2px", height: "45px"}}></div>
                                <div style={{ width: "15px"}}></div>
                                <h5 style={{ color: "#000000" }}>내가 쓴 댓글</h5>
                                <div style={{ width: "15px"}}></div>
                                <p style={{ color: "#6496e5", fontSize: "25px", margin: "0 0 4px 0"  }}>21</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#6496e5", width: "1px", height: "660px" }}></div>
                    <div style={{ overflowY: "scroll", width: "700px", height: "660px", borderRadius: "8px",
                                display: "flex", flexDirection: "column", justifyContent: "flex-start", flexGrow: "3", alignItems: "center"}}>
                        <div style={{ margin: "40px"}}>
                            <Activity />
                            <Activity />
                            <Activity />
                            <Activity />
                            <MyBoard />
                            <MyBoard />
                            <MyBoard />
                            <MyComment />
                            <MyComment />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyPageMenu;
