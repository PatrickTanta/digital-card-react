import { ErrorPage } from '../pages/ErrorPage'
import { AdminLayout } from '../layouts'
import {
    CategoryAdmin,
    HistoryAdmin,
    HomeAdmin,
    LoginAdmin,
    OrderAdmin,
    ProductAdmin,
    TableAdmin,
    UsersAdmin
} from '../pages/Admin'

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
                element: <HomeAdmin />
            },
            {
                path: 'orders',
                element: <OrderAdmin />
            },
            {
                path: 'tables',
                element: <TableAdmin />
            },
            {
                path: 'history',
                element: <HistoryAdmin />
            },
            {
                path: 'products',
                element: <ProductAdmin />
            },
            {
                path: 'users',
                element: <UsersAdmin />
            },
            {
                path: 'categories',
                element: <CategoryAdmin />
            }
        ]
    }
]
