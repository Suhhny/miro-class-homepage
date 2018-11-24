import React, { Component } from 'react';
import BoardCard from './BoardCard';
import UserIntro from './UserIntro';

class BoardList extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc", margin: "0px"}}>
                <div>
                    <UserIntro />
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "20px 60px 10px 60px",
                                    backgroundColor:"#fcfcfc"}}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#eff3f7", borderRadius: "40px", padding: "0px 20px 0px 20px"}}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <p style={{ color: "#000000" }}>수업</p>
                                <div style={{ backgroundColor: "#6496e5", width: "150px", height: "2px", borderRadius: "20px"}}></div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <p style={{ color: "#000000" }}>공지</p>
                                <div style={{ backgroundColor: "", width: "150px", height: "2px", borderRadius: "20px"}}> </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <p style={{ color: "#000000" }}>공유</p>
                                <div style={{ backgroundColor: "", width: "150px", height: "2px", borderRadius: "20px"}}> </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <div style={{ backgroundColor: "#fcfcfc", display: "flex", flexFlow: "row wrap", justifyContent: "center", marginTop: "45px", width: "1000px"}}>
                            <div style={{margin: "15px"}}>
                                <BoardCard />
                            </div>
                            <div style={{margin: "15px"}}>
                                <BoardCard />
                            </div>
                            <div style={{margin: "15px"}}>
                                <BoardCard />
                            </div>
                            <div style={{margin: "15px"}}>
                                <BoardCard />
                            </div>
                            <div style={{margin: "15px"}}>
                                <BoardCard />
                            </div>
                            <div style={{margin: "15px"}}>
                                <BoardCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardList;