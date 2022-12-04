import * as React from 'react';

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';

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
                Focus Time
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const auth = getAuth(firebaseApp);
const theme = createTheme();

export default function SignUp() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [submitting, setSubmitting] = React.useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmail(event.currentTarget.email.value);
        setPassword(event.currentTarget.password.value);
        setSubmitting(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {})
            .finally(() => setSubmitting(false));
    };

    return (
        <ThemeProvider theme={theme}>
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
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            loading={submitting}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </LoadingButton>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link
                                    component={RouterLink}
                                    to="/login"
                                    variant="body2"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
