import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product';





function Carddddd4() {
    return (
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2021/12/6664e-16401168917757-1920.jpg?w=840" />
            <Card.Body>
              <Card.Title>{product[3].name}</Card.Title>
              <Card.Text>
              {product[3].description}
              </Card.Text>
              <h2>{product[3].price}</h2>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></div>
    )
  }
  
  export default Carddddd4