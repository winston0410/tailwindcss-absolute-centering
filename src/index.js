const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, addComponents, e, prefix, config }) => {
  const newUtilities = {
    '.absolute-vertical-center': {
      top: '50%',
      '--transform-translate-y': '-50%'
    },
    '.absolute-horizontal-center': {
      left: '50%',
      '--transform-translate-x': '-50%'
    }
  }

  addUtilities(newUtilities)
}, {
  theme: {
    extend: {
      inset: {
        '50%': '50%'
      },
      translate: {
        '50%': '50%'
      }
    }
  }
})
