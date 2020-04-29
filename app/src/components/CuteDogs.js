import React from "react";
import { connect } from "react-redux";
import { getDog } from "../actions";

const CuteDogs = ({ getDog, isFetching, dogImg, error }) => {
  if (isFetching) {
    return <h2>Fetching a Dog Image now :) </h2>;
  } else {
    return (
      <div>
        <img width="200" src={dogImg} />
        <button onClick={getDog}>Get a Dog Image</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dogImg: state.dogImg,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getDog })(CuteDogs);
