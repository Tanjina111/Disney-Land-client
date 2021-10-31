import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import Detail from './Component/Detail/Detail';
import PageError from './Component/PageError/PageError';
import Footer from './Component/Footer/Footer';
import MyOrders from './Component/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>

        {/* Private Route */}
        <PrivateRoute path='/detail/:id'>
        <Detail></Detail>
        </PrivateRoute>
        <Route path='/orders'>
        <MyOrders></MyOrders>
        </Route>
        <Route path='/login'>
        <LogIn></LogIn>
        </Route>
        <Route path='*'>
        <PageError></PageError>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
