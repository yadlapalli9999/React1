import React from 'react';

class StudentStates extends React.Component{
    constructor() {
        super();
        this.state ={
            student:[
                {
                    name:"Ganesh",
                    age:"23",
                    degree:"BTech"
                },
                {
                    name:"Nani",
                    age:"25",
                    degree:"BE"
                },
                {
                    name:"Govind",
                    age:"33",
                    degree:"BTech"
                },
            ]
        }
    }
    render(){
        return(
          <React.Fragment>
              <section className="p-3">
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <div className="card my-2">
                                  <div className="card-body bg-light">
                                      <ul className="list-group">
                                          <li className="list-group-item">
                                              Name : {this.state.student[0].name}
                                          </li>
                                          <li className="list-group-item">
                                              Age : {this.state.student[0].age}
                                          </li>
                                          <li className="list-group-item">
                                              Degree : {this.state.student[0].degree}
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="card my-2">
                                  <div className="card-body bg-light">
                                      <ul className="list-group">
                                          <li className="list-group-item">
                                              Name : {this.state.student[1].name}
                                          </li>
                                          <li className="list-group-item">
                                              Age : {this.state.student[1].age}
                                          </li>
                                          <li className="list-group-item">
                                              Degree : {this.state.student[1].degree}
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="card my-2">
                                  <div className="card-body bg-light">
                                      <ul className="list-group">
                                          <li className="list-group-item">
                                              Name : {this.state.student[2].name}
                                          </li>
                                          <li className="list-group-item">
                                              Age : {this.state.student[2].age}
                                          </li>
                                          <li className="list-group-item">
                                              Degree : {this.state.student[2].degree}
                                          </li>
                                      </ul>
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
export  default StudentStates;