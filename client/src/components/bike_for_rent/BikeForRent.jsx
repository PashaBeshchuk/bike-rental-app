import React, {useState} from 'react'
import { connect } from 'react-redux'
import css from '../available_bicycles/AvailableBicycles.module.css'
import { cancelRentBikeThunk } from '../../redux/reducer'
const BikeForRent = (props) => {
    const { allBikes, cancelRentBikeThunk } = { ...props }
    let totalPrice = 0
    let showTitle = false
    const getNumberMonth = (month) => {
        for(let i = 0; i < 12; i++) {
            if(String(new Date('2020', i)).split(' ')[1] === month){
                return i
            }
        }
    }
    const getAmountForRentedBike = (time, price) => {
        const month = time.split(" ")[1]
        const dateRent = new Date(
            time.split(" ")[3], 
            getNumberMonth(month), 
            time.split(" ")[2], 
            time.split(" ")[4].split(":")[0], 
            time.split(" ")[4].split(":")[1],
            time.split(" ")[4].split(":")[2]
        )
        const dateNow = new Date()
        const minutes = Math.ceil((dateNow - dateRent)/1000)
        const hours = Math.floor(minutes/(60*60)) + 1
        if(hours >= 20) {
           const amountPayableWithoutDiscount = price*20
           const remainingTimeAtDiscount = hours - 20
           const amountPayableWithDiscount =  remainingTimeAtDiscount * (price/2)
           const amountPayable = amountPayableWithoutDiscount + amountPayableWithDiscount
           return amountPayable.toFixed(2)
        }
        return hours*price

    }
    const allBikeRental = allBikes.map((bike, id) => {
       if(bike.rented) {
            const amountPayable = getAmountForRentedBike(bike.time, bike.price)
            totalPrice += +amountPayable
            showTitle = true
            return <div key={id}><BikeRental 
                bike={bike} 
                cancelRentBikeThunk={cancelRentBikeThunk}
                amountPayable={amountPayable}
            /></div>
       }
    })

    return <div>
        {showTitle ? <div className={css.title_rent}>Your rent (Total:${totalPrice})</div> : ""}
        <div>
            {allBikeRental}
        </div>
    </div>
}

const BikeRental = (props) => {
    const { name, type, _id } = { ...props.bike } 
    const cancelRental = () => {
        props.cancelRentBikeThunk(_id)
    }
    return <div className={css.boxBikeRental}>
        <div>{name} / {type} / {props.amountPayable}</div>
        <button className={css.cencelRental} onClick={cancelRental}>Cancel Rent</button>
    </div>
}


const mapStateToProps = (state) => {
    return {
        allBikes: state.reducer.allBikes
    }
}
export default connect(mapStateToProps,{ cancelRentBikeThunk })(BikeForRent)