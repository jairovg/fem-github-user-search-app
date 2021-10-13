const DARK_MODE = '(prefers-color-scheme: dark)';
const themes = {};
const matchMedia = window ? window.matchMedia : () => {};

export const loadTheme = async (theme) => {
  const themeElement = document.querySelector('#theme');

  if (themeElement) {
    themeElement.remove();
  }

  if (themes[theme]) {
    document.head.appendChild(themes[theme]);
    return theme;
  }

  if (theme === 'dark') {
    await import(/* webpackChunkName: "dark" */ '~/assets/styles/themes/index.scss?dark');
    themes[theme] = document.querySelector('#theme');
    return theme;
  }

  await import(/* webpackChunkName: "light" */ '~/assets/styles/themes/index.scss?light');
  themes[theme] = document.querySelector('#theme');
  return theme;
};

export const init = async (fallbackTheme, callback) => {
  const mql = matchMedia(DARK_MODE);
  const colorSchemeSupported = mql.media !== 'not all';
  if (colorSchemeSupported) {
    const mediaHandler = async ({ matches }) => {
      let theme = 'dark';
      if (!matches) {
        theme = 'light';
      }

      callback(theme);
      return loadTheme(theme);
    };

    matchMedia(DARK_MODE).addListener(mediaHandler);
    return mediaHandler(mql);
  }

  // Fallback to theme
  await loadTheme(fallbackTheme);
  return fallbackTheme;
};
