const options = {
  height: "100vh",
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  panels: { defaults: [] }, // Avoid default panels
  // If you enable multiple pages options then you need this
  /*
  projectData: {
    assets: [
      "https://via.placeholder.com/350x250/78c5d6/fff",
      "https://via.placeholder.com/350x250/459ba8/fff",
      "https://via.placeholder.com/350x250/79c267/fff",
      "https://via.placeholder.com/350x250/c5d647/fff",
      "https://via.placeholder.com/350x250/f28c33/fff",
    ],
    pages: [
      {
        name: "Home page",
        component: `<h1>GrapesJS React Custom UI with ShadcnUIx</h1>`,
      },
    ],
  }, */
};
export default options;
