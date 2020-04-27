import React from 'react'
import { connect } from 'react-redux'
import { rentBikeThunk, deleteBikeThunk } from '../../redux/reducer'
import css from './AvailableBicycles.module.css'

const AvailableBicycles = (props) => {
    const { allBikes, rentBikeThunk, deleteBikeThunk } = { ...props }
    let totalCountAvailableBikes = 0
    const allFreeBike = allBikes.map((bike, id)=>{
        if(bike.available){
            totalCountAvailableBikes +=1
            return <div key={id}><FreeBike bike={bike} rentBikeThunk={rentBikeThunk} deleteBikeThunk={deleteBikeThunk}/></div>
        }
    })
     
    return <div>
        <div className={css.title_available}>Available bicycles ({totalCountAvailableBikes})</div>
        <div>
            { allFreeBike }
        </div>
    </div>
}

const FreeBike = (props) => {
    const { name, type, price, _id } = { ...props.bike }
  
    const rentBike = () => {
        const date = new Date()
        props.rentBikeThunk(_id, String(date))
    }
    const deleteBike = () => {
        props.deleteBikeThunk(_id)
    }
    return <div className={css.boxFreeBike}>
        <div>{name} / {type} / {price}</div>
        <button className={css.boxFreeBike_rent} onClick={rentBike}>Rent</button>
        <button className={css.boxFreeBike_delete} onClick={deleteBike}>Delete</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        allBikes: state.reducer.allBikes
    }
}
export default connect(mapStateToProps,{ rentBikeThunk, deleteBikeThunk })(AvailableBicycles)