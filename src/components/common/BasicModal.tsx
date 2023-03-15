import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import { FC, ReactNode } from 'react'

interface Props {
    open: boolean
    handleClose: () => void
    title: string
    children?: ReactNode
}

export const BasicModal: FC<Props> = ({
    open,
    handleClose,
    title,
    children
}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
}
