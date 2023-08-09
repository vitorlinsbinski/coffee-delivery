import { ProductType } from './reducer';
import { PaymentMethodType } from '../../contexts/ShoppingContext';
import { OrdersType } from '../../contexts/ShoppingContext';

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  ADD_QUANTITY = 'ADD_QUANTITY',
  REMOVE_QUANTITY = 'REMOVE_QUANTITY',
  SELECT_PAYMENT_METHOD = 'SELECT_PAYMENT_METHOD',
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
}

export function addProductToCartAction(newProduct: ProductType) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      newProduct,
    },
  };
}

export function removeProductFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      id,
    },
  };
}

export function addQuantityAction(product: ProductType) {
  return {
    type: ActionTypes.ADD_QUANTITY,
    payload: {
      product,
    },
  };
}

export function removeQuantityAction(product: ProductType) {
  return {
    type: ActionTypes.REMOVE_QUANTITY,
    payload: {
      product,
    },
  };
}

export function selectPaymentMethodAction(method: PaymentMethodType) {
  return {
    type: ActionTypes.SELECT_PAYMENT_METHOD,
    payload: {
      method,
    },
  };
}

export function createNewOrderAction(order: OrdersType) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      order,
    },
  };
}
