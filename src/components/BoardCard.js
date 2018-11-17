import React, { Component } from 'react';

class BoardCard extends Component {
    render(){
        return(
                <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin:"0px 0px 0px 0px",
                                                    width: "260px", height: "400px", backgroundColor: "#EBEBEB", borderRadius: "10px", boxShadow: "4px 4px #acacab"}}>
                    <div style={{ width: "100%", height: "auto", marginTop: "30px"}}>
                        <img src="../assets/javascript.png" alt="thumbnail"
                            style={{ width: "100%", height: "auto"}}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft:"30px", height:"50px"}}>
                        <img src="../assets/profile-default.png" 
                            alt="profile" style={{ width: "30px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                        <h6 style={{ display: "inline"}}>&nbsp;&nbsp; Suhhny</h6>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", height: "140px"}}>
                        <p style={{ fontSize:"28px", margin:"0px 24px 0px 24px"}}>장지지장장지지좌우장지지</p>
                    </div>
                    <div style={{ display: "flex", flowDirection: "row", justifyContent: "space-between"}}>
                        <p style={{margin: "0px 0px 0px 10px"}}>2018.11.17</p>
                        <span style={{margin: "0px 10px 0px 0px"}}>
                            <p style={{ display: "inline"}}>댓글 </p>
                            <p style={{ display: "inline", fontWeight:"bold"}}> 100</p>
                            <p style={{ display: "inline"}}>개</p>
                        </span>
                    </div>
                </div>
        );
    }
}

export default BoardCard;