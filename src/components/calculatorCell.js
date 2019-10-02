import React from "react";
import { Button } from "reactstrap";

export default props => {
  return (
    <td>
      <Button
        style={props.style}
        outline
        color="secondary"
        block
        onClick={props.onClick}
      >
        {props.title}
      </Button>
    </td>
  );
};
