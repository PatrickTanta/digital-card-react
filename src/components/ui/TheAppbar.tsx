import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import Button from '@mui/material/Button'
import { Divider, Typography } from '@mui/material'
import { useState, FC } from 'react'
import { TheAppbarMenu } from './TheAppbarMenu'
import { NavLink, redirect } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useUi } from '../../hooks/useUi'
import { MenuOutlined } from '@mui/icons-material'

export const TheAppbar: FC = () => {
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const [moreAnchorEl, setMoreAnchorEl] = useState(null)
    const isMobileMenuOpen = Boolean(moreAnchorEl)
    const handleMenuClose = () => {
        setMoreAnchorEl(null)
    }
    const menuItems = [{ item: 'About', path: '/about' }]

    const { auth, logout } = useAuth()

    const doLogout = () => {
        logout()
        redirect('/admin/login')
    }

    const customName = () => {
        if (auth?.me?.first_name && auth.me?.last_name) {
            return `${auth.me?.first_name} ${auth.me?.last_name}`
        }
        return auth?.me?.email
    }

    const { toggleSideMenu } = useUi()

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: 'calc(100% - 250px)' },
                ml: { sm: '260px' }
            }}
        >
            <Toolbar variant="dense">
                {/* <Button
                    variant="text"
                    color="secondary"
                    sx={{
                        mr: 2,
                        height: '34px',
                        display: { xs: 'none', md: 'flex' }
                    }}
                >
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Typography
                            textAlign="center"
                            fontWeight={700}
                            fontSize={20}
                            fontStyle="italic"
                            textTransform="none"
                            sx={{ color: '#FFF' }}
                        >
                            Panel de Administración
                        </Typography>
                    </NavLink>
                </Button> */}
                <IconButton
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                    onClick={toggleSideMenu}
                >
                    <MenuOutlined />
                </IconButton>
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                />
                <Box
                    sx={{
                        margin: { sm: '0 19px', xs: '0' },
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <TheAppbarMenu
                        anchorEl={moreAnchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        id={mobileMenuId}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={isMobileMenuOpen}
                        onClose={handleMenuClose}
                        sx={{ width: '187px' }}
                        items={menuItems}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                />
                <Typography sx={{ mx: 2 }}>Hola, {customName()}</Typography>
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                />
                <Box sx={{ ml: 3 }}>
                    <IconButton
                        color="inherit"
                        aria-label="Logout"
                        component="label"
                        onClick={doLogout}
                    >
                        <LogoutIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
