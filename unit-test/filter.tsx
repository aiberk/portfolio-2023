import test from "node:test";
import { ContentFulItem } from "../types/types";

type Props = {
  items: Array<ContentFulItem>;
};

const testData = [
  {
    metadata: { tags: [] },
    sys: {
      space: [Object],
      id: "68HfzFXe5o25VA6GbFr3eu",
      type: "Entry",
      createdAt: "2022-12-29T02:38:14.835Z",
      updatedAt: "2022-12-29T14:43:23.347Z",
      environment: [Object],
      revision: 10,
      contentType: [Object],
      locale: "en-US",
    },
    fields: {
      name: "abyiber.com",
      description: "Headless CMS portfolio",
      tags: [Array],
      thumbnail: [Object],
      dateCreated: "2022-12-28T00:00-04:00",
      display: true,
      richText: [Object],
      tldr: "To show my work to employers I created a portfolio. The tech-stack I used was React, Tailwind, Next.js, Vercel, & Contentful. To help me with the development experience and quality assurance I used React Typescript, Jest, React-Testing-Library, Cypress, Lighthouse, and Vercel Analytics.   ",
      priority: false,
    },
  },
  {
    metadata: { tags: [] },
    sys: {
      space: [Object],
      id: "68HfzFXe5o25VA6GbFr3eu",
      type: "Entry",
      createdAt: "2022-12-29T02:38:14.835Z",
      updatedAt: "2022-12-29T14:43:23.347Z",
      environment: [Object],
      revision: 10,
      contentType: [Object],
      locale: "en-US",
    },
    fields: {
      name: "babyiber.com",
      description: "Headless CMS portfolio",
      tags: [Array],
      thumbnail: [Object],
      dateCreated: "2022-12-28T00:00-04:00",
      display: true,
      richText: [Object],
      tldr: "To show my work to employers I created a portfolio. The tech-stack I used was React, Tailwind, Next.js, Vercel, & Contentful. To help me with the development experience and quality assurance I used React Typescript, Jest, React-Testing-Library, Cypress, Lighthouse, and Vercel Analytics.   ",
      priority: true,
    },
  },
  {
    metadata: { tags: [] },
    sys: {
      space: [Object],
      id: "68HfzFXe5o25VA6GbFr3eu",
      type: "Entry",
      createdAt: "2022-12-29T02:38:14.835Z",
      updatedAt: "2022-12-29T14:43:23.347Z",
      environment: [Object],
      revision: 10,
      contentType: [Object],
      locale: "en-US",
    },
    fields: {
      name: "cabyiber.com",
      description: "Headless CMS portfolio",
      tags: [Array],
      thumbnail: [Object],
      dateCreated: "2022-12-28T00:00-04:00",
      display: true,
      richText: [Object],
      tldr: "To show my work to employers I created a portfolio. The tech-stack I used was React, Tailwind, Next.js, Vercel, & Contentful. To help me with the development experience and quality assurance I used React Typescript, Jest, React-Testing-Library, Cypress, Lighthouse, and Vercel Analytics.   ",
      priority: false,
    },
  },
  {
    metadata: { tags: [] },
    sys: {
      space: [Object],
      id: "68HfzFXe5o25VA6GbFr3eu",
      type: "Entry",
      createdAt: "2022-12-29T02:38:14.835Z",
      updatedAt: "2022-12-29T14:43:23.347Z",
      environment: [Object],
      revision: 10,
      contentType: [Object],
      locale: "en-US",
    },
    fields: {
      name: "dabyiber.com",
      description: "Headless CMS portfolio",
      tags: [Array],
      thumbnail: [Object],
      dateCreated: "2022-12-28T00:00-04:00",
      display: false,
      richText: [Object],
      tldr: "To show my work to employers I created a portfolio. The tech-stack I used was React, Tailwind, Next.js, Vercel, & Contentful. To help me with the development experience and quality assurance I used React Typescript, Jest, React-Testing-Library, Cypress, Lighthouse, and Vercel Analytics.   ",
      priority: false,
    },
  },
];

export function projectFilter(items: any) {
  let temp = [];
  const priority = items.filter((item: any) => item.fields.priority == true);
  const nonPriority = items.filter(
    (item: any) => item.fields.priority == false && item.fields.display == true
  );
  priority.sort((a: any, b: any) => b.fields.name - a.fields.name);
  nonPriority.sort((a: any, b: any) => b.fields.name - a.fields.name);
  temp.push(...priority, ...nonPriority);
  return temp;
}
