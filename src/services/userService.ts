import { CoalitionData } from "../../types/CoalitionData";
import { UserData } from "../../types/UserData";
import { FortyTwoClient } from "../client";

export class UserService {
  private client: FortyTwoClient;

  constructor(client: FortyTwoClient) {
    this.client = client;
  }

  /**
   * Get User ID by login
   * @param login User login
   * @returns User ID
   * @throws Error if user not found
   */

  async getUserIdByLogin(login: string): Promise<number> {
    const data = await this.client.get(`/users?filter[login]=${login}`);
    const users = data as UserData[];
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return users[0].id;
  }

  /**
   * Get User ID by email
   * @param email User email
   * @returns User ID
   * @throws Error if user not found
   */

  async getUserIdByEmail(email: string): Promise<number> {
    const data = await this.client.get(`/users?filter[email]=${email}`);
    const users = data as UserData[];
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return users[0].id;
  }

  /**
   * Get User ID by phone
   * @param phone User phone
   * @returns User ID
   * @throws Error if user not found
   */

  async getUserIdByPhone(phone: string): Promise<number> {
    const data = await this.client.get(`/users?filter[phone]=${phone}`);
    const users = data as UserData[];
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return users[0].id;
  }

  /**
   * Get User data by ID
   * @param userId User ID
   * @returns UserData
   * @throws Error if user not found
   */

  async getUserData(userId: number): Promise<UserData> {
    const data = await this.client.get(`/users/${userId}`);
    return data as UserData;
  }

  /**
   * Get User data by login
   * @param login User login
   * @returns UserData
   * @throws Error if user not found
   */
  async getUserDataByLogin(login: string): Promise<UserData> {
    const userId = await this.getUserIdByLogin(login);
    if (!userId) {
      throw new Error("User not found");
    }
    return this.getUserData(userId);
  }

  /**
   * Get User coalitions by login
   * @param login User login
   * @returns Array of CoalitionData
   * @throws Error if user not found
   */

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

  /**
   * Get User coalitions by ID
   * @param userId User ID
   * @returns Array of CoalitionData
   * @throws Error if user not found
   */

  async getUserCoalitions(userId: number): Promise<CoalitionData[]> {
    const data = (await this.client.get(
      `/users/${userId}/coalitions`
    )) as CoalitionData[];
    return data;
  }
}
