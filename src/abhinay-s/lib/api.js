import axios from "axios";

const BASE_URL = "https://backend-demo-b36h.onrender.com";
const DYNAMIC_URL = "http://localhost:3000";
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


// --------------------------------------------------

export const fetchFranchiseHome = async () => {
  const response = await axios.get(
    `${DYNAMIC_URL}/api/v1/franchises/home`,
    {
      headers: {
        Accept: "application/json",
        "X-Lang": "en",
      },
    }
  );

  return response.data;
};
export const fetchFranchiseListing = async () => {
  const response = await axios.get(
    `${DYNAMIC_URL}/api/v1/franchises/listing`,
    {
      headers: {
        Accept: "application/json",
        "X-Lang": "en",
      },
    }
  );

  return response.data;
};
export const fetchFranchiseDetails = async () => {
  const response = await axios.get(
    `${DYNAMIC_URL}/api/v1/franchise/details/9789-3455-6543-3457`,
    {
      headers: {
        Accept: "application/json",
        "X-Lang": "en",
      },
    }
  );

  return response.data;
};
