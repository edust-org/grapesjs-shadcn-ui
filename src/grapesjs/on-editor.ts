import { Editor } from "grapesjs";

export default async (editor: Editor) => {
  {
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }

    const component = editor.addComponents(`<div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTRFaiid-T0G4fqBsVi-Fqm69ciosB3opMQ&s" />
      <span title="foo">Hello world!!!</span>
    </div>`)[0];

    const innerComponents = component.components();

    innerComponents.forEach((comp) => console.log(comp.toHTML()));

    console.log(innerComponents);
  }
};
