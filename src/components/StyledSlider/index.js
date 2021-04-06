import React from "react";
import Slider from "@material-ui/core/Slider";
import { StyledSliderContainer, StyledThumbContainer } from "./style";
import { withStyles } from "@material-ui/core";
import { colors } from "theme";

const railH = 8;

const CustomSlider = withStyles({
  root: {
    color: colors.green,
    height: railH,
    padding: "13px 0",
  },
  thumb: {
    height: 30,
    width: 13,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: -11,
    boxShadow: "#ccc 0 2px 3px 1px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: railH,
  },
  mark: {
    display: 'none',
  },
  markLabel: {
    top: 35,
    transform: 'unset',
    fontSize: 12,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: railH,
  },
})(Slider);

function StyledThumb(props) {
  return (
    <StyledThumbContainer {...props}>
      <div className="handle" />
    </StyledThumbContainer>
  );
}



export function StyledSlider({
  label = "Home Price",
  prefix = "",
  suffix = "",
  min = 10000,
  max = 100000,
  value,
  onChange = () => {},
}) {

  const marks = [
    {
      value: min,
      label: `${prefix} ${min} ${suffix}`,
    },
    {
      value: max / 2,
      label: `${prefix} ${max / 2} ${suffix}`,
    },
    {
      value: max,
      label: `${prefix} ${max} ${suffix}`,
    },
  ];

  return (
    <StyledSliderContainer className="w-100">
      <label>{label}</label>
      <CustomSlider
        className='my-slider'
        ThumbComponent={StyledThumb}
        marks={marks}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </StyledSliderContainer>
  );
}
