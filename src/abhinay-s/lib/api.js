// Centralized API client for app pages
// Minimal, framework-agnostic helpers

const BASE_URL = "http://localhost:5000";

async function request(path, options = {}) {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`API ${resp.status}: ${text || resp.statusText}`);
  }
  return resp.json();
}

export async function getHomeMetrics() {
  // GET /api/home/metrics → { stats, cards, pricingInfo, lovedByCount, flags }
  return request("/api/home/metrics");
}

export async function getStartupsData() {
  // GET /api/startups/data → { startupsData1, startupsData2 }
  return request("/api/startups/data");
}

export async function getStartupsFlags() {
  // GET /api/startups/componentFlags → { showStartupList1, showStartupList2 }
  return request("/api/startups/componentFlags");
}

export async function getFranchiseData() {
  // GET /api/franchise/data → { industries, cities, stats, items }
  return request("/api/franchise/data");
}

export async function getFranchiseFlags() {
  // GET /franchise/componentFlags → { popularListing, showIndustryPills, showStats }
  return request("/franchise/componentFlags");
}

export { BASE_URL, request };
