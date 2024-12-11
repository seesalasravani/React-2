import React from "react";
import Card from "react-bootstrap/Card";

function ProfileCard(props) {
  return (
    <div style={{ margin: "15px", backgroundColor: "grey", borderRadius: "10px", padding: "10px" }}> 
      <Card style={{ width: "18rem", height: "25rem", backgroundColor: "pink", borderRadius: "10px" }}> 
        <Card.Img 
          variant="top" 
          src={props.img} 
          style={{ height: "150px", objectFit: "cover", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} 
        />
        <Card.Body style={{ overflowY: "scroll" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted" style={{ textAlign: "center" }}>2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard;



