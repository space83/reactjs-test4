import React, { Component } from 'react';
import classes from './Product.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import Invalid from  '../../Invalid/Invalid';

class Product extends Component {
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
        //console.log("product did mount");

    }

    backHandler = (event) => {
        console.log("backHandler");
        event.preventDefault();
        this.props.history.push( '/Product/' );        
    }

    render () {

        let selectedcar = this.state.cars[this.props.match.params.id - 1];    

        let page = (
            <div>
                <div className={classes.center}>
                    <h1>{selectedcar.name}</h1>
                    <img className={classes.imgsize} src={selectedcar.image} />            
                </div>

                <table className={classes.table}>
                    <tr>
                        <th>Description</th>
                        <td>{selectedcar.description}</td>
                    </tr>
                </table>

                <p className={classes.variance}>Variance</p>
                <table className={classes.table}>
                    <tr>
                        <th>Full Spec</th>
                        <td>{selectedcar.price1.toLocaleString("en-US")}</td>
                    </tr>
                    <tr>
                        <th>Low Spec</th>
                        <td>{selectedcar.price2.toLocaleString("en-US")}</td>
                    </tr>
                </table>

                <Button clicked={this.backHandler} btnType="Normal">Back</Button>
                <br />
            </div>             
        )

        return (
            <div>
                <p>Product</p>                
                    {page}
                    {/* <Invalid /> */}
            </div>           
        );
    }
}

export default Product;
