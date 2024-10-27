import { CampusData, CampusUserData } from "../../types/CampusData";
import { FortyTwoClient } from "../client";

export class CampusService {
  private client: FortyTwoClient;

  constructor(client: FortyTwoClient) {
    this.client = client;
  }

  /**
   *
   * @param id Campus ID
   * @returns CampusData
   * @throws Error if campus not found
   */

  async getCampusById(id: string): Promise<CampusData> {
    const data = (await this.client.get(`/campus/${id}`)) as CampusData;
    return data;
  }

  /**
   *
   * @param id Campus ID
   * @param page Page number (default 1)
   * @returns Array of CampusUserData
   * @throws Error if campus not found
   */

  async getCampusUsers(
    id: string,
    page: number = 1
  ): Promise<CampusUserData[]> {
    const data = (await this.client.get(
      `/campus_users?filter[campus_id]=${id}&page[number]=${page}`
    )) as CampusUserData[];
    return data;
  }

  /**
   *
   * @param name Campus name
   * @returns Campus
   * @throws Error if campus not found
   */

  async getCampusIdByName(name: string): Promise<string> {
    const data = (await this.client.get(
      `/campus?filter[name]=${name}`
    )) as CampusData[];
    if (data.length === 0) {
      throw new Error("Campus not found");
    }
    return String(data[0].id);
  }

  /**
   * @param page Page number (default 1)
   * @returns Array of CampusData
   * @throws Error if no campuses found
   */

  async getCampusList(page: number = 1): Promise<CampusData[]> {
    const data = (await this.client.get(
      `/campus?page[number]=${page}`
    )) as CampusData[];
    return data;
  }
}
