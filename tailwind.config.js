module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    extend: {
      fontFamily: {
        lora: ['Lora'],
        dm : ['DM Serif Display'],
        allura: ['Allura'],
        kaushan: ['Kaushan Script']
      },
      colors: {
        'nido-blue': '#014852',
        'ocean-blue': '#576C87',
        'nido-red': '#B93160',
        'nido-grey': '#73777B',
        'nido-green': '#224B0C',
        'nido-light-green': '#76BA99',
        'nido-grey': '#EEEEEE'
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'group-hover'],
      borderWidth: ['responsive', 'group-hover'],
    },
  },
  plugins: [
    
    
  ]
}
