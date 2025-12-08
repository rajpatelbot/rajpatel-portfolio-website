import { NextResponse } from "next/server";

const GITHUB_USERNAME = "rajpatelbot"; // Change to your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events`;

export async function GET() {
  // Fetch public events (commits, PRs, issues, etc.)
  const res = await fetch(GITHUB_API_URL);
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch GitHub events" }, { status: 500 });
  }
  const events = await res.json();

  // Filter events from last 60 days
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
  const filtered = events.filter((event: any) => {
    const eventDate = new Date(event.created_at);
    return eventDate >= sixtyDaysAgo;
  });

  // Count contributions per day
  const contributions: Record<string, number> = {};
  filtered.forEach((event: any) => {
    const date = event.created_at.slice(0, 10);
    contributions[date] = (contributions[date] || 0) + 1;
  });

  return NextResponse.json({ contributions });
}
