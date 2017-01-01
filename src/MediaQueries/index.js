const breakpoints = {
  gtlg: {
    min: 1920,
  },
  lg: {
    min: 1280,
    max: 1919
  },
  gtmd: {
    min: 1280,
  },
  md: {
    min: 900,
    max: 1279
  },
  gtsm: {
    min: 960
  },
  sm: {
    min: 600,
    max: 959
  },
  gtxs: {
    min: 600
  },
  xs: {
    max: 599
  }
}

const media = Object.keys(breakpoints).reduce((accumulator, key) => {
  let queryString = ''
  if (breakpoints[key].min) {
    queryString += 'min-width: ' + breakpoints[key].min + 'px'
    if (breakpoints[key].max) {
      queryString += ') and ('
    }
  }
  if (breakpoints[key].max) {
    queryString += 'max-width: ' + breakpoints[key].max + 'px'
  }
  accumulator[key] = (args) => `
    @media (${queryString}) {
      ${args}
    }
  `
  return accumulator
}, {})

export default media
