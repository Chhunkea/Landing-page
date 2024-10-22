import { useState } from 'react';
import React from 'react';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionData from '../data/accordion';

function AccordionComponent({ sx }) {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ ...sx }}>
            <Box sx={{ marginBottom: '12px' }}>
                <Typography
                    variant="headlineSmall"
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.green.main,
                    }}
                >
                    ☘️ FAQs Us
                </Typography>
            </Box>

            {/* Introductory Text */}
            <Box sx={{ marginBottom: '16px' }}>
                <Typography variant="bodyLarge">
                    Whether you're a{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: theme.palette.green.tertiary,
                        }}
                    >
                        buyer
                    </Typography>{' '}
                    or a{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: theme.palette.green.tertiary,
                        }}
                    >
                        seller
                    </Typography>
                    , we've compiled a list of{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: theme.palette.green.tertiary,
                        }}
                    >
                        frequently asked questions
                    </Typography>{' '}
                    to make your experience smooth and hassle-free.
                </Typography>
            </Box>

            {/* Accordion */}
            {AccordionData.map((data, index) => (
                <Box
                    key={index}
                    sx={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '12px',
                        boxShadow: theme.shadow.shadow_sm,
                    }}
                >
                    <Accordion
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        sx={{
                            backgroundColor: theme.palette.background,
                            '&:before': { display: 'none' },
                        }}
                    >
                        {/* Question section */}
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    sx={{ color: theme.palette.green.tertiary }}
                                />
                            }
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                padding: '12px 16px',
                                '& .MuiAccordionSummary-content': {
                                    display: 'flex',
                                    alignItems: 'start',
                                    margin: '0px',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.palette.green.tertiary,
                                }}
                            >
                                {data.number}
                            </Typography>
                            <Typography sx={{ marginLeft: '8px' }}>
                                {data.question}
                            </Typography>
                        </AccordionSummary>

                        {/* Answer section */}
                        <AccordionDetails
                            sx={{
                                padding: '0px 16px 12px 16px',
                            }}
                        >
                            <Typography>{data.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </Box>
    );
}

export default AccordionComponent;
