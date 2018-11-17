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
            <div style={{ backgroundColor: "#333333"}}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                                                width: '350px', height: '450px', backgroundColor: '#EFEFEF', borderRadius: '13px'}}>
               <div className="row" style={{ margin: '50px 0px 0px 50px'}}>
                    <form className="col s12">
                        <div className="row" style={{ marginBottom: '0px'}}>
                            <div className="input-field col s10">
                                <input placeholder="이메일" id="entrance" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '0px'}}>
                            <div className="input-field col s10">
                                <input id="entrance" placeholder="비밀번호" type="password" className="validate" />
                            </div>
                        </div>   
                    </form>
                </div>
                <div style={{ height: '50px'}}></div>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"center"}}>
                    <a className="waves-effect waves-light btn" style={{width: '250px', height: '65px', backgroundColor: '#A6A5A6'}}>로그인</a>
                    <a className="waves-effect waves-light btn" style={{width: '250px', height: '65px', backgroundColor: '#333333', marginTop: '10px'}}>Github로 로그인</a>
                    <a className="waves-effect waves-light btn" style={{width: '250px', height: '65px', backgroundColor: '#4445FF', marginTop: '10px'}}>Google로 로그인</a>
                </div>
                <div style={{ margin: '20px 0px 5px 220px'}}>
                    <a className="waves-effect btn-flat"><strong>회원가입</strong></a>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;