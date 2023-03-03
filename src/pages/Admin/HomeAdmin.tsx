import { Button } from '@mui/material'
import { useAuth } from '../../hooks/useAuth'

const HomeAdmin: JSX.Element = () => {
    const { logout } = useAuth()

    return (
        <div>
            <h1>HomeAdmin</h1>
            <Button onClick={logout}>Cerrar sesión</Button>
        </div>
    )
}

export default HomeAdmin
