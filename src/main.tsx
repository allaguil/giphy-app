import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiphyFinderApp } from './GiphyFinderApp';

import './index.css'; // Global CSS Styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GiphyFinderApp />
    </React.StrictMode>
)