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

themesToggle?.addEventListener('click', handleToggle);

function handleToggle(event: Event) {
  const target = event.target as HTMLElement;
  const theme = Number(target.getAttribute("theme"));

  theme && Number(theme) < 3
    ? target.setAttribute("theme", `${theme + 1}`)
    : target.setAttribute("theme", `1`)

  console.log(Number(target.getAttribute("theme")));


  switch (theme) {
    case 1:
      body?.classList.remove("themePurple")
      body?.classList.add("themeDark")
      break;

    case 2:
      body?.classList.remove("themeDark")
      body?.classList.add("themeLight")
      break;

    case 3:
      body?.classList.remove("themeLight")
      body?.classList.add("themePurple")
      break;

    default:
      body?.classList.remove("themePurple")
      body?.classList.add("themeDark")
  }
}
