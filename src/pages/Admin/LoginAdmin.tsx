import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isEmail } from '../../utils'
import { AuthLayout } from '../../components/layouts/AuthLayout'
import { loginApi } from '../../api/user'
import { ILoginAdminFormData } from '../../interfaces'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks'
import { FC } from 'react'
import { redirect, Navigate } from 'react-router-dom'

export const LoginAdmin: FC = () => {
    const { auth, login } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ILoginAdminFormData>({
        mode: 'onChange'
    })
    const onLoginUser: SubmitHandler<ILoginAdminFormData> = async ({
        email,
        password
    }: ILoginAdminFormData) => {
        try {
            const { access } = await loginApi({ email, password })
            login(access)
            redirect('/admin/home')
        } catch (e) {
            toast.error(e.message)
        }
    }

    if (auth?.me) return <Navigate to="/admin/home" />

    return (
        <AuthLayout>
            <form onSubmit={handleSubmit(onLoginUser)} noValidate>
                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ my: 4 }}>
                            <Typography
                                variant="h5"
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                Iniciar Sesión Administrador
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Correo"
                                fullWidth
                                {...register('email', {
                                    required: 'Este campo es requerido',
                                    validate: isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                label="Contraseña"
                                fullWidth
                                type="password"
                                {...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: {
                                        value: 6,
                                        message: 'Mínimo 6 caracteres'
                                    }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>
                    </Grid>

                    <Box height={40} />

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            className="circular-btn"
                            size="large"
                            disabled={isSubmitting}
                            fullWidth
                        >
                            {!isSubmitting ? 'Ingresar' : 'Ingresando...'}
                        </Button>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}
