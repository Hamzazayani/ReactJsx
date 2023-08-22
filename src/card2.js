import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product';




function Carddd2() {
    return (
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2021/12/7032d-16401097607658.png" />
            <Card.Body>
              <Card.Title>{product[1].name}</Card.Title>
              <Card.Text>
              {product[1].description}
              </Card.Text>
              <h2>{product[1].price}</h2>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></div>
    )
  }
  
  export default Carddd2