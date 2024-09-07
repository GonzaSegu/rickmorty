import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PjCard({character}) {
    const {name, species, origin, image} = character
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem' }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Especies: {species}
          <br/>
          Origen:{origin.name}    
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
