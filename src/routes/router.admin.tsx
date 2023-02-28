import { ErrorPage } from '../pages/ErrorPage'
import { AdminLayout } from '../layouts'
import { HomeAdmin } from '../pages/Admin/HomeAdmin'
import LoginAdmin from '../pages/Admin/LoginAdmin'

export const routesAdmin = [
    {
        path: 'admin/login',
        element: <LoginAdmin />
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'home',
                element: <HomeAdmin />,
                handle: {
                    layout: {
                        title: 'Home page'
                    }
                }
            }
        ]
    }
]
