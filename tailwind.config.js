/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: {
        '3x-sm': '380px',
        '2x-sm': '440px',
        'x-sm': '576px'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          DEFAULT: 'hsl(var(--brand-primary))',
          text: 'hsl(var(--white))',
          primary: 'hsl(var(--brand-primary))',
          secondary: 'hsl(var(--brand-secondary))',
          primaryAccent: 'hsl(var(--brand-primary-accent))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-monospace)', 'monospace'],
        handwriting1: ['var(--font-handwriting-1)', 'cursive'],
        handwriting2: ['var(--font-handwriting-2)', 'cursive'],
        default: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(0deg, rgba(0,0,0,0) 2%, rgba(142,255,56,0.1) 30%, rgba(248,248,18,0.1) 70%, rgba(0,0,0,0) 98%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        grain:
          "url('https://lh3.googleusercontent.com/pw/ABLVV864vdRebQbjjnJDaw6ochKF3230v1vhUUU_e5Ag77DAHsBE7jD0Fk9B5MIVEtCi6frVH_NJ2WpVEW0bUZ0OyFb-K-WD0oaMgWOYxZG7_el7ZW7xX4d83DC9biJY6_5JPJzWoUH0jInjrkaEFzIKPstHWw=w400-h400-s-no-gm')"
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)'
          },
          '80%': {
            opacity: 0.6
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        },
        'fade-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)'
          },
          '80%': {
            opacity: 0.6
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        },
        'slide-up-fade': {
          '0%': {
            opacity: 0,
            transform: 'translateY(6px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'slide-down-fade': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-6px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'personal-gallery-grain': {
          '0%, 100%': {
            transform: 'translate(0%, 0%)'
          },
          '25%': {
            transform: 'translate(-2%, -2%)'
          },
          '50%': {
            transform: 'translate(-2%, 2%)'
          },
          '75%': {
            transform: 'translate(2%, -2%)'
          }
        },
        'personal-gallery-images': {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-102%)'
          }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s',
        'fade-down': 'fade-down 0.5s',
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'personal-gallery-grain':
          'personal-gallery-grain 8s ease-in-out infinite',
        'personal-gallery-images': 'personal-gallery-images 12s linear infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => {
      addVariant('radix-side-top', '&[data-side="top"]');
      addVariant('radix-side-bottom', '&[data-side="bottom"]');
    })
  ]
};
