import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#19191D'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        }
    }
})
