#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { basename } from "node:path";

const [, , filePath] = process.argv;

if (!filePath) {
  console.error("Usage: node scripts/make-article.mjs drafts/your-article.md");
  process.exit(1);
}

const source = readFileSync(filePath, "utf8").trim();
const lines = source.split(/\r?\n/);
const titleLine = lines.find((line) => line.startsWith("# "));
const title = titleLine ? titleLine.replace(/^#\s+/, "").trim() : basename(filePath, ".md");
const slug = toSlug(basename(filePath, ".md")) || toSlug(title) || `weekly-${Date.now()}`;
const paragraphs = lines
  .filter((line) => line.trim() && !line.startsWith("# "))
  .map((line) => line.trim());

const body = [];
for (const line of paragraphs) {
  if (line.startsWith("## ")) {
    body.push({ type: "heading", text: line.replace(/^##\s+/, "") });
  } else if (line.startsWith("> ")) {
    body.push({ type: "callout", text: line.replace(/^>\s+/, "") });
  } else {
    body.push({ type: "paragraph", text: line });
  }
}

const article = {
  id: slug,
  title,
  subtitle: "ここに記事の短い説明を入れてください。",
  author: "ユウジ",
  category: "プリフロップ",
  date: new Date().toISOString().slice(0, 10),
  readTime: `${Math.max(3, Math.ceil(paragraphs.join("").length / 500))}分`,
  memberOnly: true,
  featured: false,
  tags: ["ポーカー"],
  summary: ["要点1", "要点2", "要点3"],
  body
};

console.log(JSON.stringify(article, null, 2));
console.log("\n// 上のオブジェクトを content/articles.js の配列末尾に追加してください。");

function toSlug(value) {
  return value
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase()
    .slice(0, 80);
}
