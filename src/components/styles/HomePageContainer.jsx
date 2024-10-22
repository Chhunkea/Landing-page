import { Box } from '@mui/material';
import React from 'react';

/**
 * HomePageContainer component wraps its children with a styled container.
 * It provides a maximum width of 1200px and responsive padding for different screen sizes.
 * The container is centered horizontally within the viewport and takes full width.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the container.
 * @param {object} props.sx - Additional styles to be applied.
 * @param {string} props.bgColor - Background color of the container.
 *
 * @returns {JSX.Element} - The rendered HomePageContainer component.
 */
function HomePageContainer({ children, bgColor, community, sx }) {
    const headerHeightXs = '56px';
    const headerHeightSm = '72px';

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: {
                    xs: `calc(100vh - ${headerHeightXs})`,
                    sm: `calc(100vh - ${headerHeightSm})`,
                },
                backgroundColor: bgColor,
                marginTop: { xs: headerHeightXs, sm: headerHeightSm },
                ...sx,
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    m: 'auto',
                    p: { xs: '16px', sm: '24px', md: '32px' },
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default HomePageContainer;
