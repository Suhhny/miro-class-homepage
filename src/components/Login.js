import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id: "",
            pw: ""
        }
    }

    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc"}}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                                                width: '350px', height: '450px', backgroundColor: '#eff3f7', borderRadius: "2px", boxShadow: "0 8px 38px hsla(0,0%,52%,.3), 0 5px 12px hsla(0,0%,52%,.22)"}}>
               <div className="row" style={{ margin: '50px 0px 0px 50px'}}>
                    <form className="col s12">
                        <div className="row" style={{ marginBottom: '0px'}}>
                            <div className="input-field col s10" style={{ margin: "0"}}>
                                <input id="entrance" placeholder="이메일" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '0px'}}>
                            <div className="input-field col s10" style={{ margin: "0"}}>
                                <input id="entrance" placeholder="비밀번호" type="password" className="validate" />
                            </div>
                        </div>   
                    </form>
                </div>
                <div style={{ height: '50px'}}></div>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"center"}}>
                    <a className="waves-effect waves-light btn" style={{width: '230px', height: '37px', backgroundColor: '#A6A5A6'}}>로그인</a>
                    <a className="waves-effect waves-light btn" style={{width: '230px', height: '37px', backgroundColor: '#333333', marginTop: '10px'}}>Github로 로그인</a>
                    <a className="waves-effect waves-light btn" style={{width: '230px', height: '37px', backgroundColor: '#4445FF', marginTop: '10px'}}>Google로 로그인</a>
                </div>
                <div style={{ margin: '20px 0px 5px 220px'}}>
                    <a className="waves-effect btn-flat" style={{ color: "#6496e5", fontSize: "13px"}}>회원가입</a>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;