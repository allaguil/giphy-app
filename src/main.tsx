import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiphyApp } from './GiphyApp';

import './index.css'; // Global CSS Styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GiphyApp />
    </React.StrictMode>
)