import { alpha, createTheme } from '@mui/material/styles';
import './fonts/index.css';

// Define general styles for the theme
const generalStyles = {
    typography: {
        displayLarge: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '57px',
            lineHeight: '64px',
            letterSpacing: '-0.25px',
        },
        displayMedium: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '45px',
            lineHeight: '52px',
            letterSpacing: 0,
        },
        displaySmall: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '44px',
            letterSpacing: 0,
        },
        headlineLarge: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '40px',
            letterSpacing: 0,
        },
        headlineMedium: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '28px',
            lineHeight: '36px',
            letterSpacing: '0.01em',
        },
        headlineSmall: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: 0,
        },
        titleLarge: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '28px',
            letterSpacing: 0,
        },
        titleMedium: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
        },
        titleSmall: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.1px',
        },
        bodyLarge: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.5px',
        },
        bodyBold: {
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.5px',
        },
        bodyMediumSemiBold: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.25px',
        },
        bodyMedium: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.25px',
        },
        bodySmall: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0.4px',
        },
        bodySmallBold: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0.4px',
        },
        labelLarge: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.1px',
        },
        labelMedium: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0.5px',
        },
        labelSmall: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '11px',
            lineHeight: '16px',
            letterSpacing: '0.5px',
        },
    },
};

// Create theme based on mode
export const customTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 428,
            md: 768,
            lg: 1280,
            xl: 1920,
        },
    },
    ...generalStyles,
    palette: {
        green: {
            main: '#255946',
            secondary: '#55895F',
            tertiary: '#49A760',
        },
        blue: {
            main: '#0066FF',
            secondary: '#008DFF',
            tertiary: '#00A6FF',
        },
        red: {
            main: '#DC1414',
            secondary: '#DC143C',
            tertiary: '#FF6873',
            quaternary: '#FF6873',
        },
        textFields: {
            hover: alpha('#3C3C43', 0.23),
            active: alpha('#3C3C43', 0.12),
            outline: alpha('#3C3C43', 0.69),
            hoverLight: alpha('#3C3C43', 0.08),
        },
        black: {
            main: '#000000',
            secondary: '#1F1F1F',
            tertiary: '#303030',
        },
        onSurface: '#1D1B20',
        onSurfaceVariant: '#49454F',
        schemesOutline: '#79747E',
        white: {
            main: '#FFFFFF',
            secondary: '#F0F3F9',
        },
        gray: {
            main: '#5E5E5E',
            secondary: '#EAEAF0',
        },
        background: '#FAF9F6',
    },
    shadow: {
        shadow_sm: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        shadow_md: '0px 3px 6px rgba(0, 0, 0, 0.25)',
        shadow_lg: '0px 4px 8px rgba(0, 0, 0, 0.25)',
        shadow_nav: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    },
});
