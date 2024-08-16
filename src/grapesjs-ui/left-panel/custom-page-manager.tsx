import { PagesResultProps } from "@grapesjs/react";
import { MdDelete } from "react-icons/md";

export default function CustomPageManager({
  pages,
  selected,
  add,
  select,
  remove,
}: PagesResultProps) {
  const addNewPage = () => {
    const nextIndex = pages.length + 1;
    add({
      name: `New page ${nextIndex}`,
      component: `<h1>Page content ${nextIndex}</h1>`,
    });
  };

  return (
    <div className="gjs-custom-page-manager">
      <div className="p-2">
        <button
          type="button"
          className={"border rounded px-2 py-1 w-full"}
          onClick={addNewPage}
        >
          Add new page
        </button>
      </div>
      {pages.map((page, index) => (
        <div
          key={page.getId()}
          className={`flex items-center py-2 px-4 border-b border-slate-500 ${
            index === 0 ? "border-t" : ""
          }`}
        >
          <button
            type="button"
            className="flex-grow text-left"
            onClick={() => select(page)}
          >
            {page.getName() || "Untitled page"}
          </button>
          {selected !== page && (
            <button type="button" onClick={() => remove(page)}>
              <MdDelete />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
