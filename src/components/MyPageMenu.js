import React, { Component } from 'react';

class MyPageMenu extends Component {
    render(){
        return(
                <div style={{ display: "flex", flexDirection:"column", justifyContent: "space-between", position: "fixed", height: "100%", width: "100%", backgroundColor: "#333333"}}>
                    <div style={{ backgroundColor: "#333333"}}>
                        <div style={{ height: "60px", backgroundColor: "#333333"}}>
                            <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#333333", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "50px"}}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems:"center"}}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <div style={{ width: "80px", height: "80px"}}>
                                    <img src="../assets/profile-default.png" 
                                        alt="profile" style={{ width: "80px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column"}}>
                                    <h3 style={{ margin: "0px", color: "#ffffff"}}>김수현</h3>
                                    <h5 style={{ margin: "0px 0px 0px 5px", color: "#ffffff"}}>경북대 간판</h5>
                                </div>
                            </div>
                            <div>
                                <h4 style={{ color: "#ffffff" }}>활동알림</h4>
                                <h4 style={{ color: "#ffffff" }}>내가 쓴 글</h4>
                                <h4 style={{ color: "#ffffff" }}>내가 쓴 댓글</h4>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#fff000", width: "1px", minWidth: "1px", height: "100%", maxHeight: "1000px", minHeight:"100px", margin: "60px 50px 0px 50px"}}></div>
                        <div  style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", 
                                        alignItems:"center"}}>
                            <div style={{ backgroundColor: "#ffffff", width: "500px", height: "65px"}}>d</div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default MyPageMenu;
