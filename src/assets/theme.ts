const body = document.querySelector('#body');

const isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (isThemeDark) {
  body?.classList.remove("themeLight");
  body?.classList.add("themeDark");
} else {
  body?.classList.remove("themeDark");
  body?.classList.add("themeLight");
}

const themesToggle = document.querySelector('.themes__toggle');
const toggle = document.querySelector('.toggle');

themesToggle?.addEventListener('click', handleToggle);

function handleToggle() {
  const ThemesToggle = themesToggle as HTMLElement;
  const theme = ThemesToggle.style.justifyContent;

  theme && Number(theme) < 3
    ? ThemesToggle.setAttribute("theme", `${theme + 1}`)
    : ThemesToggle.setAttribute("theme", `1`)

  switch (theme) {
    case 'flex-end':
      body?.classList.remove("themePurple")
      body?.classList.add("themeDark")
      ThemesToggle.style.justifyContent = "flex-start";
      break;

    case 'flex-start':
      body?.classList.remove("themeDark")
      body?.classList.add("themeLight")
      ThemesToggle.style.justifyContent = "center";
      break;

    case 'center':
      body?.classList.remove("themeLight");
      body?.classList.add("themePurple");
      ThemesToggle.style.justifyContent = "flex-end";
      break;

    default:
      console.log('These is bad');

  }
}

// recorrer un array

