import { BrowserRouter } from 'react-router-dom';
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"

reactDOM.render(<BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById("root"))