import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getAllBikesThunk } from './redux/reducer'
import CreateRent from './components/create_new_rent/CreateRent';
import AvailableBicycles from './components/available_bicycles/AvailableBicycles';
import BikeForRent from './components/bike_for_rent/BikeForRent'

function App(props) {
  useState(()=>{
    props.getAllBikesThunk()    
  }, [])
  return (
    <div className="body">
      <h1>Awesome Bike Rental</h1>
      <CreateRent/>
      <BikeForRent/>
      <AvailableBicycles/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps,{getAllBikesThunk})(App);
