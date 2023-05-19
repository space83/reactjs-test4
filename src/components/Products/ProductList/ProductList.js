import React, { Component } from 'react';
import classes from './ProductList.css';
import ShowMoreText from "react-show-more-text";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

class ProductList extends Component {
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render () {
        let truncate = (
            <ShowMoreText
            lines={3}
            more=" "
            onClick={this.executeOnClick}
            expanded={false}
            >               
                {this.props.description}
            </ShowMoreText>
        );

        return (
            <tr>
                <td className={classes.textlink} onClick={this.props.clicked}>
                    {this.props.name}
                </td>
                <td>
                {  truncate }
                </td>
                <td>
                    <img className={classes.imgsize} src={this.props.carPhoto} />
                </td>
                <td>{this.props.price1.toLocaleString("en-US")} - {this.props.price2.toLocaleString("en-US")}</td>
            </tr> 
        );
    }
}

export default ProductList;

