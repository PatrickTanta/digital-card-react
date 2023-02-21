import { ErrorPage } from '../pages/ErrorPage'
import { AdminLayout } from '../layouts'
import { LoginAdmin } from '../pages/Admin/LoginAdmin'

export const routesAdmin = [
    {
        path: 'admin',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <LoginAdmin />
            }
        ]
    }
]
