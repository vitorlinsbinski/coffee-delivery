import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { productsReducer } from '../reducers/products/reducer';

interface ShoppingContextProviderProps {
  children: ReactNode;
}

interface ProductType {
  id: string;
  imgPath: string;
  name: string;
  quantity: number;
  price: number;
}

interface ProductContextType {
  productsInCart: ProductType[];
  paymentMethod: PaymentMethodType;
  orders: OrdersType[];

  addProductToCart: (data: ProductType) => void;
  addQuantity: (data: ProductType) => void;
  removeQuantity: (data: ProductType) => void;
  removeProductFromCart: (id: string) => void;
  selectPaymentMethod: (method: PaymentMethodType) => void;
  createNewOrder: (data: OrdersType) => void;
}

export const ShoppingContext = createContext({} as ProductContextType);

export type PaymentMethodType = 'creditCard' | 'debitCard' | 'money';

export interface OrdersType {
  orderId: string;
  cep: string;
  street: string;
  numberHome: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: PaymentMethodType;
  products: ProductType[];
}

import {
  addProductToCartAction,
  removeProductFromCartAction,
  addQuantityAction,
  removeQuantityAction,
  selectPaymentMethodAction,
  createNewOrderAction,
} from '../reducers/products/actions';

export function ShoppingContextProvider({
  children,
}: ShoppingContextProviderProps) {
  // const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);

  const [productsState, dispatch] = useReducer(
    productsReducer,
    {
      productsInCart: [],
      paymentMethod: '' as PaymentMethodType,
      orders: [],
    },
    (initialState) => {
      const productsInCartStateAsJSON = localStorage.getItem(
        '@coffee-delivery: products-in-cart-1.0.0'
      );

      const ordersStateAsJSON = localStorage.getItem(
        '@coffee-delivery: orders-1.0.0'
      );

      if (productsInCartStateAsJSON && ordersStateAsJSON) {
        return {
          ...initialState,
          productsInCart: JSON.parse(productsInCartStateAsJSON),
          orders: JSON.parse(ordersStateAsJSON),
        };
      }

      return initialState;
    }
  );

  const { productsInCart, orders, paymentMethod } = productsState;

  // const [paymentMethod, setPaymentMethod] =
  //   useState<PaymentMethodType>('creditCard');

  // const [orders, setOrders] = useState<OrdersType[]>([]);

  useEffect(() => {
    const stateJSON = JSON.stringify(productsInCart);

    localStorage.setItem('@coffee-delivery: products-in-cart-1.0.0', stateJSON);
  }, [productsInCart]);

  useEffect(() => {
    const stateJSON = JSON.stringify(orders);

    localStorage.setItem('@coffee-delivery: orders-1.0.0', stateJSON);
  }, [orders]);

  function addProductToCart(data: ProductType) {
    // const isAlreadyInCart = productsInCart.find(
    //   (product) => product.id === data.id
    // );
    // if (isAlreadyInCart) {
    //   const updatedProducts = productsInCart.map((product) => {
    //     if (product.id === data.id) {
    //       return {
    //         ...product,
    //         quantity: product.quantity + data.quantity,
    //       };
    //     } else {
    //       return product;
    //     }
    //   });
    //   setProductsInCart(updatedProducts);
    // } else {
    //   const newProduct = {
    //     id: data.id,
    //     imgPath: data.imgPath,
    //     name: data.name,
    //     quantity: data.quantity,
    //     price: data.price,
    //   };
    //   setProductsInCart([...productsInCart, newProduct]);
    // }

    const newProduct = {
      id: data.id,
      imgPath: data.imgPath,
      name: data.name,
      quantity: data.quantity,
      price: data.price,
    };

    dispatch(addProductToCartAction(newProduct));
  }

  function addQuantity(product: ProductType) {
    // const updatedProducts = productsInCart.map((product) => {
    //   if (product.id === data.id) {
    //     return {
    //       ...product,
    //       quantity: product.quantity + 1,
    //     };
    //   } else {
    //     return product;
    //   }
    // });
    // setProductsInCart(updatedProducts);
    dispatch(addQuantityAction(product));
  }

  function removeQuantity(product: ProductType) {
    // const updatedProducts = productsInCart.map((product) => {
    //   if (product.id === data.id && product.quantity > 1) {
    //     return {
    //       ...product,
    //       quantity: product.quantity - 1,
    //     };
    //   } else {
    //     return product;
    //   }
    // });
    // setProductsInCart(updatedProducts);
    if (product.quantity > 1) {
      dispatch(removeQuantityAction(product));
    }
  }

  function removeProductFromCart(id: string) {
    // const productsWithoutRemovedOne = productsInCart.filter(
    //   (product) => product.id !== id
    // );
    // setProductsInCart(productsWithoutRemovedOne);
    dispatch(removeProductFromCartAction(id));
  }

  function selectPaymentMethod(method: PaymentMethodType) {
    // setPaymentMethod(method);
    dispatch(selectPaymentMethodAction(method));
  }

  function createNewOrder(order: OrdersType) {
    // setOrders([...orders, data]);
    // setProductsInCart([]);
    dispatch(createNewOrderAction(order));
  }

  return (
    <ShoppingContext.Provider
      value={{
        productsInCart,
        addProductToCart,
        addQuantity,
        removeQuantity,
        removeProductFromCart,
        paymentMethod,
        selectPaymentMethod,
        createNewOrder,
        orders,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
