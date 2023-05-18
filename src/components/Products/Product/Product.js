import React from 'react';
import classes from './Product.css';
import './Product.css';

const product = (props) => (    
    <div>        
        <div className={classes.column1}>{props.name}</div>
        <div className={classes.column}>{props.description}</div>
        <div className={classes.column1}>{props.carPhoto}</div>
        <div className={classes.column1}>{props.price1}</div>
    </div>
);

export default product;
