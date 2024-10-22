import { Button, Typography, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function CustomButton({
    children,
    textStyle,
    fixedWidth,
    sx = {},
    greenMain,
    greenSecondary,
    greenTertiary,
    cancel,
    red,
    small,
    active,
    white,
    fullWidth,
    type = 'button',
    navigateTo, // Accept navigateTo prop
    isLoading = false, // Add isLoading prop
    ...props
}) {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = () => {
        if (navigateTo) {
            if (typeof navigateTo === 'number') {
                navigate(navigateTo);
            } else {
                navigate(navigateTo);
            }
        }
    };

    const backgroundColor =
        (greenMain && theme.palette.green.main) ||
        (greenSecondary && theme.palette.green.secondary) ||
        (greenTertiary && theme.palette.green.tertiary) ||
        (cancel && theme.palette.textFields.hover) ||
        (red && theme.palette.red.main) ||
        (active && theme.palette.textFields.active) ||
        (white && theme.palette.white.main) ||
        theme.palette.background.default;

    const textColor =
        greenMain || greenSecondary || greenTertiary
            ? theme.palette.getContrastText(backgroundColor)
            : cancel
              ? theme.palette.text.primary
              : active
                ? theme.palette.green.tertiary
                : white
                  ? theme.palette.green.tertiary
                  : red
                    ? theme.palette.common.white
                    : theme.palette.text.primary;

    return (
        <Button
            type={type}
            fullWidth={fullWidth ? fullWidth : false}
            sx={{
                maxWidth: fixedWidth,
                borderRadius: '8px',
                padding: small ? '6px 12px' : '6px 16px',
                textTransform: 'none',
                backgroundColor: backgroundColor,
                color: textColor,
                '&:active': {
                    backgroundColor: textColor,
                },
                ...sx,
            }}
            onClick={isLoading ? undefined : handleClick}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <CircularProgress size={24} color="inherit" />
            ) : (
                <Typography sx={{ color: textColor, typography: textStyle }}>
                    {children}
                </Typography>
            )}
        </Button>
    );
}

export default CustomButton;
