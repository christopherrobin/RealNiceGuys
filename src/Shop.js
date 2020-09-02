import React from 'react';
import './Shop.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Shop = () => {
  return (
    <div id="Shop-Component">
        <div id="myShop">
            <CircularProgress color="secondary" size={110} />
        </div>
    </div>
  );
};

export default(Shop);
