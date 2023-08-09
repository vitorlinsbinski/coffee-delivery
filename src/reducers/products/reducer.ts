import { ActionTypes } from './actions';
import { OrdersType } from '../../contexts/ShoppingContext';
import { PaymentMethodType } from '../../contexts/ShoppingContext';

export interface ProductType {
  id: string;
  imgPath: string;
  name: string;
  quantity: number;
  price: number;
}

interface ProductsState {
  productsInCart: ProductType[];
  paymentMethod: PaymentMethodType;
  orders: OrdersType[];
}

export function productsReducer(state: ProductsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const isAlreadyInCart = state.productsInCart.find(
        (product) => product.id === action.payload.newProduct.id
      );

      if (isAlreadyInCart) {
        return {
          ...state,
          productsInCart: state.productsInCart.map((product) => {
            if (product.id === action.payload.newProduct.id) {
              return {
                ...product,
                quantity: product.quantity + action.payload.newProduct.quantity,
              };
            } else {
              return product;
            }
          }),
        };
      } else {
        return {
          ...state,
          productsInCart: [...state.productsInCart, action.payload.newProduct],
        };
      }
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const productsWithoutRemovedOne = state.productsInCart.filter(
        (product) => {
          return product.id !== action.payload.id;
        }
      );
      console.log('productsWithoutRemovedOne', productsWithoutRemovedOne);
      return {
        ...state,
        productsInCart: productsWithoutRemovedOne,
      };
    }
    case ActionTypes.ADD_QUANTITY: {
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) => {
          if (product.id === action.payload.product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        }),
      };
    }
    case ActionTypes.REMOVE_QUANTITY: {
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) => {
          if (
            product.id === action.payload.product.id &&
            product.quantity > 0
          ) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        }),
      };
    }
    case ActionTypes.SELECT_PAYMENT_METHOD: {
      return {
        ...state,
        paymentMethod: action.payload.method,
      };
    }
    case ActionTypes.CREATE_NEW_ORDER: {
      return {
        ...state,
        orders: [...state.orders, action.payload.order],
        productsInCart: [],
      };
    }
    default: {
      return state;
    }
  }
}
