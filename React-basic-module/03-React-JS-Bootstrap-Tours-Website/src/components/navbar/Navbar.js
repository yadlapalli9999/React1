import React from 'react';

class Navbar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <div className="container">
                        <a href="/" className="navbar-brand">Ultimate Destinations</a>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Tours</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }

}
export default Navbar;
