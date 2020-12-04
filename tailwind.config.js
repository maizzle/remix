module.exports = {
  theme: {
    screens: {
      all: {raw: 'screen'},
      sm: {max: '600px'},
    },
    extend: {
      colors: {
        inherit: 'inherit',

        // Algolia
        'algolia-bg': '#f2f2f7',
        'algolia-heading': '#1f1c3f',
        'algolia-copy': '#495588',
        'algolia-link': '#00aeff',
        'algolia-address': '#8994c6',
        'algolia-unsub': '#c4c8d8',

        // Social networks
        github: '#41454E',
        facebook: '#4267b2',
        twitter: '#1da1f2',
        linkedin: '#0077B5',

        // Asana
        'asana-red': '#FF5263',
        'asana-gray': '#F6F8F9',
        'asana-indigo': '#796EFF',

        // DailyUI 17 Email Receipt
        skin: '#f5dbce',

        // Reelgood
        'reelgood-black': '#081017',
        'reelgood-darkest': '#6b6b6b',
        'reelgood-darker': '#8d8d8d',
        'reelgood-grey': '#b3b3b3',
        'reelgood-grey-lighter': '#d3d3d3',
        'reelgood-green': '#00DC89',
        'reelgood-divider': '#727272',

        // Deal Shop Freebie
        'dealshop-blue': '#4285f4',
        'dealshop-blue-dark': '#3d7de3',

        // Rockstar RDR2
        'rdr2-red': '#cc0000',

        // Apple Macbook Pro
        'apple-black': '#121217',
        'apple-card': '#18181c',
        'apple-card-grey': '#ccc',
        'apple-footer-bg': '#333333',
        'apple-mbp-footer-border': '#444444',
        'apple-mbp-body': '#888888',
        'apple-mbp-footer': '#999999',
        'apple-mbp-footer-legal': '#666666',
        'apple-mbp-grey-dark': '#63636e',
        'apple-mbp-grey-darker': '#1e1e21',
        'apple-cta': '#0070c9',
        'apple-text-link': '#6bf',
        'apple-cta-border-dark': '#07c',
        'apple-cta-border-light': '#1482d0',

        gray: {
          canopy: '#f2f2f2',
          'canopy-light': '#e1e1e1',
          'canopy-dark': '#c5c5c5',
          'canopy-darker': '#999999',
          'canopy-darkest': '#4e4e4e',
        },
        teal: {
          canopy: '#14dbb8',
        },
        blue: {
          canopy: '#107cd1',
          'canopy-cta': '#15c2ea',
          'canopy-link': '#3ba2e5',
        },
      },
      spacing: {
        screen: '100vw',
        full: '100%',
        px: '1px',
        0: 0,
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        36: '36px',
        40: '40px',
        44: '44px',
        48: '48px',
        52: '52px',
        56: '56px',
        60: '60px',
        64: '64px',
        72: '72px',
        80: '80px',
        96: '96px',
        128: '128px',
        160: '160px',
        256: '256px',
        282: '282px',
        300: '300px',
        560: '560px',
        600: '600px',
        640: '640px',
        700: '700px',
        720: '720px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      backgroundSize: {
        full: '100%',
        'size-120': '120%',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        lg: '8px',
        full: '9999px',
      },
      boxShadow: {
        canopy: '0 0 8px 2px rgba(0, 0, 0, .04)',
      },
      fontFamily: {
        montserrat: ['Montserrat', '-apple-system', '"Segoe UI"', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', '-apple-system', '"Segoe UI"', 'sans-serif'],
        sans: ['-apple-system', '"Segoe UI"', 'sans-serif'],
        serif: ['Constantia', 'Georgia', 'serif'],
        mono: ['Menlo', 'Consolas', 'monospace'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        0: 0,
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '28px': '28px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '56px',
      },
      inset: theme => ({
        ...theme('spacing'),
      }),
      letterSpacing: theme => ({
        ...theme('spacing'),
      }),
      lineHeight: theme => ({
        ...theme('spacing'),
      }),
      maxHeight: theme => ({
        ...theme('spacing'),
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
      }),
      minHeight: theme => ({
        ...theme('spacing'),
      }),
      minWidth: theme => ({
        ...theme('spacing'),
      }),
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    backgroundSize: ['responsive', 'group-hover'],
    borderRadius: ['responsive', 'hover'],
    borderStyle: ['responsive', 'hover'],
    borderWidth: ['responsive', 'hover'],
    boxShadow: ['responsive', 'hover', 'group-hover'],
    cursor: ['hover'],
    display: ['responsive', 'group-hover'],
    maxWidth: ['responsive', 'hover'],
    opacity: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover'],
    visibility: ['responsive', 'group-hover'],
  },
  corePlugins: {
    animation: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  plugins: [],
}
