import React, { Component } from 'react';

class ControlUsers extends Component {
    render(){
        return(
            <div style={{ width: "100%", height: "100px", maxwidth: "70%"}}>
                <div style={{ backgroundColor: "#eff3f7", borderRadius: "10px", width: "100%", height: "90px", minHeight: "60px", borderRadius: "2px", boxShadow: "0 8px 38px hsla(0,0%,52%,.3), 0 5px 12px hsla(0,0%,52%,.22)",
                            display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <div style={{ flexGrow: "1", height: "50px", width: "50px"}}>
                        <img src="../assets/profile.png" 
                            alt="profile" style={{ width: "50px", height: "50px", borderRadius: "100%", marginLeft: "15px"}}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: "1"}}>
                        <div style={{ display: "flex", flexDirection: "row", margin: "0", alignItems: "flex-end"}}>
                            <p style={{ margin: "0", color: "#6496e5", fontSize: "20px"}}>김수현</p>
                            <p style={{ margin: "0 0 1px 0", color: "#ababab", fontSize: "14px"}}>&nbsp;관리자</p>
                        </div>
                        <p style={{ margin: "0 0 0 5px", color: "#000000"}}>gerang9119@gmail.com</p>
                    </div>
                    <div style={{ flexGrow: "1"}}>
                        <div style={{width: "1px", height: "50px", backgroundColor: "#6496e5"}}></div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: "1"}}>
                            <p style={{ margin: "0", color: "#000000", fontSize: "13px"}}>2017112491</p>
                            <p style={{ margin: "0", color: "#000000", fontSize: "13px"}}>전자공학부</p>
                            <p style={{ margin: "0", color: "#000000", fontSize: "13px"}}>여성</p>
                    </div>
                    <div style={{ margin: "3px"}}>
                        <a className="waves-effect waves-light btn-flat"><p style={{ margin: "0", color: "#ababab", fontSize: "13px"}}>가입승인</p></a>
                    </div>
                    <div style={{ margin: "3px"}}>
                        <a className="waves-effect waves-light btn-flat"><p style={{ margin: "0", color: "#ababab", fontSize: "13px"}}>관리자</p></a>
                    </div>
                    <div style={{ margin: "3px"}}>
                        <a className="waves-effect waves-light btn-flat"><p style={{ margin: "0", color: "#ff3030", fontSize: "13px"}}>탈퇴</p></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlUsers;