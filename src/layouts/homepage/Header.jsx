import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from '../../assets/icons/HarvestHub-Logo.svg';
import { useTheme } from '@mui/material/styles';
import CustomButton from '../../components/CustomButton';

function Header({ navbarGuest }) {
    const theme = useTheme();

    return (
        <AppBar
            sx={{
                bgcolor: theme.palette.white.main,
                boxShadow: theme.shadow.shadow_nav,
                width: '100%',
                position: 'fixed',
                zIndex: 10000,
            }}
        >
            <Toolbar
                sx={{
                    padding: {
                        xs: '12px 16px !important',
                        sm: '12px 32px 14px !important',
                        md: '12px 32px!important',
                    },
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    component="img"
                    src={Logo}
                    alt="Logo"
                    sx={{
                        height: { xs: '32px', sm: '48px', md: '48px' },
                    }}
                />
                {navbarGuest ? (
                    <CustomButton
                        textStyle={{ xs: 'labelMedium', sm: 'labelLarge' }}
                        small
                        greenTertiary
                    >
                        SIGN UP
                    </CustomButton>
                ) : null}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
