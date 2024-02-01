import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { MainProvider } from "./context/MainContext";
import Home from "../src/pages/Home"
import Products from "../src/pages/Products"
import About from "../src/pages/About"
import Login from "../src/pages/Login"
import Cart from "../src/pages/Cart"
import AddProduct from "../src/pages/AddProduct"
import ProductPage from "../src/pages/ProductPage"
import PrivateRoute  from "./middleware/PrivateRoute";
import NotFound from "../src/pages/NotFound"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainProvider>
        <Home />
      </MainProvider>
    ),
  },
   {
    path: "/products",
    element: (
      <MainProvider>
        <Products />
      </MainProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <MainProvider>
        <About />
      </MainProvider>
    ),
  },  {
    path: "/products/:id",
    element: (
      <MainProvider>
        <ProductPage />
      </MainProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <MainProvider>
        <Login />
      </MainProvider>
    ),
  },{
    path:"/addproduct",
    element: (
      <MainProvider>
        <PrivateRoute>
          <AddProduct />
        </PrivateRoute>
      </MainProvider>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainProvider>
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      </MainProvider>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

