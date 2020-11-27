import React from 'react'
import Counter from "./components/Counter";
import WishMessage from "./components/WishMessage";
import CartItem from "./components/CartItem";




function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand">React With Events Binding</a>

        </nav>
        {/*<Counter/>*/}
        {/*<WishMessage/>*/}
        <CartItem/>
    </React.Fragment>
  );
}

export default App;
