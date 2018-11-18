import React, { Component } from 'react';
import Activity from './Activity';
import MyBoard from './MyBoard';
import MyComment from './MyComment'

class MyPageMenu extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#333333"}}>
                <div style={{ display: "flex", flexDirection:"column", justifyContent: "space-between", position: "fixed", height: "100%", width: "100%", backgroundColor: "#333333"}}>
                    <div className="logo" style={{ backgroundColor: "#333333", display: "flex", flexDirection: "row"}}>
                        <div style={{ height: "60px", backgroundColor: "#333333"}}>
                            <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                        </div>
                        <div style={{ width: "20px" }}></div>
                        <div style={{ display: "flex", alignItems: "center"}}>
                            <a><h6 style={{ color: "#ABABAB" }}>마이페이지 나가기</h6></a>
                        </div>
                        <div style={{ width: "20px" }}></div>
                        <div style={{ display: "flex", alignItems: "center"}}>
                            <a><h6 style={{ color: "#ABABAB" }}>프로필 변경</h6></a>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#333333", display: "flex", flexDirection: "row", justifyContent: "flex-start", marginBottom: "50px", height: "100%"}}>
                        <div style={{ width: "10%"}}></div>
                        <div className="profile" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems:"center", height: "100%", minWidth: "350px", minHeight: "250px"}}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{ width: "80px", height: "80px"}}>
                                    <img src="../assets/profile-default.png" 
                                        alt="profile" style={{ width: "80px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column"}}>
                                    <h3 style={{ margin: "0px", color: "#ffffff"}}>김수현</h3>
                                    <h5 style={{ margin: "0px 0px 0px 5px", color: "#ababab"}}>경북대 간판</h5>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%"}}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                                    {/* focus line */}
                                    <div style={{ backgroundColor: "#fff000", width: "2px", height: "45px"}}></div>
                                    <div style={{ width: "15px"}}></div>
                                    {/* focus line end */}
                                    <h5 style={{ color: "#ffffff" }}>활동알림 </h5>
                                    <div style={{ width: "15px"}}></div>
                                    <p style={{ color: "#fff000", fontSize: "25px", margin: "0 0 4px 0" }}> 3</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                                    <h5 style={{ color: "#ffffff" }}>내가 쓴 글</h5>
                                    <div style={{ width: "15px"}}></div>
                                    <p style={{ color: "#fff000", fontSize: "25px", margin: "0 0 4px 0"  }}>4</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                                    <h5 style={{ color: "#ffffff" }}>내가 쓴 댓글</h5>
                                    <div style={{ width: "15px"}}></div>
                                    <p style={{ color: "#fff000", fontSize: "25px", margin: "0 0 4px 0"  }}>21</p>
                                </div>
                            </div>
                        </div>
                        <div className="line" style={{ backgroundColor: "#fff000", width: "1px", minWidth: "1px" }}></div>
                        <div className="log" style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", alignItems: "center"}}>
                            <Activity />
                            <Activity />
                            <MyBoard />
                            <MyComment />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyPageMenu;
