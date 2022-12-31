import React from "react";
import { ContentFulItem } from "../../types/types";

function EntryFilter(items: Array<ContentFulItem>) {
  let temp = [];
  const priority = items.filter((item: any) => item.fields.priority == true);
  const nonPriority = items.filter(
    (item: any) => item.fields.priority == false && item.fields.display == true
  );
  temp.push(...priority, ...nonPriority);
  return temp;
}

export default EntryFilter;
