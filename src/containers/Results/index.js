import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Container } from "@material-ui/core";
import { ResultsContainer } from "./style";
import ResultCard from "./ResultCard";

const GET_MORTGAGES = gql`
  {
    mortgages @client
  }
`;

export default function Results() {
  const { loading, error, data } = useQuery(GET_MORTGAGES, {
    variables: { language: "english" },
  });

  console.log({ loading, data, error });

  return (
    <ResultsContainer>
      <Container>
        <div className="results-container">
          <h1 className="text-left font-weight-bold mb-5">
            Compare our best mortgage rates and deals
          </h1>
          <p className="mb-1">Results:</p>
          <div className="d-flex justify-content-between mb-3">
            <p className="mb-0">{data && data?.mortgages ? data.mortgages.length : 0} mortgages found</p>
          </div>
          <div className="result-cards mb-spacing-6">
            {data?.mortgages &&
              data.mortgages.length > 0 &&
              data.mortgages.map((_data, _i) => (
                <ResultCard mortgage={_data} />
              ))}
          </div>
        </div>
      </Container>
    </ResultsContainer>
  );
}
