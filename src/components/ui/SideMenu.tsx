import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from '@mui/material'
import {
    AccountCircleOutlined,
    AdminPanelSettings,
    CategoryOutlined,
    ConfirmationNumberOutlined,
    EscalatorWarningOutlined,
    FemaleOutlined,
    LoginOutlined,
    MaleOutlined,
    VpnKeyOutlined
} from '@mui/icons-material'
import { useUi } from '../../hooks'
import { NavLink } from 'react-router-dom'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'

export const SideMenu = () => {
    const { isMenuOpen, toggleSideMenu } = useUi()

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
            icon: <AccessAlarmsIcon />
        },
        {
            id: 3,
            title: 'Historial de pagos',
            path: '/admin/tables',
            icon: <ConfirmationNumberOutlined />
        },
        {
            id: 4,
            title: 'Categorias',
            path: '/admin/categories',
            icon: <AccessAlarmsIcon />
        },
        {
            id: 5,
            title: 'Productos',
            path: '/admin/products',
            icon: <ConfirmationNumberOutlined />
        },
        {
            id: 6,
            title: 'Usuarios',
            path: '/admin/users',
            icon: <ConfirmationNumberOutlined />
        }
    ]

    return (
        <Drawer
            open={isMenuOpen}
            anchor="right"
            sx={{
                backdropFilter: 'blur(4px)',
                transition: 'all 0.5s ease-out'
            }}
            onClose={toggleSideMenu}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <List>
                    {ADMIN_MENU_ITEMS.map((item, index) => (
                        <ListItem button>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'selected' : ''
                                }
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex'
                                }}
                                to={item.path}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
