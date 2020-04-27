import { instans } from './instans'
export const bikeApi = {
    creteNewRent(newRent){
        return instans.post('/create', newRent)
    },
    getAllBikes() {
        return instans.get('/')
    },
    rentBike(id, date) {
        return instans.put('/rent', {_id:id, date})
    },
    deleteBike(id) {
        return instans.delete(`/delete/${id}`)
    },
    cancelRent(id) {
        return instans.put(`/cancel`, {_id:id})
    }
}
