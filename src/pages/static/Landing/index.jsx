import StandardContainer from '../../../components/styles/StandardContainer';
import { Box } from '@mui/material';
import HeaderCta from './HeaderCta';
import IconLanding from './IconLanding';
import ImageText from '../../../components/ImageTextSection';
import Slider from '../../../components/SliderLanding';
import Accordion from '../../../components/Accordion';
import React from 'react';

function LandingPage() {
    return (
        <Box>
            <HeaderCta />
            <StandardContainer>
                <IconLanding sx={{ marginBottom: {xs:'30px', md: '50px'} }} />
                <ImageText />
                <Slider sx={{ marginTop: '50px' }} />
                <Accordion sx={{ marginTop: '64px' }} />
            </StandardContainer>
        </Box>
    );
}

export default LandingPage;
