import { Skeleton, TextField } from '@mui/material'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { useUser } from '../../hooks'
import { useEffect, useState } from 'react'
import { TableUsers } from '../../components/admin/users/TableUsers'
import { BasicModal } from '../../components/common/BasicModal'
import { AddEditUserForm } from '../../components/admin/users/AddEditUserForm'

export const UsersAdmin = () => {
    const { loading, users, getUsers } = useUser()

    const [title, setTitle] = useState('')
    const [open, setOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const onAddUser = () => {
        setCurrentUser(null)
        setTitle('Nuevo usuario')
        setOpen(true)
        console.log('adduser')
    }
    const onEditUser = ({ params }) => {
        setCurrentUser(params.row)
        setTitle('Editar usuario')
        setOpen(true)
        console.log(params)
    }

    const [areYouSure, setAreYouSure] = useState(false)
    const onDeleteUser = ({ params }) => {
        setAreYouSure(true)
        console.log(params)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <HeaderPage
                title="Usuarios"
                btnTitle="Nuevo usuario"
                btnTitleTwo=""
                onSelectFirstBtn={onAddUser}
            />

            {/* create and edit user */}
            <BasicModal
                open={open}
                handleClose={() => setOpen(false)}
                title={title}
            >
                <AddEditUserForm
                    currentUser={currentUser}
                    onCancel={() => setOpen(false)}
                />
            </BasicModal>

            {/* delete user */}
            <BasicModal
                open={areYouSure}
                handleClose={() => setAreYouSure(false)}
                title={'Eliminar usuario'}
            />

            {loading ? (
                <>
                    <Skeleton style={{ height: '200px' }} />
                </>
            ) : (
                <TableUsers
                    users={users}
                    onDeleteUser={onDeleteUser}
                    onEditUser={onEditUser}
                />
            )}
        </div>
    )
}
