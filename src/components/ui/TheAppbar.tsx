import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MoreIcon from '@mui/icons-material/MoreVert'
import LogoutIcon from '@mui/icons-material/Logout'
import Button from '@mui/material/Button'
import { Divider, Typography } from '@mui/material'
import { useState, FC } from 'react'
import { TheAppbarMenu } from './TheAppbarMenu'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useUi } from '../../hooks/useUi'

export const TheAppbar: FC<{ title: string }> = ({ title }) => {
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const [moreAnchorEl, setMoreAnchorEl] = useState(null)
    const isMobileMenuOpen = Boolean(moreAnchorEl)
    // const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setMoreAnchorEl(event.currentTarget)
    // }
    const handleMenuClose = () => {
        setMoreAnchorEl(null)
    }

    const menuItems = [{ item: 'About', path: '/about' }]

    const { auth, logout } = useAuth()

    const customName = () => {
        if (auth.me?.first_name && auth.me?.last_name) {
            return `${auth.me?.first_name} ${auth.me?.last_name}`
        }
        return auth.me?.email
    }

    const { toggleSideMenu, isMenuOpen } = useUi()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ overflow: 'hidden' }}>
                <Toolbar variant="dense">
                    <h1>{title}</h1>
                    <Button
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
                                sx={{ color: '#FFF' }}
                            >
                                KAPA
                            </Typography>
                        </NavLink>
                    </Button>
                    <IconButton onClick={toggleSideMenu}>
                        <MoreIcon />
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
                        {/* <Button
                            variant="text"
                            color="secondary"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                height: '34px'
                            }}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'selected' : ''
                                }
                                style={{ textDecoration: 'none' }}
                                to="/"
                            >
                                <Typography
                                    textAlign="center"
                                    fontWeight={700}
                                    sx={{ color: '#FFF' }}
                                >
                                    Games
                                </Typography>
                            </NavLink>
                        </Button>
                        <Button
                            variant="text"
                            color="secondary"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                height: '34px'
                            }}
                        >
                            <NavLink
                                to="/shop"
                                style={{ textDecoration: 'none' }}
                                className={({ isActive }) =>
                                    isActive ? 'selected' : ''
                                }
                            >
                                <Typography
                                    textAlign="center"
                                    fontWeight={700}
                                    sx={{ color: '#FFF' }}
                                >
                                    Shop
                                </Typography>
                            </NavLink>
                        </Button> */}
                        {/* <IconButton
                            size="small"
                            color="inherit"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            sx={{ width: '32px' }}
                            onClick={handleMenuOpen}
                        >
                            <MoreIcon sx={{ margin: 0 }} />
                        </IconButton> */}
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
                            color="white"
                            aria-label="Logout"
                            component="label"
                            onClick={logout}
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
