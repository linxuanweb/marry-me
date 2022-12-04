import * as React from 'react'
import {
    Link,
    Grid,
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    CssBaseline,
    Snackbar,
    Typography,
    Container,
    Avatar,
    Alert as MuiAlert,
} from '@mui/material'

import LoadingButton from '@mui/lab/LoadingButton'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import firebaseApp from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(firebaseApp)

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://focustime.online/">
                FocusTime
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme()

export default function SignIn() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [submitting, setSubmitting] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEmail(event.currentTarget.email.value)
        setPassword(event.currentTarget.password.value)
        setSubmitting(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                setOpen(true)
            })
            .finally(() => setSubmitting(false))
    }

    const handleClose = () => setOpen(false)

    return (
        <ThemeProvider theme={theme}>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MuiAlert elevation={6} variant="filled" severity="error">
                    Invalid email or password
                </MuiAlert>
            </Snackbar>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        登录
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="邮箱"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="密码"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="记住我"
                        />
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            loading={submitting}
                        >
                            登录
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    忘记密码？
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {'没有账号? 注册'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}
