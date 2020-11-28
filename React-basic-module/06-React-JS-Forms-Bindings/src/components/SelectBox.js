import React from 'react';

class SelectBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedCar : ''
        }
    }

    updateSelect = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Select A Car</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <form>
                                                    <div className="form-group">
                                                        <select
                                                            value={this.state.selectedCar}
                                                            name="selectedCar"
                                                            onChange={this.updateSelect}
                                                            className="form-control">
                                                            <option value="">Select a Car</option>
                                                            <option value="BMW">BMW</option>
                                                            <option value="Audi">Audi</option>
                                                            <option value="Range Rover">Range Rover</option>
                                                            <option value="Ducati">Ducati</option>
                                                            <option value="Rolls Royce">Rolls Royce</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col">
                                                <p className="h4">{this.state.selectedCar}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default SelectBox;