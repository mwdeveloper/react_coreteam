import React from "react";
import { Button, Grid, List, ListItem } from "@material-ui/core";
import { ResultCardContainer } from "./style";
import { Temp } from "assets/images";

const options = [
  {
    label: "Rate type",
    field: "rateType",
  },
  {
    label: "Total fees",
    field: "total",
  },
  {
    label: "Initial rate",
    field: "initial",
  },
  {
    label: "Follow on rate",
    field: "follow",
  },
  {
    label: "APRC",
    field: "aprc",
  },
  {
    label: "True cost",
    field: "cost",
  },
];
export default function ResultCard({
  mortgage = {}
}) {
  console.log({mortgage})
  return (
    <ResultCardContainer className="card-box">
      <div className="card-header">
        <div className="card-header--image">
          <img alt="result-img" src={Temp} width={50} />
        </div>
        <div className="card-header--title ml-2">
          <b>{mortgage.bankName}</b>
        </div>
        <div className="card-header--values">
          <b>$682.75</b>
          <small className="d-block mt-1 text-black-50 value-unit">
            Monthly payment
          </small>
        </div>
      </div>
      <List component="div" className="list-group-flush">
        <ListItem className="py-3">
          <Grid container spacing={0}>
            {options.map((_option, _i) => (
              <Grid key={_i} item md={2}>
                <h6 className="font-weight-bold">{mortgage[_option.field]}</h6>
                <span className="text-black-50 d-block value-unit">
                  {_option.label}
                </span>
              </Grid>
            ))}
          </Grid>
        </ListItem>
      </List>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <div className="card-footer--more">
          <small className="d-block">More information</small>
        </div>
        <div className="card-footer--actions">
          <Button
            className="btn-outline-success border-1"
            variant="outlined"
          >
            Full Mortgage
          </Button>
          <Button
            variant="contained"
            className="btn-success text-uppercase ml-3"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </ResultCardContainer>
  );
}
