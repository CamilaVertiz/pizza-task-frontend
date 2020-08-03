import React from 'react'
import NotFound from './utils/NotFound'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Products from './components/Products/Products'
import Checkout from './components/Checkout/Checkout'
import Payment from './components/Checkout/Payment'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Provider from './context/Provider'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <Provider>
      <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" component={Products} exact />
              <Route path="/checkout" component={Checkout} />
              <Route path="/payment" component={Payment} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
      </Router>
    </Provider>
  );
}

export default App;
