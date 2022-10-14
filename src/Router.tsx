import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./screens/Checkout"
import { Home } from "./screens/Home"
import { OrderConfirmation } from "./screens/OrderConfirmation"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  )
}