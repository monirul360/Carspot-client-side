import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import './Home.css';
import sell from '../../../Image/Home/sell.png';
import sell1 from '../../../Image/Home/sell-1.png';
import car from '../../../Image/Home/car.png';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <section className='car-inspection-section'>
                <div className="car-inspection">
                    <div className="car-inspection-img">
                        <img src={car} alt="" />
                    </div>
                    <div className="car-inspection-text">
                        <h3><i>Want To Sale Your Car</i></h3>
                        <h1 id='inspection-title'>CAR INSPECTION</h1>
                        <p id='inspection-description'>Our CarSure experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace of mind before buying.</p>
                        <button id='car-inspection-button'>Schedule Inspection </button>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="container-grid">
                        <div className="left-content">
                            <div className='text-container'>
                                <h4>Want To Sale Your Car ?</h4>
                                <h2>DO YOU WANT TO SELL YOUR CAR</h2>
                                <p>Request search your car in our Inventory and a quote on the vehicle of your choosing.</p>
                            </div>
                            <div>
                                <img src={sell} alt="" />
                            </div>
                        </div>
                        <div className="right-content">
                            <div className='text-container'>
                                <h4>Want To buy Your Car ?</h4>
                                <h2>ARE YOU LOOKING FOR A CAR</h2>
                                <p>Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                            </div>
                            <div>
                                <img src={sell1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;