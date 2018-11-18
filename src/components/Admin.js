import React, { Component } from 'react';
import ControlTags from './ControlTags';
import ControlUsers from './ControlUsers';

class Admin extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#333333", position: "fixed", width: "100%", height: "100%"}}>
                <div style={{ height: "60px", backgroundColor: "#333333", display: "flex", flexDirection: "row"}}>
                    <div style={{ height: "60px", backgroundColor: "#333333"}}>
                        <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><h6 style={{ color: "#ABABAB" }}>돌아가기</h6></a>
                    </div>
                </div>
                <div style={{ backgroundColor: "#333333", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h3 style={{ margin: "22px 0 0 0", color: "#ffffff"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;유저 관리</h3>
                        <div style={{ overflowY: "scroll", backgroundColor: "#333333", width: "700px", height: "600px", borderRadius: "8px",
                                    display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                            <div style={{ margin: "50px" }}>
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                                <ControlUsers />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h3 style={{ margin: "22px 0 0 0", color: "#ffffff"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;태그 관리</h3>
                        <ControlTags />
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;