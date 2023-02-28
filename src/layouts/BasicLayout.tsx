import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Outlet } from 'react-router'

interface Props {
    title: string
    children: ReactNode
}

export const BasicLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <Outlet />
            </main>
        </>
    )
}
