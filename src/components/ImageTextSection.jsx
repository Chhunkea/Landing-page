import React, { useEffect, useRef } from 'react';
import {
    Box,
    Grid,
    Typography,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import landingPageData from '../data/imageText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ImageTextSection() {
    const theme = useTheme();
    const textRefs = useRef([]);

    useEffect(() => {
        textRefs.current.forEach((text, index) => {
            gsap.fromTo(
                text,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: text,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <Box>
            {landingPageData.sections.map((section, index) => (
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    sx={{ marginTop: index > 0 ? '48px' : '0' }}
                    key={index}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        // Image on right for even, on left for odd indexes
                        order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}
                    >
                        <CardMedia
                            component="img"
                            image={section.imageUrl}
                            alt={section.title}
                            sx={{ borderRadius: '16px', boxShadow: 0 }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        // Text on left for even, on right for odd indexes
                        order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}
                    >
                        {/* Title and description */}
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                typography={{
                                    xs: 'titleMedium',
                                    sm: 'titleLarge',
                                    md: 'headlineMedium',
                                }}
                                sx={{ color: theme.palette.green.main }}
                            >
                                {section.title}
                            </Typography>
                            <Typography
                                typography={{
                                    xs: 'bodyMedium',
                                    md: 'bodyLarge',
                                }}
                                sx={{
                                    marginTop: '12px',
                                    marginBottom: '16px',
                                }}
                            >
                                {section.description}
                            </Typography>
                        </Box>

                        {/* Check box feature */}
                        {section.features && (
                            <List>
                                {section.features.map((feature, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <CheckIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={feature}
                                            primaryTypographyProps={{
                                                typography: {
                                                    xs: 'bodyMedium',
                                                    md: 'bodyLarge',
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
}

export default ImageTextSection;
