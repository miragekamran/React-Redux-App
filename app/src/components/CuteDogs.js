import React from "react";
import { connect } from "react-redux";
import { getDog } from "../actions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const CuteDogs = ({ getDog, isFetching, dogImg, error }) => {
  if (isFetching) {
    return <h2>Fetching a Dog Image now :) </h2>;
  } else {
    return (
      <Card >
        <CardActionArea >
          <CardMedia >
            <img style={{borderRadius: '3px'}} width="500" src={dogImg} />
          </CardMedia>
        </CardActionArea>
        <Button variant="contained" color="secondary" onClick={getDog}>Get a Dog Image</Button>
      </Card>
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
