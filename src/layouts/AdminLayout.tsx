import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { TheAppbar } from '../components/ui/TheAppbar'
import { useAuth } from '../hooks'
import { SideMenu } from '../components/ui/SideMenu'
import { useUi } from '../hooks/useUi'
import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'

const drawerWidth = 250

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window
}

export const AdminLayout: FC<Props> = (props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const { isMenuOpen, toggleSideMenu } = useUi()

    const { auth } = useAuth()
    const container =
        window !== undefined ? () => window().document.body : undefined

    return auth ? (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TheAppbar />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={isMenuOpen}
                    onClose={toggleSideMenu}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <SideMenu />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        overflowX: 'hidden',
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                    open
                >
                    <SideMenu />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    minHeight: '100vh'
                }}
            >
                {/* <Toolbar /> */}
                <br />
                <Outlet />
            </Box>
        </Box>
    ) : (
        <Navigate to="/admin/login" />
    )
}
