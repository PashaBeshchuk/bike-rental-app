import { bikeApi } from '../api/bike_api'
const UPDATE_ALL_BIKES = 'UPDATE_ALL_BIKES'
const initialStore = {
    bikeTypes:['road', 'mountain', 'sport', 'BMX'],
    allBikes:[]
}

export const reducer = (state = initialStore, action) => {
    switch(action.type){
        case UPDATE_ALL_BIKES:
            return {
                ...state,
                allBikes: action.allBikes
            }
        default:
            return state
    }
}

const updateAllBikes = (allBikes) => ({type: UPDATE_ALL_BIKES, allBikes})

export const createNewRenThunk = (dataBikes) => {
    return async(dispatch) => {
        const response = await bikeApi.creteNewRent(dataBikes)
        if(response.status) {
            dispatch(getAllBikesThunk())
        }
    }
}

export const getAllBikesThunk = () => {
    return async(dispatch) => {
        const response = await bikeApi.getAllBikes()
        if(response.status === 200) {
            dispatch(updateAllBikes(response.data))
        } 
    }
}

export const rentBikeThunk = (id, date) => {
    return async(dispatch) => {
        const response = await bikeApi.rentBike(id, date)
        if(response.status) {
            dispatch(getAllBikesThunk())
        }
    }
}

export const deleteBikeThunk = (id) => {
    return async(dispatch) => {
        const response = await bikeApi.deleteBike(id)
        if(response.status) {
            dispatch(getAllBikesThunk())
        }
    }
}

export const cancelRentBikeThunk = (id) => {
    return async(dispatch) => {
        const response = await bikeApi.cancelRent(id)
        if(response.status) {
            dispatch(getAllBikesThunk())
        }
    }
}
