import {
    Box,
    Typography,
} from "@mui/material";

// Import footer data
import { LogoAndCopyright, LearnMorelinks, Links, SocialLinks, ContactUs } from "../../data/footer";

// Import custom link component
import CustomLink from "../../components/CustomLink";
import { useTheme } from '@mui/material/styles';

function Footer() {
    const theme = useTheme(); // Get theme from MUI

    return (
        <>
            {/* Main container for the footer */}
            <Box
                sx={{
                    padding: {
                        xs: '48px 16px',
                        md: '24px 32px', 
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
                {/* Container for logo and navigation sections */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        maxWidth: '1280px', 
                        justifyContent: 'center', 
                        flexDirection: { xs: 'column', md: 'row' }, 
                        gap: { xs: '24px', sm: '32px', md: '48px' }, 
                    }}
                >
                    {/* Logo and copyright section */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px', 
                            width: '240px', 
                        }}
                    >
                        <Box
                            component="img"
                            src={LogoAndCopyright[0].Logo} // Logo image source
                            sx={{
                                width: '157px', 
                                height: '89px', 
                            }}
                        />
                        <Typography
                            sx={{
                                color: theme.palette.gray.main, 
                            }}
                            variant="bodySmall" 
                        >
                            {LogoAndCopyright[1].copyright} 
                        </Typography>
                    </Box>
                    {/* Navigation sections: Learn More, Get to Know Us, and Get in Touch */}
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: { xs: 'column', md: 'row' }, 
                                gap: { xs: '24px', md: '0px' }, 
                            }}
                        >
                            {/* Learn More section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px', 
                                    width: '100%', 
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: theme.palette.black.tertiary, 
                                    }}
                                    variant="titleMedium"
                                >
                                    Learn More
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px', 
                                    }}
                                >
                                    {LearnMorelinks.map((data) => (
                                        <CustomLink
                                            to={data.url} 
                                            key={data.text} 
                                        >
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
                            </Box>
                            {/* Get to Know Us section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px', 
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: theme.palette.black.tertiary, 
                                    }}
                                    variant="titleMedium" 
                                >
                                    Get to Know Us
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px', 
                                    }}
                                >
                                    {Links.map((data) => (
                                        <CustomLink
                                            to={data.url} 
                                            key={data.text} 
                                        >
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
                            </Box>
                            {/* Get in Touch section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px', 
                                    width: '100%', 
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: theme.palette.black.tertiary,
                                    }}
                                    variant="titleMedium"
                                >
                                    Get in Touch
                                </Typography>
                                <Box
                                    sx={{
                                        color: theme.palette.gray.main, 
                                        width: '100%', 
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: theme.palette.gray.main, 
                                        }}
                                        variant="bodySmall"
                                    >
                                        "
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: theme.palette.green.tertiary, 
                                            paddingRight: '2px', 
                                        }}
                                        variant="bodySmall"
                                    >
                                        [Harvest Hub]
                                    </Typography>
                                    <Typography variant="bodySmall">
                                        Connecting farmers and merchants for
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: theme.palette.green.tertiary, 
                                            paddingLeft: '2px', 
                                        }}
                                        variant="bodySmall"
                                    >
                                        a sustainable future—one harvest at a time.
                                    </Typography>
                                    <Typography
                                        sx={{
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
                    </Box>
                </Box>

                {/* Contact Us section */}
                <Box
                    sx={{
                        width: '100%', 
                        maxWidth: '1280px', 
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px', 
                            width: '100%',
                            maxWidth: '1280px', 
                        }}
                    >
                        <Typography
                            sx={{
                                color: theme.palette.black.tertiary,
                            }}
                            variant="titleMedium" 
                        >
                            Contact Us
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px', 
                            }}
                        >
                            {ContactUs.map((data) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '12px', // Gap between icon and text
                                        alignItems: 'center', // Center align items vertically
                                    }}
                                    key={data.text} 
                                >
                                    <Box
                                        component="img"
                                        src={data.icon} 
                                        alt={data.text} 
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
            </Box>
        </>
    );
}

export default Footer;
