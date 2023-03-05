import { Box, Button } from '@mui/material'
import { FC } from 'react'

interface Props {
    title: string
    btnTitle?: string
    btnTitleTwo?: string
}

export const HeaderPage: FC<Props> = ({ title, btnTitle, btnTitleTwo }) => {
    return (
        <Box
            sx={{}}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <h1>{title}</h1>
            <Box display="flex" sx={{ gap: 1 }}>
                {btnTitle && <Button variant="contained">{btnTitle}</Button>}
                {btnTitleTwo && (
                    <Button variant="contained">{btnTitleTwo}</Button>
                )}
            </Box>
        </Box>
    )
}
