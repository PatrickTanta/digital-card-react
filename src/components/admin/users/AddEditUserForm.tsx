import { TextField, Checkbox, Button, FormControlLabel } from '@mui/material'
import { useState, FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../interfaces'
import { isEmail } from '../../../utils'
import Box from '@mui/material/Box'

interface Props {
    currentUser?: IUser | null
    onCancel: () => void
}

export const AddEditUserForm: FC<Props> = ({ currentUser, onCancel }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<IUser>({
        mode: 'onChange',
        defaultValues: currentUser
    })

    const onSaveUser = (data: IUser) => {
        try {
            console.log('register ', register)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        console.log('currentUser: ', currentUser)
        return () => {}
    }, [])

    return (
        <form
            onSubmit={handleSubmit(onSaveUser)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                padding: 4,
                width: 320
            }}
        >
            <TextField
                label="Nombre de usuario"
                id="name"
                fullWidth
                error={errors?.username}
                helperText={errors?.username?.message}
                {...register('username', {
                    required: 'Este campo es requerido'
                })}
            />

            <TextField
                label="Correo"
                id="email"
                error={!!errors.email}
                helperText={errors?.email?.message}
                fullWidth
                {...register('email', {
                    required: 'Este campo es requerido',
                    validate: isEmail
                })}
            />

            <TextField
                label="Nombre"
                id="first_name"
                error={!!errors.first_name}
                helperText={errors?.first_name?.message}
                fullWidth
                {...register('first_name', {
                    required: 'Este campo es requerido'
                })}
            />

            <TextField
                label="Apellido"
                id="lastname"
                type="text"
                helperText={errors?.last_name?.message}
                error={!!errors.last_name}
                fullWidth
                {...register('last_name', {
                    required: 'Este campo es requerido'
                })}
            />

            <TextField
                label="Contraseña"
                id="password"
                type="password"
                helperText={errors?.password?.message}
                error={!!errors.password}
                fullWidth
                {...register('password', {
                    required: 'Este campo es requerido'
                })}
            />

            <div style={{ width: '100%' }}>
                <Checkbox
                    {...register('is_active', {
                        required: 'Este campo es requerido'
                    })}
                    defaultChecked={currentUser?.is_active}
                />
                Usuario Activo
            </div>

            <div style={{ width: '100%' }}>
                <Checkbox
                    {...register('is_staff', {
                        required: 'Este campo es requerido'
                    })}
                    defaultChecked={currentUser?.is_staff}
                />
                Usuario Administrador
            </div>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 3, gap: 4 }}
            >
                <Button variant="outlined" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained">
                    {isSubmitting ? 'Guardando...' : 'Guardar'}
                </Button>
            </Box>
        </form>
    )
}
