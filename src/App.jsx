import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import "./App.css"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Order from "./pages/Order"
import Reserve from "./pages/Reserve"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="reserve" element={<Reserve />}/>
      <Route path="order" element={<Order />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App