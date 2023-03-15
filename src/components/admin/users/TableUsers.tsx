import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { IUser } from '../../../interfaces/user'
import { FC, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { Checkbox, Grid } from '@mui/material'
import './styles.css'
import EditIcon from '@mui/icons-material/Edit'

interface Props {
    users: IUser[]
    onDeleteUser: ({ params }: any) => void
    onEditUser: ({ params }: any) => void
}

export const TableUsers: FC<Props> = ({ users, onDeleteUser, onEditUser }) => {
    // const [pageSize, setPageSize] = useState<number>(10)
    const columns: GridColDef[] = [
        {
            field: 'username',
            headerName: 'Usuario',
            flex: 1,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'email',
            headerName: 'Correo',
            flex: 1,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'first_name',
            headerName: 'Nombre',
            flex: 1,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'last_name',
            headerName: 'Apellido',
            flex: 1,
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'is_active',
            headerName: 'Activo',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params: GridRenderCellParams) => {
                const { value } = params
                return (
                    <Checkbox
                        disabled
                        checked={value}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                )
            }
        },
        {
            field: 'is_staff',
            headerName: 'Staff',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params: GridRenderCellParams) => {
                const { value } = params
                return (
                    <Checkbox
                        disabled
                        checked={value}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                )
            }
        },
        {
            field: 'actions',
            headerName: 'Acciones',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params: GridRenderCellParams) => {
                return (
                    <div>
                        <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={() => onDeleteUser({ params })}
                        >
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={() => onEditUser({ params })}
                        >
                            <EditIcon />
                        </IconButton>
                    </div>
                )
            }
        }
    ]

    return (
        <Grid container>
            <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                {users ? (
                    <DataGrid
                        rows={users}
                        columns={columns}
                        disableRowSelectionOnClick
                        autoHeight
                    />
                ) : (
                    <p>No hay usuarios</p>
                )}
            </Grid>
        </Grid>
    )
}
