"use client";

import { useEffect, useState } from "react";

const USERNAME = "rajpatelbot";
const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const GithubActivity = () => {
  const [activity, setActivity] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);

      const fromDate = new Date();
      fromDate.setFullYear(fromDate.getFullYear() - 1);

      const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              
              commitContributionsByRepository(maxRepositories: 20) {
                repository { name url }
                contributions(first: 50) {
                  nodes {
                    occurredAt
                    commitCount
                  }
                }
              }

              pullRequestContributions(first: 30) {
                nodes {
                  pullRequest {
                    title
                    url
                    createdAt
                  }
                }
              }

              pullRequestReviewContributions(first: 30) {
                nodes {
                  pullRequest { title url }
                  pullRequestReview { createdAt }
                }
              }

              issueContributions(first: 30) {
                nodes {
                  issue { title url createdAt }
                }
              }
            }
          }
        }
      `;

      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          query,
          variables: {
            username: USERNAME,
            from: fromDate.toISOString(),
            to: new Date().toISOString(),
          },
        }),
      });

      const json = await res.json();
      setActivity(json.data.user.contributionsCollection);
      setLoading(false);
    };

    fetchActivity();
  }, []);

  if (loading) return <div>Loading GitHub activity...</div>;
  if (!activity) return <div>No activity found.</div>;

  const commits = activity.commitContributionsByRepository;

  return (
    <section id="github-activity" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">GitHub Activity (Last 1 Year)</h2>

        {/* GRID OF REPO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          {commits.map((repo: any, i: number) => (
            <div
              key={i}
              className="bg-secondary rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition"
            >
              {/* Repo Header */}
              <div className="flex flex-col mb-4">
                <h3 className="text-lg font-semibold">{repo.repository.name}</h3>
                <a
                  href={repo.repository.url}
                  target="_blank"
                  className="text-primary text-sm hover:underline"
                >
                  {repo.repository.url.replace("https://github.com/", "")}
                </a>
              </div>

              <div className="space-y-3">
                {repo.contributions.nodes.map((c: any, idx: number) => {
                  const date = new Date(c.occurredAt);
                  const yyyy = date.getFullYear();
                  const mm = String(date.getMonth() + 1).padStart(2, "0");
                  const dd = String(date.getDate()).padStart(2, "0");

                  // GitHub commit history for specific day
                  const historyUrl = `${repo.repository.url}/commits?since=${yyyy}-${mm}-${dd}T00:00:00Z&until=${yyyy}-${mm}-${dd}T23:59:59Z`;

                  return (
                    <div key={idx} className="text-sm text-muted-foreground">
                      {date.toLocaleDateString()} —{" "}
                      <a
                        href={historyUrl}
                        target="_blank"
                        className="text-blue-500 font-medium underline hover:text-blue-400"
                      >
                        {c.commitCount} commits
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>

        {/* PRs, Reviews, Issues */}
        {/* <h3 className="text-2xl font-semibold mt-16 mb-6">Other Activity</h3> */}

        {/* PRs */}
        {/* <h4 className="text-xl font-medium mb-2">Pull Requests</h4>
        <ul className="space-y-2 mb-6">
          {activity.pullRequestContributions.nodes.map((pr: any, i: number) => (
            <li key={i} className="text-sm">
              <a
                href={pr.pullRequest.url}
                className="text-blue-500 underline hover:text-blue-400"
                target="_blank"
              >
                {pr.pullRequest.title}
              </a>{" "}
              <span className="text-muted-foreground">
                ({new Date(pr.pullRequest.createdAt).toLocaleDateString()})
              </span>
            </li>
          ))}
        </ul> */}

        {/* PR Reviews */}
        {/* <h4 className="text-xl font-medium mb-2">Pull Request Reviews</h4>
        <ul className="space-y-2 mb-6">
          {activity.pullRequestReviewContributions.nodes.map((rev: any, i: number) => (
            <li key={i} className="text-sm">
              Reviewed:{" "}
              <a
                href={rev.pullRequest.url}
                className="text-blue-500 underline hover:text-blue-400"
                target="_blank"
              >
                {rev.pullRequest.title}
              </a>{" "}
              <span className="text-muted-foreground">
                ({new Date(rev.pullRequestReview.createdAt).toLocaleDateString()})
              </span>
            </li>
          ))}
        </ul> */}

        {/* Issues */}
        {/* <h4 className="text-xl font-medium mb-2">Issues Created</h4>
        <ul className="space-y-2 pb-6">
          {activity.issueContributions.nodes.map((iss: any, i: number) => (
            <li key={i} className="text-sm">
              <a
                href={iss.issue.url}
                className="text-blue-500 underline hover:text-blue-400"
                target="_blank"
              >
                {iss.issue.title}
              </a>{" "}
              <span className="text-muted-foreground">
                ({new Date(iss.issue.createdAt).toLocaleDateString()})
              </span>
            </li>
          ))}
        </ul> */}

      </div>
    </section>
  );
};

export default GithubActivity;
