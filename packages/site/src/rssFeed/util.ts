import fetch from "node-fetch";

const getJson = (jsonName: string) => require(`../../scripts/${jsonName}.json`);
const getUrl = (jsonName: string) => {
  const json = getJson(jsonName);
  return `https://d15sryg89iethd.cloudfront.net/mp3/.${json.SynthesisTask.TaskId}.mp3`;
};
export const getCreatedAt = (jsonName: string) => {
  const json = getJson(jsonName);
  return new Date(json.SynthesisTask.CreationTime);
};

export async function getContentLength(jsonName: string): Promise<number> {
  const response = await fetch(getUrl(jsonName));
  // use `!` becase "content-length" is certainly
  return parseInt(response.headers.get("content-length")!);
}
