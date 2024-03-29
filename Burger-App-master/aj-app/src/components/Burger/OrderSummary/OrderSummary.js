import React from 'react';
import Aux from "../../../hoc/Aux";
import button from '../../UI/Button/Button';
import '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li> );
        } ); 

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
             <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <button className="Danger" onClick={props.purchaseCancelled}>CANCEL</button>
            <button className="Success" onClick={props.purchaseContinued}>CONTINUE</button>
        </Aux>
    );
};

export default orderSummary;