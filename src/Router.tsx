import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';

export function Router() {
  return (
    <Routes>
      <Route path="/coffee-delivery" element={<DefaultLayout />}>
        <Route path="/coffee-delivery" element={<Home />}></Route>
        <Route path="/coffee-delivery/cart" element={<Cart />}></Route>
        <Route path="/coffee-delivery/order/:id" element={<Order />}></Route>
      </Route>
    </Routes>
  );
}
