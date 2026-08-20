const breakpoints = {
  xsMax: '479px',
  smMin: '480px',
  mdMin: '768px',
  lgMin: '1024px',
  xlMin: '1280px',
  xxlMin: '1536px',
};

const SANAMainQueries = {
  breakpoints,
  mediaQueries: {
    xs: `(max-width: ${breakpoints.xsMax})`,
    sm: `(min-width: ${breakpoints.smMin})`,
    md: `(min-width: ${breakpoints.mdMin})`,
    lg: `(min-width: ${breakpoints.lgMin})`,
    xl: `(min-width: ${breakpoints.xlMin})`,
    xxl: `(min-width: ${breakpoints.xxlMin})`,
  }
};

export const xs = rules => (
  `
    @media ${SANAMainQueries.mediaQueries.xs} {
      ${rules}
    }
  `
);

export const sm = rules => (
  `
    @media ${SANAMainQueries.mediaQueries.sm} {
      ${rules}
    }
  `
);

export const md = rules => (
  `
    @media ${SANAMainQueries.mediaQueries.md} {
      ${rules}
    }
  `
);

export const lg = rules => (
  `
    @media ${SANAMainQueries.mediaQueries.lg} {
      ${rules}
    }
  `
);

export const xl = rules => (
  `
    @media ${SANAMainQueries.mediaQueries.xl} {
      ${rules}
    }
  `
);

export const xxl = rules => (
  `
    @media ${SANAMainQueries.mediaQueries.xxl} {
      ${rules}
    }
  `
);
