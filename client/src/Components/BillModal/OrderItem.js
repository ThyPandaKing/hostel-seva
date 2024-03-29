import React from "react";
import './OrderItem.css';

export default function OrderItem({item}) {
    return (
        <>
            <div 
                className="d-flex" 
                style={{justifyContent: 'space-between', width: '100%'}}
            >
                <div className="d-flex"
                    style={{justifyContent: 'space-between', width: '50%'}}
                >
                    <div className="item-name">{item.name.toUpperCase()} </div>
                    <div className="item-count">{item.price} x {item.times}</div>
                </div>
                <div className="item-price">{item.times * item.price}.00</div>
            </div>
            <div>-------------------------------------</div>
        </>
    )
}