import React from "react";
import { FrequencyBox, FrequencyBoxLeft } from "../styles/app.styles";
import SmallLine from "../Charts/SmallLine";

export default function FreqencyBoxComponent(props) {
  const sum = props.sum;
  return (
    <div>
      <FrequencyBox>
        <FrequencyBoxLeft>
          <div>{props.name}</div>
          <div style={{ fontSize: "34px" }}>{sum}</div>
        </FrequencyBoxLeft>
        <FrequencyBoxLeft>
          {props.data && <SmallLine data={props.data} />}
        </FrequencyBoxLeft>
      </FrequencyBox>
    </div>
  );
}
