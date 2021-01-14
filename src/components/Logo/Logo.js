import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{
        height: props.height,
        marginBottom: props.marginBottom
    }}>
        <img src={burgerLogo} alt="Here is my burger" />
    </div>
);

export default logo;