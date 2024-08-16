export default async (frame: { view: { getEl: () => any } }) => {
  const iframe = frame.view.getEl();

  if (!iframe) return;
  const options = {
    ...{
      i18n: {},
      // default options
      tailwindPlayCdn: "https://cdn.tailwindcss.com",
      plugins: [],
      config: {},
      cover: `.object-cover { filter: sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7) !important; }`,
      changeThemeText: "Change Theme",
      openCategory: "Blog",
    },
  };
  const { tailwindPlayCdn, plugins, config, cover } = options;
  const init = () => {
    iframe.contentWindow.tailwind.config = config;
  };

  const script = document.createElement("script");
  script.src =
    tailwindPlayCdn + (plugins.length ? `?plugins=${plugins.join()}` : "");
  script.onload = init;

  const cssStyle = document.createElement("style");
  cssStyle.innerHTML = cover;

  // checks iframe is ready before loading Tailwind CSS - issue with firefox
  const f = setInterval(() => {
    const doc = iframe.contentDocument;
    if (doc && doc.readyState && doc.readyState === "complete") {
      doc.head.appendChild(script);
      doc.head.appendChild(cssStyle);
      clearInterval(f);
    }
  }, 100);
};
