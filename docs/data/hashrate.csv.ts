import { csvFormat } from "d3-dsv";

const response = await fetch(
  "https://api-skynet.oreoscan.info/v0/api/statistics/hashrate",
);
const data = await response.json();
const csv = data.map(({ timestamp, hashRate }) => ({
  date: new Date(timestamp * 1).toISOString(),
  hashRate,
}));

process.stdout.write(csvFormat(csv));
