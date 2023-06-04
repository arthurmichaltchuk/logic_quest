import React from "react";
import Card from 'react-bootstrap/Card';

function ConquistaItem(props) {
    return (
        <Card className='ItemCard'>
          <Card.Img variant="top" className='solutionCardImg' src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default ConquistaItem;