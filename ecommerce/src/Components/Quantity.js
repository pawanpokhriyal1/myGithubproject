import React from "react";
import { useReducer } from "react";
// import { CartContext } from "../App"








function Quantity(props) {

    const initialState = { count: 0 };
    // const [cartlist, setCartlist] = useContext(CartContext);

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>

            <button onClick={() => dispatch({ type: 'decrement' })} onMouseDown={() => props.addFunc(props.item, state.count)}>-</button>
            <span>{props.quantity}</span>
            <button onClick={() => dispatch({ type: 'increment' })} onMouseDown={() => props.addFunc(props.item, state.count)}>+</button>
        </>
    );
}
export default Quantity;
