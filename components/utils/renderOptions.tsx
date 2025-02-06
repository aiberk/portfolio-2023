import Link from "next/link";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import {
  RichTextType,
  RichTextTypeContent,
  RichTextTypeData
} from "../../types/richTextTypes";
import {
  RichTextContent,
  RichTextData,
  RichTextDataTarget,
  RichTextNodeType
} from "contentful";
import { RichText } from "../../types/types";

//Dittle (dot) for list items (<li>)
const beforeMark: string = "·";

export const renderOptionsForContentful = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => (
      <span className="font-semibold">{text}</span>
    ),
    [MARKS.ITALIC]: (text: string) => <span className="italic">{text}</span>,
    [MARKS.UNDERLINE]: (text: string) => (
      <span className="underline">{text}</span>
    ),
    [MARKS.CODE]: (text: string) => <code className="code">{text}</code>
  },
  ///FIX FOR VIDEO
  renderNode: {
    [BLOCKS.HR]: (node: RichTextNodeType, children: RichTextContent) => (
      <hr className="w-full"></hr>
    ),
    [BLOCKS.TABLE]: (node: RichTextNodeType, children: any) => (
      <table
        className="w-full border-solid border-2 rounded-md"
        style={{ border: "solid 2px whitesmoke" }}>
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node: RichTextNodeType, children: string) => (
      <tr className="p-2" style={{ borderBottom: "solid 2px whitesmoke" }}>
        {children}
      </tr>
    ),
    [BLOCKS.TABLE_CELL]: (node: RichTextNodeType, children: string) => (
      <td className="p-2">{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node: RichTextNodeType, children: string) => (
      <th className="p-2" style={{}}>
        {children}
      </th>
    ),

    [BLOCKS.PARAGRAPH]: (node: RichTextNodeType, children: string) => (
      <p
        className="text-left w-full text-lg font-normal leading-8
      ">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node: RichTextNodeType, children: string) => (
      <h1 className="text-3xl text-left w-full">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: RichTextNodeType, children: string) => (
      <h2 className="mt-12 text-2xl text-left w-full">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: RichTextNodeType, children: string) => (
      <h3 className=" text-left w-full">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: RichTextNodeType, children: string) => (
      <h4 className=" text-left w-full">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: RichTextNodeType, children: string) => (
      <h5 className=" text-left w-full">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: RichTextNodeType, children: string) => (
      <h6 className=" text-left w-full">{children}</h6>
    ),
    [BLOCKS.OL_LIST]: (node: RichTextNodeType, children: string) => (
      <ol
        role="list"
        className="marker:text-gray-800 text-left w-full list-decimal pl-5">
        {children}
      </ol>
    ),
    [BLOCKS.UL_LIST]: (node: RichTextNodeType, children: string) => (
      <ul
        role="list"
        className="marker:text-gray-800 list-disc text-left w-full pl-5">
        {children}
      </ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: RichTextNodeType, children: string) => (
      <li className="text-left w-full">{children}</li>
    ),

    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: string) => {
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
    [INLINES.HYPERLINK]: (node: any, children: string) => (
      <Link className="font-semibold dark: text-blue-500" href={node.data.uri}>
        <u>
          {" "}
          <code>{children}</code>
        </u>
      </Link>
    ),

    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: string) => {
      if (node.data.target.fields.file.contentType === "video/mp4") {
        return (
          <video controls src={`https://${node.data.target.fields.file.url}`} />
        );
      } else if (node.data.target.fields.file.contentType === "image/webp") {
        return (
          <img
            className="border-0 ring-transparent mt-12 mb-6"
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        );
      } else if (node.data.target.fields.file.contentType === "image/gif") {
        return (
          <img
            className="border-0 ring-transparent mt-12 mb-6"
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        );
      } else if (node.data.target.fields.file.contentType === "text/html") {
        return (
          <iframe
            width="100%"
            height="405"
            src={`https://www.youtube.com/embed/${node.data.target.fields.file.fileName}`}
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        );
      }
    }
  }
};
