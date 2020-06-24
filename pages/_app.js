import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'HKGrotesk';
            src: url('/static/fonts/HKGrotesk-Regular.otf');
            src: url('/static/fonts/HKGrotesk-Bold.otf');
            src: url('/static/fonts/HKGrotesk-Black.otf');
            src: url('/static/fonts/HKGrotesk-BoldItalic.otf');
            src: url('/static/fonts/HKGrotesk-ExtraBold.otf');
            src: url('/static/fonts/HKGrotesk-Light.otf');
            src: url('/static/fonts/HKGrotesk-Italic.otf');
            src: url('/static/fonts/HKGrotesk-Medium.otf');
    }

    @font-face {
        font-family: 'Basier';
        src: url('/static/fonts/basiersquare-regular-webfont.eot');
        src: url('/static/fonts/basiersquare-regular-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/basiersquare-regular-webfont.woff2') format('woff2'),
             url('/static/fonts/basiersquare-regular-webfont.woff') format('woff'),
             url('/static/fonts/basiersquare-regular-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }

    @font-face {
        font-family: 'Basier-Bold';
        src: url('/static/fonts/basiersquare-bold-webfont.eot');
        src: url('/static/fonts/basiersquare-bold-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/basiersquare-bold-webfont.woff2') format('woff2'),
             url('/static/fonts/basiersquare-bold-webfont.woff') format('woff'),
             url('/static/fonts/basiersquare-bold-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }

    @font-face {
        font-family: 'Basier-Medium';
        src: url('/static/fonts/basiersquare-medium-webfont.eot');
        src: url('/static/fonts/basiersquare-medium-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/basiersquare-medium-webfont.woff2') format('woff2'),
             url('/static/fonts/basiersquare-medium-webfont.woff') format('woff'),
             url('/static/fonts/basiersquare-medium-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }

    @font-face {
        font-family: 'Basier-Mono';
        src: url('/static/fonts/basiersquaremono-regular-webfont.eot');
        src: url('/static/fonts/basiersquaremono-regular-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/basiersquaremono-regular-webfont.woff2') format('woff2'),
             url('/static/fonts/basiersquaremono-regular-webfont.woff') format('woff'),
             url('/static/fonts/basiersquaremono-regular-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }

    @font-face {
        font-family: 'Noway';
        src: url('/static/fonts/noway-medium_italic-webfont.eot');
        src: url('/static/fonts/noway-medium_italic-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/noway-medium_italic-webfont.woff2') format('woff2'),
             url('/static/fonts/noway-medium_italic-webfont.woff') format('woff'),
             url('/static/fonts/noway-medium_italic-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }
    
    
    * {
        margin: 0;
        padding: 0;
    }
    
    html, body {
        font-size: 1rem;
        height: 100%;
        weight: 100%;
        color: ${({ theme }) => theme.colors.text};
    }
`;

const theme = {
    colors: {
        primary: '#C2F8FF',
        text: '#353D45',
        pink: '#EDC0C4',
        white: '#F3F4F7',
        gray: '#adb5bd',
        darkgray: '#696969',
    },
};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Layout>
                    {/* <AnimatePresence exitBeforeEnter> */}
                    <GlobalStyle />
                    <Component {...pageProps} />
                    {/* </AnimatePresence> */}
                </Layout>
            </ThemeProvider>
        );
    }
}
