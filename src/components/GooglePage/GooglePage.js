import React from 'react';
import classes from './GooglePage.css';
import Popup from '../../hoc/Popup/Popup';

const GooglePage = (props) =>
(
    <div>
         <iframe src="https://www.google.com/webhp?igu=1" className={classes.Iframe} />
        <Popup />
    </div>
   
) 

export default GooglePage;