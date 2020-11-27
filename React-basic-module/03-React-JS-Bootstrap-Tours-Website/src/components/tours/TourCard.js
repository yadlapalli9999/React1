import React from 'react';

class TourCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.tourImage} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.tourName}</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolores exercitationem fuga illum inventore ipsam molestias omnis porro quam totam!</p>
                        <button className="btn btn-dark btn-sm">Book Now</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default TourCard;
