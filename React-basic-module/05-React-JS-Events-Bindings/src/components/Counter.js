import React from 'react';

class Counter extends React.Component{
    constructor() {
        super();
        this.state = {
            count:{
                counter:0,
                name:'Ganesh',
                degree:'BTech'
            }
        }
    }
    incrementCounter = () =>{
        this.setState({
          count: {
              ...this.state.count,
              counter:this.state.count.counter + 1
          }
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
                                        <p className="h4">Counter</p>
                                    </div>
                                    <div className="card-body">
                                        <h2>{this.state.count.counter}</h2>
                                        <button className="btn btn-secondary btn-sm" onClick={this.incrementCounter}>Increment</button>
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
export default Counter;