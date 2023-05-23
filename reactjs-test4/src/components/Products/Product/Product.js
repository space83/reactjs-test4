import React, { Component } from 'react';
import classes from './Product.css';
import Button from '../../UI/Button/Button';
import axios from 'axios';

class Product extends Component {
    state = {
        car: []
    }

    componentDidMount () {
        const cid = this.props.match.params.id;
        //console.log("product id: " + cid);

        axios.get('https://react-my-burger-ac7a3-default-rtdb.asia-southeast1.firebasedatabase.app/cars.json')
        .then(response => {
                const cara = response.data.filter(e => e.id === +cid);                 
                this.setState( { car: cara } );
            })
        .catch( error => {
            this.setState( { error: true } );
        } );
    }

    backHandler = (event) => {
        event.preventDefault();
        this.props.history.push( '/Product/' );        
    }

    render () {

        let pid = this.state.car.map( selectedcar => { return selectedcar.id })        

        // if (pid.length ===  0) {
        //     console.log('null')
        // } else {
        //     console.log('got data');
        // }   

        let page = pid.length ===  0 ? <h1 className={classes.textInvalid}>Invalid Product ID</h1> : (
            this.state.car.map( selectedcar => {
                return (
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
                );
             }
            )
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