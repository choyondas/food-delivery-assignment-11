
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Details from './components/Details/Details/Details';
import More from './components/More/More';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddServices from './components/AddServices/AddServices';
import Update from './components/Update/Update';
import Dashboard from './components/Dashboard/Dashboard';
import Burger from './components/Food/Burger/Burger';
import BuyNow from './components/BuyNow/BuyNow';
import Address from './components/Address/Address';
import Buying from './components/Buying/Buying';
import OurRecipes from './components/OurRecipes/OurRecipes';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Customer from './components/Customer/Customer';






function App() {
  return (
    <div >

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route exact path='/'>
              <Home></Home>

            </Route>

            <Route path='/services'>
              <Services></Services>

            </Route>

            <Route path='/customer'>
              <Customer></Customer>

            </Route>

            <Route path='/recipes'>
              <OurRecipes></OurRecipes>

            </Route>

            <Route path='/about'>
              <About></About>

            </Route>
            <Route path='/contact'>
              <Contact></Contact>

            </Route>

            <PrivateRoute path='/burgers'>
              <Burger></Burger>
            </PrivateRoute>


            <PrivateRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>

            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>

            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/addServices'>
              <AddServices></AddServices>
            </PrivateRoute>

            <Route path='/address'>
              <Address></Address>
            </Route>

            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/update/:serviceId'>
              <Update></Update>
            </Route>
            <Route path='/booking/:id'>
              <BuyNow></BuyNow>
            </Route>

            <Route path='/more'>
              <More></More>
            </Route>


            <Route path='/services/:id'>
              <Buying></Buying>
            </Route>



            <PrivateRoute path='/details/:id'>
              <Details></Details>
            </PrivateRoute>




            <Route path='*'>
              <Error></Error>

            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>



    </div>
  );
}

export default App;
