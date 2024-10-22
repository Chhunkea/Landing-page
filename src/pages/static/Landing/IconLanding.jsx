import * as React from 'react';
import { motion } from 'framer-motion';
import { Box, Grid, useTheme } from '@mui/material';
import RecyclePlant from '../../../assets/icons/first-flower.svg';
import EarthPlant from '../../../assets/icons/earth-plant.svg';
import GrowPlant from '../../../assets/icons/grow-plant.svg';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5, 
            delay: 0.3, 
        },
    },
};

const icons = [
    { id: 1, src: RecyclePlant, alt: 'Recycle Plant' },
    { id: 2, src: EarthPlant, alt: 'Earth Plant' },
    { id: 3, src: GrowPlant, alt: 'Grow Plant' },
];

function IconGrid() {
    const theme = useTheme();
    return (
        <Grid container justifyContent="center" sx={{gap: '24px'}}>
            {' '}
            {icons.map((icon) => (
                <Grid item key={icon.id} xs="auto">
                    <motion.div
                        className="icon-item"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: theme.shadow.shadow_sm,
                        }}
                    >
                        <Box
                            component="img"
                            src={icon.src}
                            alt={icon.alt}
                            sx={{ width: '70%', height: '70%' }}
                        />
                    </motion.div>
                </Grid>
            ))}
        </Grid>
    );
}

export default IconGrid;
