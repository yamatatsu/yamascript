import { createRss } from "./createRss";
import { feedOptions, getFeedItems } from "./options";

export async function generateRssFeed() {
  const feedItems = await getFeedItems();
  const rss = createRss(feedOptions, feedItems);
  return rss;
}
