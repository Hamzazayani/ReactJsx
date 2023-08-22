import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product';




function Cardddd3() {
    return (
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2021/12/6cbfc-16401170937748.png" />
            <Card.Body>
              <Card.Title>{product[2].name}</Card.Title>
              <Card.Text>
              {product[2].description}
              </Card.Text>
              <h2>{product[2].price}</h2>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></div>
    )
  }
  
  export default Cardddd3