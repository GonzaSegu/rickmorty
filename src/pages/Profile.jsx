import Card from 'react-bootstrap/Card';
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { useContext } from 'react';
import { PersonajeContext } from '../contexts/PersonajesContext';

export default function Profile() {
    const {personajes} = useContext(PersonajeContext)
  return (
    <div className='footer-fix'>
        <NavigationBar></NavigationBar>
        <div className='d-flex justify-content-center'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={personajes[0].image} />
            <Card.Body>
                <Card.Title>{personajes[0].name}</Card.Title>
                <Card.Text>
                {personajes[0].species}
                <br />
                {personajes[0].origin.name}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
        <Footer></Footer>
    </div>
  )
}
