import fetch from "node-fetch";
import { AccessToken } from "../types/AcessToken";

const redColor = "\x1b[31m";
const greenColor = "\x1b[32m";
const terminalColorReset = "\x1b[0m";

export type ClientOptions = {
  uid: string;
  secret: string;
  logRequests: boolean;
  baseUrl: string;
};

export class FortyTwoClient {
  private baseUrl: string;
  private uid: string;
  private secret: string;
  private token: string | null = null;
  private logRequests: boolean;

  constructor({ uid, secret, logRequests, baseUrl }: ClientOptions) {
    this.baseUrl = baseUrl;
    this.uid = uid;
    this.secret = secret;
    this.logRequests = logRequests;
  }

  public async init() {
    if (!this.token) {
      await this.getAccessToken();
    }
  }

  private async getAccessToken(): Promise<void> {
    const response = await fetch("https://api.intra.42.fr/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: this.uid,
        client_secret: this.secret,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to obtain access token");
    }

    const data = (await response.json()) as AccessToken;
    this.token = data.access_token;
    if (this.logRequests) {
      console.log(`Access token retrieved: ${this.token}`);
    }
  }

  private async request(endpoint: string, method: string = "GET", body?: any) {
    if (!this.token) {
      throw new Error("Access token is not available. Call init() first.");
    }
    if (this.logRequests) {
      console.log(
        `${redColor}[STARTING]${terminalColorReset} 📡 API Request: ${method} ${endpoint}`
      );
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    if (this.logRequests) {
      console.log(
        `${greenColor}[SUCCESS]${terminalColorReset} 📡 API Request: ${method} ${endpoint}`
      );
    }
    return response.json();
  }

  public async get(endpoint: string) {
    return this.request(endpoint, "GET");
  }

  public async post(endpoint: string, body: any) {
    return this.request(endpoint, "POST", body);
  }
}
