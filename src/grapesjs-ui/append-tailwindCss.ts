export default async (frame: { view: { getEl: () => any } }) => {
  const iframe = frame.view.getEl();

  if (!iframe) return;
  const options = {
    // default options
    tailwindPlayCdn: "https://cdn.tailwindcss.com?v=3.4.5",
    plugins: [],
    config: {},
  };
  const { tailwindPlayCdn, plugins, config } = options;
  const init = () => {
    iframe.contentWindow.tailwind.config = config;
  };

  const script = document.createElement("script");
  script.src =
    tailwindPlayCdn + (plugins.length ? `?plugins=${plugins.join()}` : "");
  script.onload = init;

  // checks iframe is ready before loading Tailwind CSS - issue with firefox
  const f = setInterval(() => {
    const doc = iframe.contentDocument;
    if (doc && doc.readyState && doc.readyState === "complete") {
      doc.head.appendChild(script);
      clearInterval(f);
    }
  }, 100);
};
