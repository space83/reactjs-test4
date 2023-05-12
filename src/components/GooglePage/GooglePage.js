import React from 'react';
import classes from './GooglePage.css';
import { Redirect } from 'react-router-dom';

const GooglePage = (props) =>
(
    <iframe src="https://www.google.com/webhp?igu=1" className={classes.Iframe} />
) 

export default GooglePage;