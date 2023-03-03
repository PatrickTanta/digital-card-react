import { ErrorPage } from '../pages/ErrorPage'
import { AdminLayout } from '../layouts'
import LoginAdmin from '../pages/Admin/LoginAdmin'
import HomeAdmin from '../pages/Admin/HomeAdmin'
import OrderAdmin from '../pages/Admin/OrderAdmin'

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
            },
            {
                path: 'orders',
                element: <OrderAdmin />,
                handle: {
                    layout: {
                        title: 'Orders page'
                    }
                }
            }
        ]
    }
]
