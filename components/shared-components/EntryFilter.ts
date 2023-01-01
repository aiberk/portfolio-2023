import { ContentFulItem } from "../../types/types";

function EntryFilter(items: Array<ContentFulItem>) {
  const temp = [];
  const priority = items.filter((item: any) => item.fields.priority == true);
  const nonPriority = items.filter(
    (item: any) => item.fields.priority == false && item.fields.display == true
  );
  const sortedPriority = Sort(priority);
  const sortedNonPriority = Sort(nonPriority);

  temp.push(...sortedPriority, ...sortedNonPriority);
  return temp;
}

export default EntryFilter;

const Sort = (list: Array<ContentFulItem>) => {
  return list.sort(function (a, b) {
    if (a.fields.name.toLowerCase() < b.fields.name.toLowerCase()) {
      return -1;
    }
    if (a.fields.name.toLowerCase() > b.fields.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};
