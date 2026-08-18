import SANAMainQueries from "./style";

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
