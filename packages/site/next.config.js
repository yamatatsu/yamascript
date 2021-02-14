const fs = require("fs");

const files = fs.readdirSync(`${__dirname}/scripts/`);
const pairs = files
  .filter((fileName) => fileName.endsWith(".json"))
  .map((fileName) => {
    const guid = fileName.replace(/\.json$/, "");
    const json = require(`./scripts/${fileName}`);
    const mp3Url = `https://d15sryg89iethd.cloudfront.net/mp3/.${json.SynthesisTask.TaskId}.mp3`;
    return [guid, mp3Url];
  });

module.exports = {
  async rewrites() {
    return pairs.map(([guid, mp3Url]) => ({
      source: `/mp3/${guid}`,
      destination: mp3Url,
    }));
  },
};
