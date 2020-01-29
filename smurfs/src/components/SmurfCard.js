import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch } from "../actions";

const Smurf = props => {
    return (
        <div className="smurf" key={props.smurf.id}>
            <h2>Name: {props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
        </div>
    );
}

const SmurfCard = props => {
    useEffect(() => {
        props.fetch();
    }, []);

    return (
        <div className="smurfcard">
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};
export default connect(
    mapStateToProps,
    { fetch }
)(SmurfCard);