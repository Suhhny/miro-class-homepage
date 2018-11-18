import React, { Component } from 'react';
import BoardCard from './BoardCard';
import UserIntro from './UserIntro';

class BoardList extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#333333", margin: "0px"}}>
                <UserIntro />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "20px 60px 10px 60px",
                                backgroundColor:"#333333"}}>
                    <div>
                        <h4 style={{ color: "#ffffff" }}>수업</h4>
                        <div style={{ backgroundColor: "#fff000", width: "60px", height: "3px"}}></div>
                    </div>
                    <div>
                        <h4 style={{ color: "#ffffff" }}>공지</h4>
                        <div style={{ backgroundColor: "#fff000", width: "60px", height: "3px"}}> </div>
                    </div>
                    <div>
                        <h4 style={{ color: "#ffffff" }}>공유</h4>
                        <div style={{ backgroundColor: "#fff000", width: "60px", height: "3px"}}> </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#333333", display: "flex", flexFlow: "row wrap", justifyContent: "center", marginTop: "45px"}}>
                    <div style={{margin: "23px"}}>
                        <BoardCard />
                    </div>
                    <div style={{margin: "23px"}}>
                        <BoardCard />
                    </div>
                    <div style={{margin: "23px"}}>
                        <BoardCard />
                    </div>
                    <div style={{margin: "23px"}}>
                        <BoardCard />
                    </div>
                    <div style={{margin: "23px"}}>
                        <BoardCard />
                    </div>
                    <div style={{margin: "23px"}}>
                        <BoardCard />
                    </div>
                    <div style={{margin: "23px"}}>
                        <BoardCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardList;