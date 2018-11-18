import React, { Component } from 'react';

class ControlTags extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#333333", width: "450px", height: "600px", borderRadius: "8px",
                        display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexGrow: "2"}}>
                    <form className="col s12">
                        <div className="row" style={{ marginBottom: '0px'}}>
                            <div className="input-field col s12">
                                <input placeholder="태그" id="entrance" type="text" className="validate" />
                            </div>
                        </div>
                    </form>
                    <div style={{ width: "40px"}}></div>
                    <a className="waves-effect waves-yellow btn" style={{width: '100px', height: '38px', color: "#ffffff", backgroundColor: '#ceb600'}}>추가하기</a>
                </div>

                {/* tags list */}
                <div style={{ flexGrow: "1", margin: "30px"}}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># HTML</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># JAVASCRIPT</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># REACT</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># CSS</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># FLEXBOX</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># 수현이</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># 수현이</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># 수현이</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># 수현이</strong></a>
                        <a className="waves-effect waves-yellow btn-flat" style={{ color: "#ceb600", margin: "0px 5px 5px 5px", backgroundColor: "#FFFFFF", borderRadius: "50px"}}><strong># 수현이</strong></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlTags;