import React, {useState} from 'react'

import {connect} from 'react-redux'

const Form = (props) =>{

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
    })

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.dispatch({
            type: 'LOGIN',
            payload: state
        })
    }
 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={handleChange}/>

                <label>Last Name</label>
                <input type="text" name="lastName" onChange={handleChange}/>

                <button>save</button>
            </form>

            <div>
                <h1>{props.firstName} <br/> {props.lastName}</h1>
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    console.log(state);
    return state
}

export default connect(mapStateToProps)(Form)