import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { add } from "../actions";

const Form = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    })

    useEffect(() => {
        props.add();
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        props.add(newSmurf)
    }

    const handleChanges = event => {
        const name = event.target.name;
        setNewSmurf({ ...newSmurf, [name]: event.target.value })
    }
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="name" onChange={handleChanges}></input>
                <input type="text" name="age" placeholder="age" onChange={handleChanges} ></input>
                <input type="text" name="height" placeholder="height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>
                    Click Here To Add A New Smurf
            </button>
            </form>
        </div>
    )
}
export default connect(null, { add })(Form)