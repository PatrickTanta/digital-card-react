import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TheAppbar } from '../components/ui/TheAppbar'
import LoginAdmin from '../pages/Admin/LoginAdmin'

interface Props {
    title?: string
}

export const AdminLayout: FC<Props> = ({ title }) => {
    const auth = null

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
