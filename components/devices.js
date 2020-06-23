const size = {
    mobileS: '320px',
    mobileL: '412px',
    tablet: '769px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px',
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};
