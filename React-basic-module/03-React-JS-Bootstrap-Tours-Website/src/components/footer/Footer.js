import React from 'react';

class Footer extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <footer className="main-footer mt-4">
                    <div className="footer-wrapper">
                        <div className="container p-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <h2>Vacations</h2>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                                        aliquid consectetur consequuntur doloribus earum error fugit in, incidunt iusto
                                        non officiis optio pariatur quaerat quas qui quis quisquam rem repellendus.</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>Information</h2>
                                    <p>Adventures</p>
                                    <p>Tours</p>
                                    <p>Hotels</p>
                                    <p>Destinations</p>
                                    <p>Enquires</p>
                                    <p>Online Bookings</p>
                                    <p>Spot Bookings</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>Experience</h2>
                                    <p>Adventures</p>
                                    <p>Tours</p>
                                    <p>Hotels</p>
                                    <p>Destinations</p>
                                    <p>Enquires</p>
                                    <p>Online Bookings</p>
                                    <p>Spot Bookings</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>Address</h2>
                                    <p>Flat : 1471 , Road No. 14</p>
                                    <p>Jubilee Hills , Hyderabad</p>
                                    <p>Telangana , India</p>
                                    <div className="d-flex justify-content-between">
                                        <i className="fab fa-facebook-square text-primary fa-2x"/>
                                        <i className="fab fa-twitter text-info fa-2x"/>
                                        <i className="fab fa-instagram text-danger fa-2x"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }

}
export default Footer;
