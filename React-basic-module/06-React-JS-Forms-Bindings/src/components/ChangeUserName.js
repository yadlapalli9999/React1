import React from 'react';

class ChangeUserName extends React.Component{
    constructor() {
        super();
        this.state = {
            username:''
        }
    }
    InputChange = (event) =>{
        this.setState({

                username: event.target.value
            
        })
    }
    render() {
        return(
            <React.Fragment>
               <section className="p-3">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-4">
                               <div className="card">
                                   <div className="card-header bg-secondary text-white">
                                        <h4>Change User Name</h4>
                                   </div>
                                   <div className="card-body">
                                      <form>
                                          <div className="form-group">
                                              <input type="text" value={this.state.username} onChange={this.InputChange}  className="form-control"/>
                                          </div>
                                      </form>
                                   </div>
                                   <div className="card-footer">
                                       {this.state.username}
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

export default ChangeUserName;