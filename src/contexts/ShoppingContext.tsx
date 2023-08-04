import { ReactNode, createContext, useState } from 'react';

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

type PaymentMethodType = 'creditCard' | 'debitCard' | 'money';

interface OrdersType {
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

export function ShoppingContextProvider({
  children,
}: ShoppingContextProviderProps) {
  const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>('creditCard');

  const [orders, setOrders] = useState<OrdersType[]>([]);

  function addProductToCart(data: ProductType) {
    const isAlreadyInCart = productsInCart.find(
      (product) => product.id === data.id
    );

    if (isAlreadyInCart) {
      const updatedProducts = productsInCart.map((product) => {
        if (product.id === data.id) {
          return {
            ...product,
            quantity: product.quantity + data.quantity,
          };
        } else {
          return product;
        }
      });

      setProductsInCart(updatedProducts);
    } else {
      const newProduct = {
        id: data.id,
        imgPath: data.imgPath,
        name: data.name,
        quantity: data.quantity,
        price: data.price,
      };

      setProductsInCart([...productsInCart, newProduct]);
    }
  }

  function addQuantity(data: ProductType) {
    const updatedProducts = productsInCart.map((product) => {
      if (product.id === data.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });

    setProductsInCart(updatedProducts);
  }

  function removeQuantity(data: ProductType) {
    const updatedProducts = productsInCart.map((product) => {
      if (product.id === data.id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });

    setProductsInCart(updatedProducts);
  }

  function removeProductFromCart(id: string) {
    const productsWithoutRemovedOne = productsInCart.filter(
      (product) => product.id !== id
    );

    setProductsInCart(productsWithoutRemovedOne);
  }

  function selectPaymentMethod(method: PaymentMethodType) {
    setPaymentMethod(method);
  }

  function createNewOrder(data: OrdersType) {
    setOrders([...orders, data]);
    setProductsInCart([]);
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
