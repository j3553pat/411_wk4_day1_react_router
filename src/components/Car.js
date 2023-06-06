import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router-dom"
import { Container, Paper, Chip } from "@mui/material";


const Car = (props) => {
    const carId = useParams().id
    const carFinder = cars.find((car) => car.id === Number(carId))
    console.log(carFinder)
    return (
        <Container maxWidth="sm" className='container'>
            <Paper>
                <h1>{carFinder.Name.toUpperCase()}</h1>
                {Object.keys(carFinder).map((key, index) => {
                    return <Chip key={index} label={`${key.toUpperCase().split("").join("")}: ${carFinder[key]}`}></Chip>
                })}
            </Paper>
        </Container>
            
    )
}

export default Car