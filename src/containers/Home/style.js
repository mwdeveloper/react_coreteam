import styled from "styled-components";
import { colors } from "theme";

export const HomeContainer = styled.div`
  padding: 100px 0;
  .loans-container {
    .loan-description {
      max-width: 800px;
      text-align: center;
    }
    .loans-content {
      box-shadow: -1px 2px 11px -1px rgba(148, 148, 148, 0.8);
      background: #f9f9f9;
      .loans-left {
        background: white;
        padding: 36px 56px;
        .filter-wrappwer {
          margin-bottom: 40px;
          .filter-select {
            height: 40px;
            .MuiInputBase-root {
              height: 100%;
              .MuiOutlinedInput-input {
                padding: 10px 14px;
                font-size: 14px;
              }
            }
          }
          .filter-options {
            display: flex;
            button {
              transform: scaleX(1);
              &.selected,
              &:hover {
                span::before {
                  background-color: ${colors.green};
                  visibility: visible;
                  transform: scaleX(1);
                }
              }
            }
          }
        }
        .loan-row {
          margin-bottom: 30px;
          .value-input {
            height: 40px;
            .MuiInputBase-root {
              height: 100%;
              .MuiOutlinedInput-input {
                padding: 10px 14px;
                font-size: 14px;
              }
            }
            .value-unit {
              p {
                font-size: 12px;
              }
            }
          }
        }
        .footer-description {
          font-size: 12px;
          letter-spacing: 0.43px;
          max-width: 400px;
          text-align: center;
        }
      }
      .loans-right {
        padding: 30px;
        text-align: center;
        .value-item {
          border-bottom: solid 1px rgba(0, 0, 0, 0.1);
          padding: 15px 0px 3px;
          .value-label {
            font-size: 13px;
            margin-bottom: 5px;
          }
          .value {
          }
        }
      }
    }
  }
`;
