import { Button } from '@mui/material'
import { useAuth } from '../../hooks/useAuth'

export const HomeAdmin = () => {
    const { logout } = useAuth()

    return (
        <div>
            <h1>HomeAdmin</h1>
            <Button onClick={logout}>Cerrar sesión</Button>
        </div>
    )
}
