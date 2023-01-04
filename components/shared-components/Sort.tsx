import React from "react";
import { ContentFulItem } from "../../types/types";

type Props = {};

function Sort(list: Array<ContentFulItem>) {
  return list.sort(function (a, b) {
    if (a.fields.name.toLowerCase() < b.fields.name.toLowerCase()) {
      return -1;
    }
    if (a.fields.name.toLowerCase() > b.fields.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}

export default Sort;
