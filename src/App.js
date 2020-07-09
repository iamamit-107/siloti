import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/MainPages/HomePage";
import { BASE_URL } from "./config";
import ProductPage from "./Pages/MainPages/ProductPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={`${BASE_URL}/`} component={HomePage} />
                <Route path={`${BASE_URL}/products`} component={ProductPage} />
            </Switch>
        </div>
    );
}

export default App;
