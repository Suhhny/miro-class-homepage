import React, { Component } from 'react';
import Comment from './Comment';

class BoardShow extends Component{
    render(){
        return(
            <div>
                <div style={{ height: "60px", backgroundColor: "#333333", display: "flex", flexDirection: "row"}}>
                    <div style={{ height: "60px", backgroundColor: "#333333"}}>
                        <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><h6 style={{ color: "#ABABAB" }}>목록으로</h6></a>
                    </div>
                </div>
                <div style={{ backgroundColor: "#333333", display: "flex", justifyContent: "center"}}>
                    <div style={{ backgroundColor: "#333333", display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "65%"}}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                            <div style={{ width: "60px", height: "60px"}}>
                                <img src="../assets/profile-default.png" 
                                    alt="profile" style={{ width: "60px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                            </div>
                            <div style={{ width: "10px"}}></div>
                            <div style={{ display: "flex", flexDirection: "column"}}>
                                <h5 style={{ margin: "0px", color: "#ababab"}}>김수현</h5>
                                <h6 style={{ margin: "0px 0px 0px 1px", color: "#ababab"}}>경북대 간판</h6>
                            </div>
                        </div>
                        <div className="title" style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "baseline"}}>
                            <h4 style={{ color: "#ffffff", marginBottom: "0px"}}>제목입니다만,,,</h4>
                            <h6 style={{ color: "#fff000" }}>&nbsp;&nbsp;&nbsp; / </h6>
                            <h6 style={{ color: "#ABABAB" }}> 수업 </h6>
                        </div>
                        <p style={{ fontSize: "13px", color: "#ABABAB", marginTop: "0px"}}>2018년 11월 17일</p>
                        <div style={{ marginBottom: "30px"}}>
                            <div style={{ width: "100%", height: "2px", backgroundColor: "#fff000"}}></div>
                        </div>
                        <div className="photos"style={{width: "100%"}}>
                            <img src="../assets/sudal.jpeg" />
                        </div>
                        <div className="content">
                            <p style={{ color: "#ffffff", fontSize: "16px"}}>
                                호주의 수도는? 캔버라 미국의 수도는? 워싱턴DC 일본의 수도는? 도쿄 중국의 수도는? 베이징 캐나다의 수도는? 오타와 영국의 수도는? 런던
                                이탈리아의 수도는? 로마 독일의 수도는? 베를린 프랑스의 수도는? 파리 한국의 수도는? 서울 필리핀의 수도는? 마닐라 싱가폴의 수도는? 싱가포르
                                인도의 수도는? 뉴델리, 뭄바이 그리스의 수도는? 아테네 인도네시아의 수도는? 자카르타 아랍에미리트의 수도는? 두바이 체코의 수도는? 프라하
                                쿠바의 수도는? 하바나
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <div className="tags" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginBottom: "6px"}}>
                                <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ABABAB"}}><strong># 수도</strong></a>
                                <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ABABAB"}}><strong># Capital-City</strong></a>
                                <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ABABAB"}}><strong># 수달</strong></a>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                                <a className="btn-flat" style={{ color: "#fff000"}}>조아요 100</a>
                                <a className="btn-flat" style={{ color: "#fff000"}}>시러요 1</a>
                            </div>
                        </div>
                        <div style={{ marginBottom: "30px"}}>
                            <div style={{ width: "100%", height: "2px", backgroundColor: "#fff000"}}></div>
                        </div>

                        {/* Comment */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginBottom: "20px"}}>
                            <div className="comments" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                                <div style={{ width: "20px"}}></div>
                                <div style={{ width: "40px", height: "40px"}}>
                                    <img src="../assets/profile-default.png" 
                                        alt="profile" style={{ width: "40px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                                </div>
                                <div style={{ width: "10px"}}></div>
                                <div style={{ display: "flex", flexDirection: "column"}}>
                                    <h6 style={{ margin: "0px", color: "#ababab"}}>김수현</h6>
                                    <p style={{ margin: "0px 0px 0px 1px", color: "#ababab", fontSize: "12px"}}>2018년 11월 17일</p>
                                </div>
                                <div style={{ width: "10px"}}></div>
                                <a className="btn-flat" style={{ color: "#fff000"}}>답글</a>
                            </div>
                            <div style={{ marginLeft: "70px" }}>
                                <h6 style={{ color: "#FFFFFF" }}>귀엽당</h6>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginBottom: "20px"}}>
                            <div className="comments" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                                <div style={{ width: "20px"}}></div>
                                <div style={{ width: "40px", height: "40px"}}>
                                    <img src="../assets/profile-default.png" 
                                        alt="profile" style={{ width: "40px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                                </div>
                                <div style={{ width: "10px"}}></div>
                                <div style={{ display: "flex", flexDirection: "column"}}>
                                    <h6 style={{ margin: "0px", color: "#ababab"}}>수현이</h6>
                                    <p style={{ margin: "0px 0px 0px 1px", color: "#ababab", fontSize: "12px"}}>2018년 11월 17일</p>
                                </div>
                                <div style={{ width: "10px"}}></div>
                                <a className="btn-flat" style={{ color: "#fff000"}}>답글</a>
                            </div>
                            <div style={{ marginLeft: "70px" }}>
                                <h6 style={{ color: "#FFFFFF" }}>와~ 잘만들었다~ 장관이고요~ 신이주신 선물이고 절경입니다~ 장관이네요~ 절경이고요~</h6>
                            </div>
                        </div>
                        <Comment />
                        {/* Comment End */}
                    </div>
                </div>
            </div>

        );
    }
}

export default BoardShow;