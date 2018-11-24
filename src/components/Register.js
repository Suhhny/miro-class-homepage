import React, { Component } from 'react';

class Register extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc"}}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', 
                                                width: '350px', height: '450px', backgroundColor: '#eff3f7', borderRadius: "2px", boxShadow: "0 8px 38px hsla(0,0%,52%,.3), 0 5px 12px hsla(0,0%,52%,.22)"}}>
                <div className="row" style={{ margin: '20px 0px 0px 50px'}}>
                    <form className="col s12">
                        <div className="row" style={{ marginBottom: '0px', marginTop: '0px'}}>
                            <div className="input-field col s10" style={{ marginBottom: '0px', marginTop: '0px'}}>
                                <input placeholder="이메일" id="entrance" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '0px'}}>
                            <div className="input-field col s5" style={{ marginBottom: '0px', marginTop: '0px'}}>
                                <input id="entrance" placeholder="비밀번호" type="password" className="validate" />
                            </div>
                            <div className="input-field col s5" style={{ marginBottom: '0px', marginTop: '0px'}}> 
                                <input id="entrance" placeholder="학번" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '0px'}}>
                            <div className="input-field col s5" style={{ marginBottom: '0px', marginTop: '0px'}}>
                                <input id="entrance" placeholder="이름" type="text" className="validate" />
                            </div>
                            <div className="input-field col s5" style={{ marginBottom: '0px', marginTop: '0px'}}>
                                <input id="entrance" placeholder="전공" type="text" className="validate" />
                            </div>
                        </div>

                        <div>
                            <p>
                                <label>
                                    <input name="group1" type="radio"/>
                                    <span>여성</span>
                                </label>                               
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>남성</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>알려주고 싶지 않음</span>
                                </label>                               
                            </p>
                        </div>
                    </form>
                </div>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems:"center", marginBottom: "30px"}}>
                    <a className="waves-effect waves-light btn" style={{width: '250px', height: '37px', backgroundColor: '#A6A5A6'}}>가입하기</a>
                </div>
            </div>
            </div>
        );
    }
}

export default Register;