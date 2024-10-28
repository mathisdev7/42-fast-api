import { CoalitionData, CoalitionUser } from "../../types/CoalitionData";
import { FortyTwoClient } from "../client";

export class CoalitionService {
  private client: FortyTwoClient;

  constructor(client: FortyTwoClient) {
    this.client = client;
  }

  /**
   * Get all coalitions
   * @param id Coalition ID
   * @param page Page number (default 1)
   * @returns CampusData
   * @throws Error if coalition not found
   */
  async getCoalitionById(id: string, page: number = 1): Promise<CoalitionData> {
    const data = (await this.client.get(
      `/coalitions/${id}?page[number]=${page}`
    )) as CoalitionData[];
    return data[0];
  }

  /**
   * Get all coalitions users
   * @param id Coalition ID
   * @param page Page number (default 1)
   * @returns Array of CoalitionUser
   * @throws Error if coalition not found
   */

  async getCoalitionUsers(
    id: string,
    page: number = 1
  ): Promise<CoalitionUser[]> {
    const data = (await this.client.get(
      `/coalitions/${id}/coalitions_users?page[number]=${page}`
    )) as CoalitionUser[];
    return data;
  }
}
