import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TheAppbar } from '../components/ui/TheAppbar'
import LoginAdmin from '../pages/Admin/LoginAdmin'
import { useAuth } from '../hooks'

interface Props {
    title?: string
}

export const AdminLayout: FC<Props> = ({ title }) => {
    const { auth } = useAuth()

    console.log('reload admin layut ', auth)

    if (!auth) return <LoginAdmin />

    return (
        <>
            <main>
                <TheAppbar title={title ?? ''} />
                <div>
                    <Outlet />
                </div>
            </main>
        </>
    )
}
