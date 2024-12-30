import Image from "next/image";
import Link from "next/link";
import { ContentFulItem, CSSattributeTypes } from "../../types/types";
import GithubIcon from "./GithubIcon";
import LinkIcon from "./LinkIcon";

// box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
//     rgb(0 0 0 / 7%) 0px 0px 1rem 0px;

type Props = {
  item: ContentFulItem;
};

const Card = ({ item }: Props) => {
  const { name, description, mdx, tags, thumbnail } = item.fields;
  return (
    <div className="text-xl w-full mb-6">
      <Link href={`/design/${item.fields.name}`}>
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
      </Link>
      <div className="pt-0 pl-2">
        <div className="flex flex-row w-full justify-between">
          {" "}
          <p className="truncate font-semibold gap text-sm">{name} </p>
          <div className="flex flex-row gap-1">
            {item.fields.githubUrl && (
              <a
                className="truncate"
                href={item.fields.githubUrl}
                aria-label="Github Link"
                target="_blank">
                <GithubIcon />
              </a>
            )}
            {item.fields.demoUrl && (
              <a
                className="truncate"
                href={item.fields.demoUrl}
                aria-label="Demo Link"
                target="_blank">
                <LinkIcon />
              </a>
            )}
          </div>
        </div>
        <p className="truncate text-sm">{description}</p>

        <div className="flex flex-wrap flex-row gap-1 mt-1">
          {tags.map((tag, index) => (
            //User reduce to filter out display=false
            <span
              key={`${Date.now() + index}`}
              className="text-xs break-normal text-zinc-900 dark:bg-zinc-700 dark:text-white flex flex-row gap-1  text-md bg-zinc-100 pt-1 pb-1 pr-3 pl-3 rounded-lg mt-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
