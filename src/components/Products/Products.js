import React, { Component, useState, useEffect }  from 'react';
import classes from '../UI.css';
import ProductList from './ProductList/ProductList';
import Product from './Product/Product';
import { Route, Switch } from 'react-router-dom';

class Products extends Component {
    state = {
        cars: [
            {
                id: 1, 
                name: 'Mazda 3 MPS', 
                description:'The Mazdaspeed 3 is a sport compact hatchback introduced for the 2007 model year by Mazdaspeed and produced until 2013. The Mazdaspeed3 is a performance-enhanced version of the 5-door Mazda3. lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzdAyIgacPSF3KGaUTMicrAxOkVozyC8-Hw&usqp=CAU', 
                price1: 75888, 
                price2: 85888
            },
            {
                id: 2, 
                name: 'Renault Megane RS 250 Cup', 
                description:'The Renault Mégane (French pronunciation: meɡan), also spelled without the acute accent as Megane,[1] especially in languages other than French, is a small family car produced by the French car manufacturer Renault for model year 1996, and was the successor to the Renault 19. lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrOHHD-ATaYSkLdN6OxaVWQFWbdN_n-3MEw&usqp=CAU',
                price1: 69800, 
                price2: 79800
            },
            {
                id: 3, 
                name: 'Volkswagen Golf GTI Mk6', 
                description:'lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen lorem ipsum Volkswagen', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbIRxw8xqxqHn0rvUx7EUsI_u4Mw2EmpZ-Q&usqp=CAU',
                price1: 71800, 
                price2: 81800
            }
        ]
    }

    componentDidMount () {

    }

    postSelectedHandler = ( id ) => {
        this.props.history.push( '/Product/' + id );
    }

    render () {

        let cars = this.state.cars.map( car => {
            return (
                <ProductList
                    key={car.id}
                    name={car.name}
                    description={car.description}
                    carPhoto={car.image}
                    price1={car.price1}
                    price2={car.price2}
                    clicked={() => this.postSelectedHandler( car.id )}
                />
            );
        } );

        let list = (
            //console.log(id);
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Price Range (RM)</th>
                    </tr>
                </thead>
                <tbody>
                    {cars}
                </tbody>
            </table>
        );

        return (
            <div>                
                <p>Products</p>                
                {list}
            </div>
        )
    }
}

export default Products;