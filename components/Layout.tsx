import React, { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material"
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import theme from './emmaTheme';

const Layout = ({ children, home }: { children: ReactNode, home?: boolean }) => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Header home={home} />
                <Box sx={{ marginTop: 10 }}>
                    {children}
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Layout