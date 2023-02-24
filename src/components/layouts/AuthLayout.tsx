import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface Props {
    children: ReactNode
}

export const AuthLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <main
                style={{
                    backgroundColor: '#2a2a72',
                    backgroundImage:
                        'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
                    minHeight: '100vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        background: '#FFF',
                        borderRadius: '10px',
                        padding: '20px 20px 40px 20px',
                        boxShadow: '0 0 20px 10px rgba(0,0,0,0.3)',
                        webkitboxShadow: '0 0 20px 10px rgba(0,0,0,0.3)',
                        mozboxShadow: '0 0 20px 10px rgba(0,0,0,0.3)',
                        width: '370px'
                    }}
                >
                    {children}
                </Box>
            </main>
        </>
    )
}
