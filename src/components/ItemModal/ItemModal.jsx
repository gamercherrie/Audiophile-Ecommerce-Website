import React from 'react';
import './itemModal.scss'
import IconArrow from '../../assets/shared/desktop/icon-arrow-right.svg';

const ItemModal = (props) => {
    const{ item, itemName, itemLink } = props;
    return (
        <div className="modal__card-container">
            <div className="modal__card">
                <img src={item} alt="Mark One-XX99 Headphones" className="modal__object-image"/>
                <p>{itemName}</p>
                <a href={itemLink}>SHOP<img src={IconArrow}/></a>
            </div>
        </div>
    )
}

export default ItemModal