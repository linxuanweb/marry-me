import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import SignIn from './components/sign-in/SignIn'
import ErrorPage from './error-page'
import { loader as rootLoader } from './routes/data-loader'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: rootLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <SignIn />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
