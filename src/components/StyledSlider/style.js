import styled from "styled-components";
import { colors } from "theme";

export const StyledSliderContainer = styled.div`
  label {
    font-size: 13px;
  }
  /* .MuiSlider-markLabel[data-index="1"] {
    transform: translateX(-50%);
  } */
  .MuiSlider-markLabel[data-index="2"] {
    left: unset !important;
    right: 0;
  }
`;
export const StyledThumbContainer = styled.div`
  .handle {
    width: 5px;
    height: 8px;
    background: ${colors.green};
  }
`;
