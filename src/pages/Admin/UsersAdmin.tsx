import { Skeleton } from '@mui/material'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { useUser } from '../../hooks'
import { useEffect } from 'react'

export const UsersAdmin = () => {
    const { loading, users, getUsers } = useUser()
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <HeaderPage
                title="Users"
                btnTitle="Nuevo usuario"
                btnTitleTwo="Nuevo usuario"
            />
            {loading ? (
                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>
            ) : (
                <ul>
                    {users?.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
