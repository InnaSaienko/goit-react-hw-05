import React from "react"
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import Modal from "react-modal";
import {Toaster} from "react-hot-toast";

Modal.setAppElement('#root');

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Toaster/>
    </React.StrictMode>,
    document.getElementById('root')
);

