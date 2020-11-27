import React from 'react';

class LandingPage extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                            <h5 className="display-4">Welcome to React Tours</h5>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi dolor ducimus earum eius ex, excepturi harum labore laborum necessitatibus neque, nostrum, praesentium quaerat quas quo tempora velit. Perspiciatis, quod?</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default LandingPage;
