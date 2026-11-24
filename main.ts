import { writeFileSync, mkdirSync } from "node:fs";

// The funniest out-of-office auto-reply: the inbox has a new manager.
const SETUP = "I'm out of office until Monday. My inbox is now handled by my cat, ";
const PUNCHLINE = "who has already marked everything as 'not food' and deleted it.";

const ENTRY = SETUP + PUNCHLINE;

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry must be 1-140 chars, got ${text.length}`);
  }
  if (text.includes("\n") || text.trim() !== text) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
}

checkEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
