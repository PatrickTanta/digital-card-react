import { ErrorPage } from '../pages/ErrorPage'
import { ClientLayout } from '../layouts/ClientLayout'
import { LoginClient } from '../pages/Client/LoginClient'

export const routesClient = [
    {
        path: '/',
        element: <ClientLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <LoginClient />
            }
        ]
    }
]
