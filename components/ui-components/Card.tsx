import Image from "next/image";
type Props = { item?: any };

const Card = ({ item }: Props) => {
  const { name, description, mdx, tags } = item.fields;
  return <div>{name}</div>;
};

export default Card;
