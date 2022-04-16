import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/Home/Header/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import About from './Pages/About/About';
import AllProducts from "./AllProducts/AllProducts/AllProducts";
import Registration from "./Pages/Login/Registration/Registration";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Home/Product/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            
           

            <PrivateRoute exact path="/allproducts/:buynowId">
             <Purchase></Purchase>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Registration></Registration>
            </Route>

            <Route path="**">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
