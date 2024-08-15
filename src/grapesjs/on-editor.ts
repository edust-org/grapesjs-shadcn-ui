import { Editor } from "grapesjs";

export default async (editor: Editor) => {
  {
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }

    // Function to log components
    const logComponents = () => {
      const components = editor.getComponents();
      if (components) {
        console.log("Components:", components.toJSON());
      } else {
        console.log("No components found");
      }
    };

    // Attach event listeners to track changes
    editor.on("component:add", logComponents);
    editor.on("component:remove", logComponents);
    editor.on("component:update", logComponents);
    editor.on("style:update", logComponents);
    editor.on("component:change", logComponents);

    // Add a basic component to test functionality
    editor.DomComponents.addType("test-component", {
      model: {
        defaults: {
          testprop: 1,
        },
        init() {
          console.log("Local hook: model.init");
          this.listenTo(this, "change:testprop", this.handlePropChange);
          // Here we can listen global hooks with editor.on('...')
        },
        updated(property, value, prevValue) {
          console.log(
            "Local hook: model.updated",
            "property",
            property,
            "value",
            value,
            "prevValue",
            prevValue
          );
        },
        removed() {
          console.log("Local hook: model.removed");
        },
        handlePropChange() {
          console.log("The value of testprop", this.get("testprop"));
        },
      },
      view: {
        init() {
          console.log("Local hook: view.init");
        },
        onRender() {
          console.log("Local hook: view.onRender");
        },
      },
    });

    // A block for the custom component
    editor.BlockManager.add("test-component", {
      label: "Test Component",
      content: '<div data-gjs-type="test-component">Test Component</div>',
    });
  }
};
