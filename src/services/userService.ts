import { CoalitionData } from "../../types/CoalitionData";
import { UserData } from "../../types/UserData";
import { FortyTwoClient } from "../client";

export class UserService {
  private client: FortyTwoClient;

  constructor(client: FortyTwoClient) {
    this.client = client;
  }

  /**
   * @param login User login
   * @returns User ID
   * @throws Error if user not found
   */

  async getUserIdByLogin(login: string): Promise<string> {
    const data = await this.client.get(`/users?filter[login]=${login}`);
    const users = data as UserData[];
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return String(users[0].id);
  }

  /**
   * @param email User email
   * @returns User ID
   * @throws Error if user not found
   */

  async getUserIdByEmail(email: string): Promise<string> {
    const data = await this.client.get(`/users?filter[email]=${email}`);
    const users = data as UserData[];
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return String(users[0].id);
  }

  /**
   * @param phone User phone
   * @returns User ID
   * @throws Error if user not found
   */

  async getUserIdByPhone(phone: string): Promise<string> {
    const data = await this.client.get(`/users?filter[phone]=${phone}`);
    const users = data as UserData[];
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return String(users[0].id);
  }

  /**
   * @param userId User ID
   * @returns UserData
   * @throws Error if user not found
   */

  async getUserData(userId: string): Promise<UserData> {
    const data = await this.client.get(`/users/${userId}`);
    return data as UserData;
  }

  async getUserCoalitionsByLogin(login: string): Promise<CoalitionData[]> {
    const userId = await this.getUserIdByLogin(login);
    if (!userId) {
      throw new Error("User not found");
    }
    const data = (await this.client.get(
      `/users/${userId}/coalitions`
    )) as CoalitionData[];
    return data;
  }

  async getUserCoalitions(userId: string): Promise<CoalitionData[]> {
    const data = (await this.client.get(
      `/users/${userId}/coalitions`
    )) as CoalitionData[];
    return data;
  }
}
