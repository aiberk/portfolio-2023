import Image from "next/image";
import Link from "next/link";
import { ContentFulItem, CSSattributeTypes } from "../../types/types";

// box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
//     rgb(0 0 0 / 7%) 0px 0px 1rem 0px;

type Props = {
  item: ContentFulItem;
};

const Card = ({ item }: Props) => {
  const { name, description, mdx, tags, thumbnail } = item.fields;
  return (
    <Link href={`/work/${item.fields.name}`} className="text-xl w-full mb-6">
      <div className="w-full overflow-hidden grid gap-2 content-center rounded-lg shadow-xl mb-4">
        <Image
          className="w-full"
          src={`https:${thumbnail.fields.file.url}`}
          alt={`${name} thumbnail image`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          priority
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADDCAYAAAA4GCyWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7dQBDQAgEAAhtX9aP4DmuA1CsO/MWwABZwFECAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvI+B7+BV1lZwUWAAAAAElFTkSuQmCC"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="pt-0 pl-2">
        <p className="truncate font-semibold">{name}</p>
        <p className="truncate ">{description}</p>
        <div className="flex flex-wrap flex-row gap-1 mt-1">
          {tags.map((tag, index) => (
            //User reduce to filter out display=false
            <span
              key={`${Date.now() + index}`}
              // before="??"
              // before="???"
              // before="|"
              // before:content-[attr(before)] first:before:content-none
              className="text-xs break-normal text-zinc-900 dark:bg-zinc-700 dark:text-white flex flex-row gap-1  text-md bg-zinc-100 pt-1 pb-1 pr-3 pl-3 rounded-lg mt-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
