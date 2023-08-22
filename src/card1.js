import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product';





function Cardd1() {
  var name="x"
  var firstname=""
    return (
      <div>
          <Card style={{ width: '18rem' }}>
            {firstname?<Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2021/12/3047c-16401174098542.png" />:null}
            <Card.Body>
            <Card.Title>{name?"hello":"hello there"}</Card.Title>
              <Card.Text>
                HI
              </Card.Text>
              <h2></h2>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>
    )
  }
  
  export default Cardd1