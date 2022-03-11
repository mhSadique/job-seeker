import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../components/Logo/Logo';
import { useHistory } from "react-router-dom";

const NavigationBar = () => {
    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    console.log(user, 'NAVIGATION');

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Logo />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {!user.role && <Box>
                                <MenuItem key={"employer-login"}
                                    onClick={() => {
                                        history.push('/employer-login');
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography textAlign="center">Login as Employer</Typography>
                                </MenuItem>

                                <MenuItem key={"jobseeker-login"}
                                    onClick={() => {
                                        history.push('/jobseeker-login');
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography textAlign="center">Login as Job Seeker</Typography>
                                </MenuItem>
                                <MenuItem key={"employer-create-account"}
                                    onClick={() => {
                                        history.push('/employer-create-account');
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography textAlign="center">Sign Up as Employer</Typography>
                                </MenuItem>
                                <MenuItem key={"job-seeker-create-account"}
                                    onClick={() => {
                                        history.push('/job-seeker-create-account');
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography textAlign="center">Sign Up as Job Seeker</Typography>
                                </MenuItem>
                            </Box>}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Logo />
                    </Typography>
                    {!user.role && <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={"Homepage"}
                            onClick={() => {
                                history.push('/employer-login');
                                handleCloseNavMenu();
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Login as Employer
                        </Button>
                        <Button
                            key={"Homepage"}
                            onClick={() => {
                                history.push('/jobseeker-login');
                                handleCloseNavMenu();
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Login as Job Seeker
                        </Button>
                        <Button
                            key={"Sign up as employer"}
                            onClick={() => {
                                history.push('/employer-create-account');
                                handleCloseNavMenu();
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sign Up as Employer
                        </Button>
                        <Button
                            key={"Sign up as Job Seeker"}
                            onClick={() => {
                                history.push('/job-seeker-create-account');
                                handleCloseNavMenu();
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sign Up as Job Seeker
                        </Button>
                    </Box>}

                    <Box sx={{ flexGrow: 0 }}>
                        {user.role && <Tooltip title="Dashboard">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user.firstName} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* See all the jobs that was applied to you */}
                            {user.role === 'employer'
                                ? <Box>
                                    <MenuItem key={"job-seeker-create-account"} onClick={() => {
                                        handleCloseUserMenu();
                                        history.push('/employer-dashboard');
                                    }}>
                                        <Typography textAlign="center">Jobs applied to me</Typography>
                                    </MenuItem>
                                    {/* Create a job an employer */}
                                    <MenuItem key={"create-job"} onClick={() => {
                                        handleCloseUserMenu();
                                        history.push('/create-job');
                                    }}>
                                        <Typography textAlign="center">Create a Job</Typography>
                                    </MenuItem>
                                    <MenuItem key={"logout"} onClick={() => {
                                        handleCloseUserMenu();
                                        dispatch({ type: 'userFound', payload: {} });
                                        localStorage.clear();
                                        history.push('/');
                                    }}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Box>
                                : <Box>
                                    <MenuItem key={"logout"} onClick={() => {
                                        handleCloseUserMenu();
                                        dispatch({ type: 'userFound', payload: {} });
                                        localStorage.clear();
                                        history.push('/');
                                    }}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Box>}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavigationBar;