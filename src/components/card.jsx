import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea,Button } from '@mui/material';
import '../styling/card.scss';
import dress from "../static/images/dress2.jpeg"

export const CardComponent = ({images}) => {
    return(
        <div id="cardOuterContainer">
        {images.map((item) => {
             return(<Card id="cardContainer">
             <CardMedia
             component="img"
             image={item}
             alt="Dress Shoes" 
            //  src={dress}
             className="cardImage"/>
             <CardActionArea>
                 <Button
                 variant='outlined'
                 id='addCartBtn'
                 >Add To Cart</Button>
 
             </CardActionArea>
         </Card>);
        } )}
        </div>
    );
}