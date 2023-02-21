import { createBrowserRouter } from 'react-router-dom'
import { routesAdmin } from './router.admin'
import { routesClient } from './router.client'

const routes = [...routesAdmin, ...routesClient]
export const router = createBrowserRouter(routes)
