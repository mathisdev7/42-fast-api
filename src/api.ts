import { UserData } from "../types/UserData";
import { FortyTwoClient } from "./client";

export class FortyTwoAPI {
  private client: FortyTwoClient;

  constructor({
    uid,
    secret,
    logRequests,
    baseUrl,
  }: {
    uid: string;
    secret: string;
    logRequests: boolean;
    baseUrl: string;
  }) {
    this.client = new FortyTwoClient({
      uid,
      secret,
      logRequests,
      baseUrl,
    });
  }

  public async init() {
    await this.client.init();
  }

  public async getUserIdByLogin(login: string): Promise<string> {
    const data = await this.client.get(`/users?filter[login]=${login}`);
    const users = data as UserData[];
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return String(users[0].id);
  }

  public async getUserData(userId: string): Promise<UserData> {
    const data = await this.client.get(`/users/${userId}`);
    return data as UserData;
  }

  public async getCampusList() {
    const data = await this.client.get(`/campus`);
    return data;
  }
}
