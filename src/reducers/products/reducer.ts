import { ActionTypes } from './actions';
import { OrdersType } from '../../contexts/ShoppingContext';
import { PaymentMethodType } from '../../contexts/ShoppingContext';

import { produce } from 'immer';

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

interface Actions {
  type: ActionTypes;
  payload: any;
}

export function productsReducer(state: ProductsState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const isAlreadyInCart = state.productsInCart.find(
        (product) => product.id === action.payload.newProduct.id
      );

      if (isAlreadyInCart) {
        // return {
        //   ...state,
        //   productsInCart: state.productsInCart.map((product) => {
        //     if (product.id === action.payload.newProduct.id) {
        //       return {
        //         ...product,
        //         quantity: product.quantity + action.payload.newProduct.quantity,
        //       };
        //     } else {
        //       return product;
        //     }
        //   }),
        // };

        const currentProductIndex = state.productsInCart.findIndex(
          (product) => {
            return product;
          }
        );

        if (currentProductIndex < 0) {
          return state;
        }

        return produce(state, (draft) => {
          draft.productsInCart[currentProductIndex].quantity =
            draft.productsInCart[currentProductIndex].quantity +
            action.payload.newProduct.quantity;
        });
      } else {
        // return {
        //   ...state,
        //   productsInCart: [...state.productsInCart, action.payload.newProduct],
        // };

        return produce(state, (draft) => {
          draft.productsInCart.push(action.payload.newProduct);
        });
      }
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      // const productsWithoutRemovedOne = state.productsInCart.filter(
      //   (product) => {
      //     return product.id !== action.payload.id;
      //   }
      // );
      // console.log('productsWithoutRemovedOne', productsWithoutRemovedOne);
      // return {
      //   ...state,
      //   productsInCart: productsWithoutRemovedOne,
      // };

      const productIndexToRemove = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndexToRemove < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.productsInCart.splice(productIndexToRemove, 1);
      });
    }
    case ActionTypes.ADD_QUANTITY: {
      // return {
      //   ...state,
      //   productsInCart: state.productsInCart.map((product) => {
      //     if (product.id === action.payload.product.id) {
      //       return {
      //         ...product,
      //         quantity: product.quantity + 1,
      //       };
      //     } else {
      //       return product;
      //     }
      //   }),
      // };

      const productIndexToAddQuantity = state.productsInCart.findIndex(
        (product) => product.id === action.payload.product.id
      );

      if (productIndexToAddQuantity < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.productsInCart[productIndexToAddQuantity].quantity =
          action.payload.product.quantity + 1;
      });
    }
    case ActionTypes.REMOVE_QUANTITY: {
      // return {
      //   ...state,
      //   productsInCart: state.productsInCart.map((product) => {
      //     if (
      //       product.id === action.payload.product.id &&
      //       product.quantity > 0
      //     ) {
      //       return {
      //         ...product,
      //         quantity: product.quantity - 1,
      //       };
      //     } else {
      //       return product;
      //     }
      //   }),
      // };

      const productIndexToRemoveQuantity = state.productsInCart.findIndex(
        (product) => product.id === action.payload.product.id
      );

      if (productIndexToRemoveQuantity < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.productsInCart[productIndexToRemoveQuantity].quantity =
          action.payload.product.quantity - 1;
      });
    }
    case ActionTypes.SELECT_PAYMENT_METHOD: {
      // return {
      //   ...state,
      //   paymentMethod: action.payload.method,
      // };

      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.method;
      });
    }
    case ActionTypes.CREATE_NEW_ORDER: {
      // return {
      //   ...state,
      //   orders: [...state.orders, action.payload.order],
      //   productsInCart: [],
      // };

      return produce(state, (draft) => {
        draft.orders.push(action.payload.order);
        draft.productsInCart = [];
      });
    }
    default: {
      return state;
    }
  }
}
