import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <div className="font-semibold">{text}</div>,
    [MARKS.ITALIC]: (text: string) => <div className="italic">{text}</div>,
    [MARKS.UNDERLINE]: (text: string) => (
      <div className="underline">{text}</div>
    ),
    [MARKS.CODE]: (text: string) => <div className="code">{text}</div>,
  },
  ///FIX FOR VIDEO
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <div className="text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <div id={`${children}`} className="text-2xl text-left w-full">
        {children}
      </div>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol
        role="list"
        className="marker:text-sky-400 text-left w-full list-decimal"
      >
        {children}
      </ol>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul
        role="list"
        className="marker:text-sky-400 list-disc text-left w-full"
      >
        {children}
      </ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="text-left w-full flex flex-row ">
        &nbsp;-&nbsp;{children}
      </li>
    ),

    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <video
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            title={node.data.target.fields.title}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need

      if (node.data.target.fields.file.contentType === "video/mp4") {
        return (
          <video controls src={`https://${node.data.target.fields.file.url}`} />
        );
      } else if (node.data.target.fields.file.contentType != "video/mp4") {
        return (
          <Image
            className="border-0 ring-transparent"
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        );
      }
    },
  },
};
