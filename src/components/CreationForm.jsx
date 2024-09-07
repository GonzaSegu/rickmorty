import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

export default function CreationForm() {
    const [nombre, setNombre] = useState("")
    const [origen, setOrigen] = useState("")
    const [especie, setEspecie] =useState("")
    const [imagen, setImagen] = useState("")
    const [error, setError] = useState("")
   
    const validarForm = (e) =>{
        e.preventDefault()
        if(!nombre || nombre.length<5){
            setError("Ingrese un nombre de mínimo 5 digitos")
            return
        }
        if(!origen || origen.length<5){
            setError("ingrese un origen de mínimo 5 dígitos")
            return
        }
        if(!especie || especie.length<5){
            setError("Ingrese especie de mínimo 5 dígitos")
            return
        }
        if(!imagen){
            setError("Ingrese la url de una imagen")
            return
        }
        setError("")
        Swal.fire({
            title: "Personaje Creado",
            text: "Ve al inicio para verlo!",
            icon: "success"
          });
    }

    

  return (
    <div>
    <Form onSubmit={(e) => validarForm(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Ingresa el nombre" />
            {error === "Ingrese un nombre de mínimo 5 digitos" ? <p className='text-danger'>{error}</p> : null}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Origen</Form.Label>
            <Form.Control value={origen} onChange={(e) => setOrigen(e.target.value)} type="text" placeholder="Ingresa el origen" />
            {error === "ingrese un origen de mínimo 5 dígitos" ? <p className='text-danger'>{error}</p> : null}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Especie</Form.Label>
            <Form.Control value={especie} onChange={(e) => setEspecie(e.target.value)} type="text" placeholder="Ingresa la especie" />
            {error === "Ingrese especie de mínimo 5 dígitos" ? <p className='text-danger'>{error}</p> : null}
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Url de la Imagen</Form.Label>
            <Form.Control value={imagen} onChange={(e) => setImagen(e.target.value)} type="text" placeholder="Pega url de la imagen" />
            {error === "Ingrese la url de una imagen" ? <p className='text-danger'>{error}</p> : null}
        </Form.Group>
       
        <Button variant="primary" type="submit">
        Crear
        </Button>
    </Form>
    </div>
  )
}
