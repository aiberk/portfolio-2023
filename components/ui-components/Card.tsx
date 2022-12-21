import Image from "next/image";
import Link from "next/link";
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
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
        placeholder="blur"
      />
      <Link href={`/work/${item.sys.id}`}>{item.sys.id}</Link>
    </div>
  );
};

export default Card;
