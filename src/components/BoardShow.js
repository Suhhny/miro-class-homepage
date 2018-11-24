import React, { Component } from 'react';
import Comment from './Comment';

class BoardShow extends Component{
    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc"}}>
                <div style={{ height: "60px", backgroundColor: "#fcfcfc", display: "flex", flexDirection: "row"}}>
                    <div style={{ height: "60px", backgroundColor: "#fcfcfc"}}>
                        <img src="../assets/mirologo.png" alt="mirologo" style={{width: "60px", marginLeft:"30px"}}/>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <a><p style={{ color: "#6496e5", fontSize: "13px" }}>마이페이지</p></a>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginTop: "60px"}}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1200px"}}>
                        <div style={{ width: "150px"}}>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "65%"}}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                                <div style={{ width: "40px", height: "40px"}}>
                                    <img src="../assets/profile.png" 
                                        alt="profile" style={{ width: "40px", height: "auto", borderRadius: "100%", display: "inline"}}/>
                                </div>
                                <div style={{ width: "10px"}}></div>
                                <div style={{ display: "flex", flexDirection: "column"}}>
                                    <h6 style={{ margin: "0px", color: "#000000"}}>김수현</h6>
                                    <p style={{ margin: "0px 0px 0px 1px", color: "#ababab"}}>경북대 간판</p>
                                </div>
                            </div>
                            <div className="title" style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "baseline"}}>
                                <h4 style={{ color: "#000000", marginBottom: "0px", fontFamily: "Nanum Myeongjo", fontWeight: "bold"}}>REACT props와 state</h4>
                                <h6 style={{ color: "#6496e5" }}>&nbsp;&nbsp;&nbsp; / </h6>
                                <h6 style={{ color: "#ababab" }}> 수업 </h6>
                            </div>
                            <p style={{ fontSize: "13px", color: "#ABABAB", marginTop: "0px", alignSelf: "flex-end"}}>2018년 11월 17일</p>
                            <div style={{ marginBottom: "30px"}}>
                                <div style={{ width: "100%", height: "1px", backgroundColor: "#6496e5"}}></div>
                            </div>
                            <div className="photos"style={{width: "100%"}}>
                                <img src="../assets/sudal.jpeg" />
                            </div>
                            <div className="content">
                                <p style={{ color: "#000000", fontSize: "16px"}}>
                                    호주의 수도는? 캔버라 미국의 수도는? 워싱턴DC 일본의 수도는? 도쿄 중국의 수도는? 베이징 캐나다의 수도는? 오타와 영국의 수도는? 런던
                                    이탈리아의 수도는? 로마 독일의 수도는? 베를린 프랑스의 수도는? 파리 한국의 수도는? 서울 필리핀의 수도는? 마닐라 싱가폴의 수도는? 싱가포르
                                    인도의 수도는? 뉴델리, 뭄바이 그리스의 수도는? 아테네 인도네시아의 수도는? 자카르타 아랍에미리트의 수도는? 두바이 체코의 수도는? 프라하
                                    쿠바의 수도는? 하바나
                                </p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="tags" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginBottom: "6px"}}>
                                    <a className="waves-effect waves-blue btn-flat" style={{ color: "#6496e5"}}># 수도</a>
                                    <a className="waves-effect waves-blue btn-flat" style={{ color: "#6496e5"}}># Capital-City</a>
                                    <a className="waves-effect waves-blue btn-flat" style={{ color: "#6496e5"}}># 수달</a>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                                    <a className="btn-flat" style={{ color: "#6496e5"}}>조아요 100</a>
                                    <a className="btn-flat" style={{ color: "#6496e5"}}>시러요 1</a>
                                </div>
                            </div>
                            <div style={{ marginBottom: "30px"}}>
                                <div style={{ width: "100%", height: "1px", backgroundColor: "#6496e5"}}></div>
                            </div>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            {/* Comment End */}
                        </div>
                        <div style={{ width: "150px"}}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                                <p style={{ fontSize: "13px", color: "#ababab", margin: "0"}}>REACT</p>
                                <p style={{ fontSize: "13px", color: "#ababab", margin: "0"}}>state와 props</p>
                                <p style={{ fontSize: "13px", color: "#ababab", margin: "0"}}>component란? </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardShow;