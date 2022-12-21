import Image from "next/image";
type Props = { item?: any };

const Card = ({ item }: Props) => {
  const { name, description, mdx, tags, thumbnail } = item.fields;
  return (
    <div>
      <Image
        src={"https:" + thumbnail.fields.file.url}
        alt={`${name} thumbnail image`}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      />
    </div>
  );
};

export default Card;
