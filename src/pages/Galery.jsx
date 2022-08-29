import React from 'react'
import '../App.css';
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Galery() {

    const [characters,setCharacters] = useState([]) //manejo de estados

    useEffect(()=>{
        fetch("https://finalspaceapi.com/api/v0/character")
        .then(response=>response.json())
        .then(data=>{
            
            console.log(data)
            setCharacters(data)
        })
    },[]) //No olvidarse del arreglo (segundo parametro)
    // DependencyList: Si esta vacio, solo se ejecuta una vez (en desarrollo 2 veces)
    return (
        <div>
            <h1>Final Space</h1>
            <div className="Galery">       
                {characters.map((character, index) => (
                    <div key={index} className="card">
                        <Card title={character.name} 
                            image={character.img_url}
                            specie={character.species}
                            gender={character.gender}
                            hair={character.hair}
                            origin={character.origin}
                            abilities={character.abilities}
                            alias={character.alias}></Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
