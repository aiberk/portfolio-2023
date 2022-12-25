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
      <div className=" w-full h-78 overflow-hidden grid content-center shadow-md shadow-gray-300 rounded-lg ">
        <Image
          className="w-full"
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
      <div className="flex flex-row gap-1">
        {tags.map((tag) => (
          //User reduce to filter out display=false
          <p
            key={tag}
            className="flex flex-row gap-1 border-solid border-2 w-1/6 place-content-center rounded-sm"
          >
            {tag}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default Card;
