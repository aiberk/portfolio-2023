export interface CSSattributeTypes {
  CSSInlineAttribute: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
}

type FetchedProps = {
  mdx: Entry<ContentFulItem>[];
};

export interface ContentFulItem {
  metadata: Metadata;
  sys: TargetSys;
  fields: ContentFulItemFields;
}

export interface ContentFulItemFields {
  id: number;
  mdx: string;
  name: string;
  description: string;
  tags: string[];
  thumbnail: Thumbnail;
  dateCreated: string;
  display: boolean;
  richText: RichText;
  githubUrl: string;
  demoUrl: string;
}

export interface RichText {
  nodeType: string;
  data: RichTextData;
  content: RichTextContent[];
}

export interface RichTextContent {
  nodeType: string;
  data: FluffyData;
  content: PurpleContent[];
}

export interface PurpleContent {
  nodeType: FluffyNodeType;
  value?: string;
  marks?: any[];
  data: RichTextData;
  content?: FluffyContent[];
}

export interface FluffyContent {
  nodeType: string;
  data: PurpleData;
  content: TentacledContent[];
}

export interface TentacledContent {
  nodeType: PurpleNodeType;
  value?: string;
  marks?: any[];
  data: RichTextData;
  content?: TentacledContent[];
}

export interface RichTextData {}

export enum PurpleNodeType {
  Paragraph = "paragraph",
  Text = "text",
}

export interface PurpleData {
  target?: PurpleTarget;
}

export interface PurpleTarget {
  metadata: Metadata;
  sys: TargetSys;
  fields: PurpleFields;
}

export interface PurpleFields {
  title?: string;
  description?: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: ImageType;
}

export interface ImageType {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface TargetSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  locale: string;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: Id;
  type: Type;
  linkType: LinkType;
}

export enum Id {
  Master = "master",
  Mdx = "mdx",
  The9Ml0R0Lfbqrn = "9ml0r0lfbqrn",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum Type {
  Link = "Link",
}

export enum FluffyNodeType {
  ListItem = "list-item",
  TableRow = "table-row",
  Text = "text",
}

export interface FluffyData {
  target?: FluffyTarget;
}

export interface FluffyTarget {
  metadata: Metadata;
  sys: TargetSys;
  fields: FluffyFields;
}

export interface FluffyFields {
  title: string;
  file: File;
}

export interface Thumbnail {
  metadata: Metadata;
  sys: TargetSys;
  fields: ThumbnailFields;
}

export interface ThumbnailFields {
  file: File;
}

export interface NavItem {
  label: string;
  emoji: string;
  path: string;
  color: string;
}

export interface IconStrokeWidth {
  strokeWidth?: string;
}
