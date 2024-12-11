import React from "react";
import Accordion from "react-bootstrap/Accordion";
function Basic(props) {
  return (
    <div>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>{props.title}</Accordion.Header>
          <Accordion.Body>{props.desc}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Basic;
