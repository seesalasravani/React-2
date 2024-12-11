import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import blue from "./assets/image1";

function ProfileCard1(props) {
    console.log(props)
  return (
    <div style={{margin:"15px",backgroundColor:"grey",borderRadius:"10px",padding:"10px"}}>
      <Card style={{ width: "200px" ,height:"300px",backgroundColor:"pink", borderRadius:"10px" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body style={{ height: "100px", overflowY: "scroll",objectFit:"cover" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">{props.info}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard1;