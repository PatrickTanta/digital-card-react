import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const ClientLayout: FC = () => {
    return (
        <div>
            <p>ClientLayout</p>
            <Outlet />
        </div>
    )
}
