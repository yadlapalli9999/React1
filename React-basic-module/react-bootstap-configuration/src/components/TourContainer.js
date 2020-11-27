import React from 'react';
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';
import card4 from '../assets/img/card_4.jpg';
import TourCard from "./TourCard";

class TourContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tours : ['Paris' , 'Bangkok' , 'Indonesia' ,'Malaysia']
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className='p-3'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <TourCard tourImage={card1} tourName={this.state.tours[0]}/>
                            </div>
                            <div className="col-md-3">
                                <TourCard tourImage={card2} tourName={this.state.tours[1]}/>
                            </div>
                            <div className="col-md-3">
                                <TourCard tourImage={card3} tourName={this.state.tours[2]}/>
                            </div>
                            <div className="col-md-3">
                                <TourCard tourImage={card4} tourName={this.state.tours[3]}/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default TourContainer;