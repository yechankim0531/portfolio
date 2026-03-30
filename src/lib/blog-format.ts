import { parseFrontmatterDate } from "./date-utils";

export function formatBlogDate(dateStr: string): string {
  return parseFrontmatterDate(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
