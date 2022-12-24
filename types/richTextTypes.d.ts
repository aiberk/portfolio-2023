export interface RichTextType {
  nodeType: string;
  data: RichTextTypeData;
  content: RichTextTypeContent[];
}

export interface RichTextTypeContent {
  nodeType: string;
  data: FluffyData;
  content: PurpleContent[];
}

export interface PurpleContent {
  nodeType: FluffyNodeType;
  value?: string;
  marks?: any[];
  data: RichTextTypeData;
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
  data: RichTextTypeData;
  content?: TentacledContent[];
}

export interface RichTextTypeData {}

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
  image?: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface TargetSys {
  space: Environment;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
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
