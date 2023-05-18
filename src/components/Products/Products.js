import React, { Component }  from 'react';
import classes from './Products.css';
//import classes from '../UI.css';
import Product from './Product/Product';

// const car = [
//     {id: 1, name: 'Mazda 3 MPS', description:'lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda', image: 'https://img1.icarcdn.com/28946911/gallery_used-car-carlist-mazda-6-skyactiv-g-sedan-malaysia_000028946911_149c3070_fd8e_4130_a5ba_8212826c0832.jpg', price1: 75888, price2: 85888}
// ];

class Products extends Component {
    state = {
        cars: [
            {id: 1, name: 'Mazda 3 MPS', description:'lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda lorem ipsum Mazda', image: 'https://img1.icarcdn.com/28946911/gallery_used-car-carlist-mazda-6-skyactiv-g-sedan-malaysia_000028946911_149c3070_fd8e_4130_a5ba_8212826c0832.jpg', price1: 75888, price2: 85888},
            {id: 2, name: 'Renault Megane RS 250 Cup', description:'lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault lorem ipsum Renault', image: '', price1: 69800, price2: 79800}
        ]
    }
    componentDidMount () {

    }

    render () {

        let cars = this.state.cars.map( car => {
            return (
                <Product 
                    key={car.id}
                    name={car.name}
                    description={car.description}
                    carPhoto={car.image}
                    price1={car.price1}
                    price2={car.price2}
                    />
            );
        } );

        return (
            // <p>This is products</p>
            //header
            <div>
                <p>Products</p>
                <div className={classes.row}>
                    <br />
                    <header className={classes.line}>
                        <div className={classes.column1}>Name</div>
                        <div className={classes.column}>Description</div>
                        <div className={classes.column1}>Image</div>
                        <div className={classes.column1}>Price Range (RM)</div>
                    </header>                  
                </div>           
            </div>

        )
    }
}

export default Products;