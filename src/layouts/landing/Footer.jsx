import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
    LogoAndCopyright,
    LearnMorelinks,
    Links,
    SocialLinks,
    ContactUs,
} from '../../data/footer';
import CustomLink from '../../components/CustomLink';

function Footer() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: {
                    xs: '48px 16px',
                    md: '48px 32px',
                    lg: '48px 56px',
                },
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                bgcolor: theme.palette.background,
            }}
        >
            {/* Main container for logo and text sections */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1280px',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: { xs: '24px', md: '48px' },
                }}
            >
                {/* Logo Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        width: { xs: '100%', md: '240px' },
                        alignItems: 'flex-start',
                    }}
                >
                    <Box
                        component="img"
                        src={LogoAndCopyright[0].Logo}
                        alt="Harvest Hub Logo"
                        sx={{
                            width: '157px',
                            height: '89px',
                        }}
                    />
                    <Typography
                        sx={{
                            color: theme.palette.gray.main,
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                        variant="bodySmall"
                    >
                        {LogoAndCopyright[1].copyright}
                    </Typography>
                </Box>

                {/* Learn More Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.black.tertiary,
                            fontWeight: 'bold',
                        }}
                        variant="titleMedium"
                    >
                        Learn More
                    </Typography>
                    {LearnMorelinks.map((data) => (
                        <CustomLink to={data.url} key={data.text}>
                            <Typography
                                sx={{
                                    color: theme.palette.gray.main,
                                }}
                                variant="bodySmall"
                            >
                                {data.text}
                            </Typography>
                        </CustomLink>
                    ))}
                </Box>

                {/* Get to Know Us Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.black.tertiary,
                            fontWeight: 'bold',
                        }}
                        variant="titleMedium"
                    >
                        Get to Know Us
                    </Typography>
                    {Links.map((data) => (
                        <CustomLink to={data.url} key={data.text}>
                            <Typography
                                sx={{
                                    color: theme.palette.gray.main,
                                }}
                                variant="bodySmall"
                            >
                                {data.text}
                            </Typography>
                        </CustomLink>
                    ))}
                </Box>

                {/* Get in Touch Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.black.tertiary,
                            fontWeight: 'bold',
                        }}
                        variant="titleMedium"
                    >
                        Get in Touch
                    </Typography>
                    <Box>
                        <Typography
                            sx={{
                                display: 'inline',
                                color: theme.palette.gray.main,
                            }}
                            variant="bodySmall"
                        >
                            "
                        </Typography>
                        <Typography
                            sx={{
                                display: 'inline',
                                color: theme.palette.green.tertiary,
                                paddingRight: '2px',
                            }}
                            variant="bodySmall"
                        >
                            [Harvest Hub]
                        </Typography>
                        <Typography
                            sx={{
                                display: 'inline',
                                color: theme.palette.gray.main,
                            }}
                            variant="bodySmall"
                        >
                            Connecting farmers and merchants for
                        </Typography>
                        <Typography
                            sx={{
                                display: 'inline',
                                color: theme.palette.green.tertiary,
                                paddingLeft: '2px',
                            }}
                            variant="bodySmall"
                        >
                            a sustainable future—one harvest at a time.
                        </Typography>
                        <Typography
                            sx={{
                                display: 'inline',
                                color: theme.palette.gray.main,
                            }}
                            variant="bodySmall"
                        >
                            "
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '8px',
                            marginTop: '8px',
                        }}
                    >
                        {SocialLinks.map((data) => (
                            <CustomLink
                                to={data.url}
                                key={data.platform}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={data.icon}
                                    alt={data.platform}
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </CustomLink>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Contact Us Section */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1280px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '24px',

                    // Change to row for medium (md) screens and larger
                    [theme.breakpoints.up('md')]: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.black.tertiary,
                            fontWeight: 'bold',
                        }}
                        variant="titleMedium"
                    >
                        Contact Us
                    </Typography>

                    {ContactUs.map((data) => (
                        <Box
                            key={data.text}
                            sx={{
                                display: 'flex',
                                gap: '12px', // Space between icon and text
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={data.icon}
                                alt={data.text}
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                }}
                            />
                            <Typography
                                sx={{ color: theme.palette.gray.main }}
                                variant="bodySmall"
                            >
                                {data.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
