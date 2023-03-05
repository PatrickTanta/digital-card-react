import { Button } from '@mui/material'
import { useAuth } from '../../hooks/useAuth'
import { FC, useEffect } from 'react'

export const HomeAdmin: FC = () => {
    const { logout } = useAuth()

    useEffect(() => {
        return () => console.log('Unmount HomeAdmin')
    }, [])

    return (
        <div>
            <h1>HomeAdmin</h1>
            <Button onClick={logout}>Cerrar sesión</Button>
        </div>
    )
}
