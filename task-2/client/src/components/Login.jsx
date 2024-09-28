import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import ErrorIcon from '@mui/icons-material/Error';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useCookies } from 'react-cookie'; // Import useCookies from react-cookie
import { useTheme } from './Themecontext';

const ErrorMessage = ({ children }) => (
    <Typography variant="caption" color="error">
        <ErrorIcon style={{ marginRight: "5px", fontSize: '15px' }} />
        {children}
    </Typography>
);

export default function Login() {
    const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const { mode } = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [, setCookie] = useCookies(['token']);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/users/signin`, values);
            console.log(response)
            if (response.data.statuscode === 200 && response.data.message === "Login SuccessFully") {
                toast.success(response.data.message);

                const expires = new Date();
                expires.setDate(expires.getDate() + 1);
                setCookie('accessToken', response.data.accessToken, { path: '/', expires });
                navigate('/profile');
            } else {
                console.log(response.data);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404 && error.response.data.message === "User does not exist") {
                    return toast.error(error.response.data.message);
                } else if (error.response.status === 401 && error.response.data.message === "Invalid User credentials") {
                    return toast.error(error.response.data.message);
                }
                else if (error.response.status === 400 && error.response.data.message === "This account is registered with Google. Please sign in using Google.") {
                    return toast.error(error.response.data.message);
                }
                else {
                    return toast.error("An unexpected error occurred.");
                }
            } else {
                return toast.error("Network error or server not reachable.");
            }
        } finally {
            setLoading(false);
        }
    };

    // Handle Google Login
    const handleGoogleSuccess = async (response) => {
        setLoading(true);
        try {
            const googleToken = response.credential;
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/users/google-signin`, { token: googleToken });

            if (res.data.statuscode === 200 && res.data.message === "Login successfully via Google") {
                toast.success(res.data.message);
                const expires = new Date();
                expires.setDate(expires.getDate() + 1);
                setCookie('accessToken', res.data.accessToken, { path: '/', expires });
                navigate('/profile');
            }
        } catch (error) {
            console.log(error);
            toast.error("Google login failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleFailure = (error) => {
        console.log('Google Login Failed', error);
        toast.error('Google login failed.');
    };

    return (
        <GoogleOAuthProvider clientId={client_id}>
            <Grid container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} sx={{ borderRadius: 4 }}>
                    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Sign in</Typography>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={LoginSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field
                                        margin="normal"
                                        as={TextField}
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        error={errors.email && touched.email}
                                        helperText={errors.email && touched.email ? <ErrorMessage children={errors.email} /> : null}
                                    />
                                    <Field
                                        margin="normal"
                                        as={TextField}
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        autoComplete="current-password"
                                        error={errors.password && touched.password}
                                        helperText={errors.password && touched.password ? <ErrorMessage children={errors.password} /> : null}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleTogglePasswordVisibility}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {loading ? (
                                        <LoadingButton fullWidth sx={{ mt: 3, mb: 2 }} loading variant="contained">
                                            Submit
                                        </LoadingButton>
                                    ) : (
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            disabled={loading}
                                        >
                                            Sign In
                                        </Button>
                                    )}
                                </Form>
                            )}
                        </Formik>

                        <Box sx={{ mt: 1 }}>
                            <GoogleLogin
                                clientId={client_id}
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleFailure}
                                shape='pill'
                                size='large'
                                theme={mode === 'dark' ? 'filled_black' : 'outline'}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </GoogleOAuthProvider>
    );
}
