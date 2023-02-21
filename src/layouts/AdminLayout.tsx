import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

export const AdminLayout: FC = () => {
    return (
        <div>
            <p>AdminLayout</p>
            <Outlet />
        </div>
    )
}
