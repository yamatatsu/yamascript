import Podcast from "podcast";

export async function createRss(
  feedOptions: Podcast.FeedOptions,
  items: Podcast.Item[]
) {
  console.log({ feedOptions, items });

  const podcast = new Podcast(feedOptions);
  items.forEach((item) => podcast.addItem(item));

  const indent = true;
  return podcast.buildXml(indent);
}
