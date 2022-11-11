// import { AccessTimeTwoTone } from "@mui/icons-material";



export const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_LIST':
            return { ...state, productlist: action.payload }
        case 'ADD_TO_CART':
            return { ...state, cartlist: [...state.cartlist, { ...action.payload, quantity: 1, subtotal: action.payload.price }] }
        case 'REMOVE_FROM_CART':
            return { ...state, cartlist: state.cartlist.filter((item) => item.id !== action.payload) }

        case 'increment':
            return { ...state, cartlist: state.cartlist.filter((c) => c.id === action.payload.id ? (c.quantity += .5) : (c.quantity)) };

        case 'decrement':
            return { ...state, cartlist: state.cartlist.filter((c) => c.id === action.payload.id ? (c.quantity -= .5) : (c.quantity)) };
        default:
            return state;
    }


}

