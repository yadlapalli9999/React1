import React from 'react';

class SMSApp extends React.Component{
    constructor() {
        super();
        this.state = {
            maxCount:100,
            text:''
        }
    }
    updateText = (event) =>{
        this.setState({

            text: event.target.value

        })
    }
    render() {
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">SMS Application</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <textarea
                                                    value={this.state.text}
                                                    onChange={this.updateText}
                                                    maxLength={this.state.maxCount}
                                                    rows="4" className="form-control" placeholder="Your text here"/>
                                            </div>
                                        </form>
                                        <div>
                                            <p className="h4">The Characters Remaining : {this.state.maxCount - this.state.text.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default SMSApp;