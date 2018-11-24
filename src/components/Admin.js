import React, { Component } from 'react';
import ControlTags from './ControlTags';
import ControlUsers from './ControlUsers';

class Admin extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc", position: "fixed", width: "100%", height: "100%"}}>
                <div style={{ height: "60px", backgroundColor: "#fcfcfc", display: "flex", flexDirection: "row"}}>
                    <div style={{ height: "60px", backgroundColor: "#fcfcfc"}}>
                        <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                    </div>
                </div>
                <div style={{ backgroundColor: "#fcfcfc", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h5 style={{ margin: "22px 0 0 50px", color: "#6496e5", fontWeight: "bold", fontFamily: "Nanum Myeongjo"}}>유저 관리</h5>
                        <div style={{ overflowY: "scroll", backgroundColor: "#fcfcfc", width: "700px", height: "600px", borderRadius: "8px",
                                    display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "20px"}}>
                            <div style={{ margin: "30px" }}>
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
                        <h5 style={{ margin: "22px 0 0 50px", color: "#6496e5", fontWeight: "bold", fontFamily: "Nanum Myeongjo"}}>태그 관리</h5>
                        <ControlTags />
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;