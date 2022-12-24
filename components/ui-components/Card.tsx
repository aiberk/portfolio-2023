import Image from "next/image";
import Link from "next/link";
import { ContentFulItem } from "../../types/types";

type Props = {
  item: ContentFulItem;
};

const Card = ({ item }: Props) => {
  const { name, description, mdx, tags, thumbnail } = item.fields;
  return (
    <Link href={`/work/${item.sys.id}`} className={``}>
      <div className=" w-full h-80 overflow-hidden grid content-center shadow-md shadow-gray-300 rounded-lg ">
        <Image
          className="w-full rounded-2xl"
          src={`https:${thumbnail.fields.file.url}`}
          alt={`${name} thumbnail image`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
          placeholder="blur"
        />
      </div>

      <p>{description}</p>
      <p>{mdx}</p>
      <p>{tags}</p>
    </Link>
  );
};

export default Card;
