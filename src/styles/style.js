const breakpoints = {
  xsMax: '479px',
  smMin: '480px',
  smMax: '767px',
  mdMin: '768px',
  mdMax: '1023px',
  lgMin: '1024px',
  lgMax: '1279px',
  xlMin: '1280px',
  xlMax: '1535px',
  xxlMin: '1536px',
}

const SANAMainQueries = {
  breakpoints,
  mediaQueries: {
    xs: `(max-width: ${breakpoints.xsMax})`,
    sm: `(min-width: ${breakpoints.smMin}) and (max-width: ${breakpoints.smMax})`,
    md: `(min-width: ${breakpoints.mdMin}) and (max-width: ${breakpoints.mdMax})`,
    lg: `(min-width: ${breakpoints.lgMin}) and (max-width: ${breakpoints.lgMax})`,
    xl: `(min-width: ${breakpoints.xlMin}) and (max-width: ${breakpoints.xlMax})`,
    xxl: `(min-width: ${breakpoints.xxlMin})`,
  }
}

export default SANAMainQueries;
