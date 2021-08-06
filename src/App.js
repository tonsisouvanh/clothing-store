import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
// COMPONENTS
import { Navbar, Footer, ProductDetail } from "./components/index";
// PAGES
import { Home, Products } from "./pages/index";
//CONTEXT
import { ProductProvider } from "./ContextApi/ProductContext";
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/page/products" component={Products}></Route>
            <Route
              exact
              path="/page/products/product-detail/:id"
              component={ProductDetail}
            ></Route>
          </Switch>
          <Footer />
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
