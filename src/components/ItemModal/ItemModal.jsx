import React from 'react';
import { Link } from "react-router-dom";

import './itemModal.scss'
import IconArrow from '../../assets/shared/desktop/icon-arrow-right.svg';


const ItemModal = (props) => {
    const{ item, itemName, itemLink } = props;
    return (
        <div className="modal__card-container">
            <div className="modal__card">
                <img src={item} alt="Mark One-XX99 Headphones" className="modal__object-image"/>
                <p>{itemName}</p>
                <Link to={"/" + itemLink}>SHOP<img src={IconArrow} alt="icon arrow"/></Link>
            </div>
        </div>
    )
}

export default ItemModal