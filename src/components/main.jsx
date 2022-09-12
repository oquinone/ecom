import React from 'react'
import { NavBar } from './navbar'
import { CardComponent } from './card';
import one from "../static/images/dress.jpeg"
import two from "../static/images/dress2.jpeg"
import three from "../static/images/dress3.jpeg"
import four from "../static/images/dress4.jpeg"
import '../styling/main.scss';

export const Main = () => {
    const images = [one, two, three, four]
    return(
    <>
        <NavBar/>
        <CardComponent images={images} id='cardComponent'/>
    </>
    )
}