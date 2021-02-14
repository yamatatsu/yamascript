import { FeedOptions, Item } from "podcast";
import { getCreatedAt, getContentLength } from "./util";

const ORIGIN = "https://podcast.yamatatsu.dev";

export const feedOptions: FeedOptions = {
  title: "YamaScript",
  description: "隙間時間のAWS学習として利用されることを目指すPodcastです。",
  feedUrl: `${ORIGIN}`,
  siteUrl: `${ORIGIN}`,
  language: "ja",
  imageUrl: `${ORIGIN}/YamaScript.png`,
  copyright: "&#xA9; 2021 YamaScript",
  author: "yamatatsu",
  itunesOwner: { name: "yamatatsu", email: "the.kinnikuman@gmail.com" },
  itunesCategory: [{ text: "Technology" }],
};

export async function getFeedItems(): Promise<Item[]> {
  return Promise.all(
    [
      {
        title: "test",
        guid: "00-test",
        description: "初めてpodcastをあげるのでテストです。",
        itunesDuration: "0:20",
      },
    ].map(async (item) => {
      const url = `${ORIGIN}/mp3/${item.guid}`;
      const createdAt = getCreatedAt(item.guid);
      const size = await getContentLength(item.guid);
      return { ...item, url, date: createdAt, enclosure: { url, size } };
    })
  );
}
