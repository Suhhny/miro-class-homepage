import React, { Component } from 'react';

class ControlTags extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "#fcfcfc", width: "450px", height: "600px", borderRadius: "8px",
                        display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexGrow: "2"}}>
                    <form className="col s12">
                        <div className="row" style={{ marginBottom: '0px'}}>
                            <div className="input-field col s12">
                                <input placeholder="태그" id="input_tag" type="text" className="validate" />
                            </div>
                        </div>
                    </form>
                    <div style={{ width: "40px"}}></div>
                    <a className="waves-effect waves-blue btn" style={{width: '100px', height: '38px', color: "#ffffff", backgroundColor: '#6496e5'}}>추가하기</a>
                </div>
                

                {/* tags list */}
                <div style={{ flexGrow: "1", margin: "30px", }}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>HTML</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>CSS</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>JAVASCRIPT</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>REACT</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>REDUX</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>FLEXBOX</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>JSX</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>component</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                        <div style={{ backgroundColor: "#eff3f7", borderRadius: "50px", margin: "5px 5px 5px 5px", borderRadius: "50px",
                                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ margin: "0", padding: "10px 0px 10px 20px", color: "#6496e5"}}>jquery</p>
                            <i className="tiny material-icons" style={{ color: "#ff3030", margin: "0 10px 0px 5px"}}>clear</i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlTags;