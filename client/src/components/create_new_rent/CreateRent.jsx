import React, {useState} from 'react'
import css from './CreateRent.module.css'
import { connect } from "react-redux"
import { createNewRenThunk } from '../../redux/reducer'

const CreateRent = (props) => {
    const { bikeTypes, createNewRenThunk } = {...props}
    const options = bikeTypes.map((type, id) => {
        return <option key={id}>{type}</option>
    })
    const [ name, setBikeName ] = useState('')
    const [ price,  setBikePrice] = useState('')
    const [ type,  setBikeType] = useState(bikeTypes[0])

    const createNewRent = () => {
        createNewRenThunk({name, type, price})
        setBikeName ('')
        setBikePrice('')
    }
    return <div className={css.create_rent}>
        <h3>Create new rent</h3>
        <div className={css.create_rent__box}>    
            <div className={css.create_rent__box__field}>
                <div>
                    <p>Bike name</p>
                    <input value={name} onChange={(e)=>setBikeName(e.target.value)}/>
                </div>
                <div>
                    <p>Bike type</p>
                    <select onChange={(e)=>setBikeType(e.target.value)}>{options}</select>
                </div>
                <div>
                    <p>Rent Price</p>
                    <input type='number' className={css.field__price}
                        value={price} onChange={(e)=>setBikePrice(e.target.value)}/> 
                </div>
                <div>
                    <p>Rent</p>
                    <button onClick={createNewRent}>Submit rent</button>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        bikeTypes: state.reducer.bikeTypes
    }
}

export default connect(mapStateToProps, { createNewRenThunk })(CreateRent)