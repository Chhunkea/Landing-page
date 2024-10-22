import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, Typography, IconButton, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import SliderData from '../data/slider';

const SliderLanding = ({sx}) => {
    const theme = useTheme();
    const NextArrow = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            style={{
                position: 'absolute',
                top: '50%',
                right: '-40px',
                zIndex: 1,
            }}
        >
            <ArrowForwardIos />
        </IconButton>
    );

    const PrevArrow = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            style={{
                position: 'absolute',
                top: '50%',
                left: '-40px',
                zIndex: 1,
            }}
        >
            <ArrowBackIos />
        </IconButton>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box sx={{...sx}}>
            <Box
                sx={{
                    width: '80%',
                    margin: '0 auto',
                    paddingTop: '50px',
                    position: 'relative',
                    backgroundColor: theme.palette.white.main,
                }}
            >
                {/* Title */}
                <Typography
                    align="center"
                    sx={{
                        typography: {
                            xs: 'headlineSmall',
                            md: 'headlineLarge',
                        },
                         fontWeight: 'bold',
                    }}
                >
                    {SliderData.title}
                </Typography>

                <Slider {...settings}>
                    {SliderData.services.map((service, index) => (
                        <Card
                            key={index}
                            sx={{
                                textAlign: 'center',
                                padding: '16px',
                                borderRadius: '16px',
                                boxShadow: 0,
                                position: 'relative',
                            }}
                        >
                            {/* Image Section */}
                            <Box
                                component="img"
                                src={service.imageUrl}
                                alt={service.title}
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '16px 16px 0 0',
                                    objectFit: 'cover',
                                }}
                            />

                            {/* Icon Section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    variant="headlineLarge"
                                    sx={{
                                        backgroundColor: theme.palette.white.main,
                                        borderRadius: '50%',
                                        padding: '10px',
                                        width: {
                                            xs: '50px',
                                            sm: '60px',
                                            md: '80px',
                                        },
                                        height: {
                                            xs: '50px',
                                            sm: '60px',
                                            md: '80px',
                                        },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        zIndex: 1,
                                        marginTop: '-30px',
                                    }}
                                >
                                    {service.icon}
                                </Typography>

                                {/* Content Section */}
                                <CardContent
                                    sx={{
                                        paddingTop: { xs: '30px', md: '50px' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography variant="titleLarge" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="bodyMedium"
                                        color="text.secondary"
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default SliderLanding;
