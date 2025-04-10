import React from "react"
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import Modal from "react-modal";

Modal.setAppElement('#root');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

