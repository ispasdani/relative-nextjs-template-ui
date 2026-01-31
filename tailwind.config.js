module.exports = {
  theme: {
    extend: {
      keyframes: {
        'diagonal-scroll': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '7px 7px' }, // Match your pattern size
        },
      },
      animation: {
        'diagonal-scroll': 'diagonal-scroll 2s linear infinite',
      },
    },
  },
};
