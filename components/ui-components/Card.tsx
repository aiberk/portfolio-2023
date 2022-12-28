import Image from "next/image";
import Link from "next/link";
import { ContentFulItem } from "../../types/types";

// box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
//     rgb(0 0 0 / 7%) 0px 0px 1rem 0px;

type Props = {
  item: ContentFulItem;
  before: HTMLParagraphElement;
};

const Card = ({ item }: Props) => {
  const { name, description, mdx, tags, thumbnail } = item.fields;
  return (
    <Link href={`/work/${item.sys.id}`} className="text-xl">
      {/* className={`border-8 border-sky-500`} */}
      <div className=" w-full overflow-hidden grid gap-2 content-center rounded-lg shadow-xl mb-4">
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
      <p className="truncate font-semibold">{name}</p>
      <p className="truncate ">{description}</p>
      <p>{mdx}</p>
      <div className="flex flex-row gap-1">
        {tags.map((tag) => (
          //User reduce to filter out display=false
          <p
            key={tag}
            before="|"
            className="mt-2 text-gray-600 dark:text-white flex flex-row gap-1 before:content-[attr(before)] first:before:content-none text-sm"
          >
            {tag}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default Card;
