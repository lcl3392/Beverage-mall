import { BrowserRouter , Routes, Route } from "react-router-dom";
import './assets/css/reset.css'
import './assets/css/common.css'
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import CustomerAdd  from "./components/CustomerAdd";
import CustomerDetail   from "./components/CustomerDetail";
 
const App = () => {
  return (
    <BrowserRouter>    
      <Routes >
          <Route path="/" element={ <Layout />} >
              <Route index element={ <Home /> } />
              <Route index path="/cart" element={ <Cart /> } />
          </Route>
          <Route path="/customer">
            <Route index element={<Customer/>}/>
            <Route path=":CustomerAdd" element={<CustomerAdd />}/>
            <Route path=":CustomerID" element={<CustomerDetail />}/>
            </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
