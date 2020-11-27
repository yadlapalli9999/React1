import React from 'react';

class TourCard extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.tourImage} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <p className="h4 card-title">{this.props.tourName}</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti distinctio explicabo molestias perferendis quaerat quas quos similique temporibus voluptas?</p>
                        <button className="btn btn-dark btn-sm">Book Now</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default TourCard;