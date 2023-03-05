import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from './themes'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context'
import { UiProvider } from './context/ui/UiProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <UiProvider>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <ToastContainer
                        position="bottom-center"
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        pauseOnFocusLoss
                        draggable
                        autoClose={5000}
                        pauseOnHover={false}
                        rtl={false}
                    />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </UiProvider>
        </AuthProvider>
    </React.StrictMode>
)
