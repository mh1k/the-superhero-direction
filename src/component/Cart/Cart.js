import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const userIcon = <FontAwesomeIcon icon={faUsers} />

    const { cart } = props
    console.log(props);
    let castingPrice = 0;
    for (const actor of cart) {
        castingPrice = castingPrice + actor.salary
    }
    return (
        <div className="ms-3 me-3 shadow text-center added-actor">
            <h4 className="mt-2">{userIcon} Added Actors :{cart.length}</h4>
            <h4 className="mb-4">Total Cost : ${castingPrice}</h4>
            <hr />
            <div className=" mb-4">

                {
                    cart.map(actor => <h5 key={actor.key}>{actor.name}</h5>)
                }
            </div>
            
            <button className="btn btn-secondary w-50 mb-3">Confirm Now</button>

        </div>
    );
};

export default Cart;