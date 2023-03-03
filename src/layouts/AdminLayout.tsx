import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TheAppbar } from '../components/ui/TheAppbar'
import { useAuth } from '../hooks'
import { SideMenu } from '../components/ui/SideMenu'
import { redirect } from 'react-router-dom'

interface Props {
    title?: string
}

export const AdminLayout: FC<Props> = ({ title }) => {
    const { auth } = useAuth()

    if (!auth) return redirect('/admin/login')
    return (
        <>
            <main>
                <SideMenu />
                <TheAppbar title={title ?? ''} />
                <div>
                    <Outlet />
                </div>
            </main>
        </>
    )
}
