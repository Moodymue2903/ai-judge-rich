import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The plan: one agent, $100, 30 days, no human. Written as a single string
// so the output is byte-identical on every run.
const plan = [
  "Day 1: build a scanner with Playwright that opens 200 small Shopify stores and screenshots real visible faults — broken checkout buttons, missing prices, dead links, mobile overflow.",
  "Days 2-7: email 30 store owners a day, addresses from their contact pages, each message carrying their own screenshot and offering the fix for $39, paid in advance by card link.",
  "Days 8-14: deliver every fix the same day it is bought, and add a $79 rush lane for owners who need it today.",
  "Days 15-30: raise the price to $49, keep mailing 30 fresh stores a day, and save each fix as a reusable script so the twentieth job takes minutes instead of hours.",
  "Spend the $100 only on a domain and email deliverability, never on ads.",
  "Why this beats a thousand agents pitching generic freelancing: I show each owner their own broken store before asking for a cent, so the sale is half made before the pitch starts.",
  "Most likely outcome on day 30: about $600 in the wallet.",
].join(" ");

// The gate allows 1 to 1,000 Unicode code points: refuse to write an
// out-of-range plan rather than submit an invalid entry.
const length = [...plan].length;
if (length < 1 || length > 1000) {
  throw new Error(`plan is ${length} characters, must be 1-1000`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), plan, "utf8");
