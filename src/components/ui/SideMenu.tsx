import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material'
import { ConfirmationNumberOutlined } from '@mui/icons-material'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import TableBarIcon from '@mui/icons-material/TableBar'
import HistoryIcon from '@mui/icons-material/History'
import CategoryIcon from '@mui/icons-material/Category'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import GroupIcon from '@mui/icons-material/Group'
import ListItemButton from '@mui/material/ListItemButton'
import Divider from '@mui/material/Divider'

const ADMIN_MENU_ITEMS = [
    {
        id: 1,
        title: 'Pedidos',
        path: '/admin/orders',
        icon: <ConfirmationNumberOutlined />
    },
    {
        id: 2,
        title: 'Mesas',
        path: '/admin/tables',
        icon: <TableBarIcon />
    },
    {
        id: 3,
        title: 'Historial de pagos',
        path: '/admin/history',
        icon: <HistoryIcon />
    },
    {
        id: 4,
        title: 'Categorias',
        path: '/admin/categories',
        icon: <CategoryIcon />
    },
    {
        id: 5,
        title: 'Productos',
        path: '/admin/products',
        icon: <ProductionQuantityLimitsIcon />
    }
]

export const SideMenu = () => {
    const [menuItems, setMenuItems] = useState(ADMIN_MENU_ITEMS)
    const { auth } = useAuth()

    const { pathname } = useLocation()

    useEffect(() => {
        if (auth?.me?.is_staff) {
            setMenuItems([
                ...ADMIN_MENU_ITEMS,
                {
                    id: 6,
                    title: 'Usuarios',
                    path: '/admin/users',
                    icon: <GroupIcon />
                }
            ])
        }
    }, [])

    return (
        <Box sx={{ width: 250, paddingTop: 1 }}>
            <Typography
                textAlign="center"
                fontStyle="italic"
                fontWeight={800}
                sx={{ my: 1 }}
            >
                Panel de administración
            </Typography>
            <Divider />
            <List>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            margin: 2
                        }}
                        to={item.path}
                    >
                        <ListItemButton selected={pathname === item.path}>
                            <Box display="flex" sx={{ px: 3, color: 'black' }}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </Box>
                        </ListItemButton>
                    </NavLink>
                ))}
            </List>
        </Box>
    )
}
