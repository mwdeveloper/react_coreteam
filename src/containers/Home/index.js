import React, { useState } from "react";
import { StyledSlider } from "components/StyledSlider";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";
import { HomeContainer } from "./style";
import { useHistory } from "react-router-dom";
import { TempLoan } from "assets/images";

const types = [
  { value: "Standard", label: "Standard" },
  { value: "Type1", label: "Type1" },
];
const currencies = ["USD", "EUR", "GBP"];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));
export default function Home() {
  const history = useHistory();
  const classes = useStyles();

  const [price, setPrice] = useState();
  const [payment, setPayment] = useState();
  const [duration, setDuration] = useState();
  const [type, setType] = useState("Standard");
  const [selectedType, setSelectedType] = useState("USD");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const onChangePrice = (event, newValue) => {
    setPrice(newValue);
  };
  const onChangePayment = (event, newValue) => {
    setPayment(newValue);
  };
  const onChangeDuration = (event, newValue) => {
    setDuration(newValue);
  };
  return (
    <HomeContainer>
      <Container>
        <div className="loans-container">
          <h3 className="text-center font-weight-bold mb-3">
            Calculate and Compare Your Loans
          </h3>
          <p className="text-center loan-description mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            egestas fringilla phasellus faucibus scelerisque eleifend donec
            pretium vulputate.
          </p>
          <Grid
            container
            justify="center"
            alignItems="center"
            className="loans-content"
          >
            <Grid item md={8}>
              <div className="loans-left">
                <div className="title-wrapper d-flex align-items-center mb-5">
                  <div className="title-icon">
                    <img src={TempLoan} alt='loan' />
                  </div>
                  <h6 className="loans-title font-weight-bold mb-0 ml-2">
                    New Loan Application
                  </h6>
                </div>
                <Grid
                  container
                  className="filter-wrappwer"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item md={5}>
                    <TextField
                      fullWidth
                      className='filter-select'
                      variant="outlined"
                      select
                      value={type}
                      onChange={handleChangeType}
                    >
                      {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={7}>
                    <div className="filter-options d-flex justify-content-start ml-4">
                      {currencies.map((_currency, _i) => (
                        <Button
                          className={`btn-transparent btn-link btn-link-success font-weight-bold px-2 ${
                            selectedType === _currency ? "selected btn-link-success" : "btn-link-second"
                          }`}
                          onClick={() => setSelectedType(_currency)}
                        >
                          <span>{_currency}</span>
                        </Button>
                      ))}
                    </div>
                  </Grid>
                </Grid>
                {/* Slider Home Price */}
                <Grid
                  container
                  className="loan-row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item md={8}>
                    <StyledSlider
                      min={50000}
                      max={500000}
                      prefix='$'
                      label="Home Price"
                      value={price}
                      onChange={onChangePrice}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      label={null}
                      variant="outlined"
                      className={`${clsx(classes.textField)} value-input`}
                      value={price}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" className='value-unit'>$</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Slider Down Payment */}
                <Grid
                  container
                  className="loan-row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item md={8}>
                    <StyledSlider
                      min={10000}
                      max={100000}
                      prefix='$'
                      label="Down Payment (20%)"
                      value={payment}
                      onChange={onChangePayment}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      label={null}
                      variant="outlined"
                      value={payment}
                      className={`${clsx(classes.textField)} value-input`}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" className='value-unit'>$</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Slider Duration In Months */}
                <Grid
                  container
                  className="loan-row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item md={8}>
                    <StyledSlider
                      min={20}
                      max={240}
                      suffix='months'
                      label="Duration In Months"
                      value={duration}
                      onChange={onChangeDuration}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      label={null}
                      variant="outlined"
                      value={duration}
                      className={`${clsx(classes.textField)} value-input`}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" className='value-unit'>
                            months
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  className="w-100 btn-success mb-3 text-uppercase"
                  onClick={() => history.push("/results")}
                >
                  Get real mortgage offer
                </Button>
                <div className="footer-description mx-auto mt-3">
                  Not looking for a loan? You're a service provider? <br />
                  (bank, notary, appraiser, loan officer, etc)
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-weight-bold text-success mx-2"
                    title="..."
                  >
                    sign up here
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="loans-right h-100">
                <h6 className="value-label">Estimated Payment</h6>
                <h2>
                  <strong>$ 3,382</strong> / month
                </h2>
                <div className="value-item">
                  <p className="value-label text-black-50">Loan amount</p>
                  <h6 className="value font-weight-bold">$ 100.000</h6>
                </div>
                <div className="value-item">
                  <p className="value-label text-black-50">Down payment</p>
                  <h6 className="value font-weight-bold">$ 20.000</h6>
                </div>
                <div className="value-item">
                  <p className="value-label text-black-50">Loan term</p>
                  <h6 className="value font-weight-bold">2 years</h6>
                </div>
                <div className="value-item">
                  <p className="value-label text-black-50">Property tax</p>
                  <h6 className="value font-weight-bold">1.2%/year</h6>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </HomeContainer>
  );
}
