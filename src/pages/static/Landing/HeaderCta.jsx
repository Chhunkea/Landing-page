import { Box, Typography, Container, useTheme } from '@mui/material';
import LandingPagePicture from '../../../assets/images/landing-pic.svg';
import CustomButton from '../../../components/CustomButton';
import { Link } from 'react-router-dom';
import React from 'react';

function HeaderCta () {
    const theme = useTheme();
    const headerHeightXs = '56px';
    const headerHeightSm = '72px';

    return (
        <Box sx={{ marginTop: { xs: headerHeightXs, sm: headerHeightSm } }}>
            <Box
                sx={{
                    textAlign: 'center',
                    position: 'relative',
                    width: '100%',
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: { xs: '100px', md: '150px' },
                    backgroundImage: `url(${LandingPagePicture})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Container sx={{ zIndex: '2' }}>
                    {/* Title */}
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            color: theme.palette.white.main,
                            fontSize: { xs: 28, md: 40 },
                            fontWeight: 'bold',
                            letterSpacing: '5px',
                            textTransform: 'uppercase',
                            background:
                                'linear-gradient(45deg, #FF9800, #FFC107, #FFEB3B, #4CAF50)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'colorShift 10s ease infinite',
                            '@keyframes colorShift': {
                                '0%': { backgroundPosition: '0% 50%' },
                                '50%': { backgroundPosition: '100% 50%' },
                                '100%': { backgroundPosition: '0% 50%' },
                            },
                        }}
                    >
                        Empowering Farmers, Feeding Communities
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="bodyLarge"
                        gutterBottom
                        sx={{
                            color: theme.palette.white.main,
                        }}
                    >
                        Buy Direct, Support Local—A Marketplace for All.
                    </Typography>

                    {/* Button */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '8px',
                            justifyContent: 'center',
                            marginTop: '24px', // Increased margin to move buttons slightly down
                        }}
                    >
                        <Link to="/">
                            <CustomButton
                                textStyle="button"
                                fixedWidth={150}
                                white
                            >
                                Browse
                            </CustomButton>
                        </Link>

                        <Link to="/sign-up">
                            <CustomButton
                                greenTertiary
                                textStyle="button"
                                fixedWidth={150}
                            >
                                Log in
                            </CustomButton>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default HeaderCta;
