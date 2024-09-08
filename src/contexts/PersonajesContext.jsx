import { createContext, useState, useEffect } from "react"

export const PersonajeContext = createContext();

const PersonajesProvider = ({children}) => {
    const [personajes, setPersonajes] = useState([])
    const getCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setPersonajes(data.results)
    }

    useEffect(() => {getCharacters()},[])   
    
    return(
        <PersonajeContext.Provider value={{personajes, setPersonajes}}>
            { children } 
        </PersonajeContext.Provider>
    )
}

export default PersonajesProvider
