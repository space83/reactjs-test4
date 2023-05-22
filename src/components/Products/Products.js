import React, { Component }  from 'react';
import classes from '../UI.css';
import ProductList from './ProductList/ProductList';
import axios from 'axios';

class Products extends Component {

    state = {
        cars: [],
        error: false
    }

    componentDidMount () {
        //console.log('products did mount');
        axios.get('https://react-my-burger-ac7a3-default-rtdb.asia-southeast1.firebasedatabase.app/cars.json')
        .then(response => {
            this.setState({cars: response.data})
            //console.log('axios-1: ' + response.data);
        })
        .catch( error => {
            this.setState( { error: true } );
        } );
    }

    postSelectedHandler = ( id ) => {
        this.props.history.push( '/Product/' + id );
    }

    render () {

        //console.log(this.state.cars);
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