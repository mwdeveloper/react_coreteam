import { Card } from "@material-ui/core";
import styled from "styled-components";

export const ResultCardContainer = styled(Card)`
  margin-bottom: 20px;
  .value-unit {
    font-size: 14px !important;
  }
  .card-footer {
    button {
      height: 40px;
    }
  }
`;
