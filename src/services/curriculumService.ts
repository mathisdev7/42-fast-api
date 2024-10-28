import { Curriculum, CurriculumUser } from "../../types/CurriculumData";
import { FortyTwoClient } from "../client";

export class CurriculumService {
  private client: FortyTwoClient;

  constructor(client: FortyTwoClient) {
    this.client = client;
  }

  /**
   * Get all curriculums
   * @param page Page number (default 1)
   * @returns Array of Curriculum
   * @throws Error if curriculums not found
   */

  async getCurriculums(page = 1): Promise<Curriculum[]> {
    const data = (await this.client.get(
      `/cursus?page[number]=${page}`
    )) as Curriculum[];
    return data;
  }

  /**
   * Get curriculum by ID
   * @param id Curriculum ID
   * @returns Curriculum
   * @throws Error if curriculum not found
   */

  async getCurriculumById(id: number): Promise<Curriculum> {
    const data = (await this.client.get(`/cursus/${id}`)) as Curriculum;
    return data;
  }

  /**
   * Get user curriculums
   * @param userId User ID
   * @returns Curriculum
   * @throws Error if curriculum not found
   */

  async getUserCurriculums(userId: number): Promise<CurriculumUser[]> {
    const data = (await this.client.get(
      `/users/${userId}/cursus_users`
    )) as CurriculumUser[];
    return data;
  }

  /**
   * Get curriculum users
   * @param id Curriculum ID
   * @param page Page number (default 1)
   * @returns Array of CurriculumUser
   * @throws Error if curriculum users not found
   */

  async getCurriculumUsers(id: number, page = 1): Promise<CurriculumUser[]> {
    const data = (await this.client.get(
      `/cursus/${id}/cursus_users?page[number]=${page}`
    )) as CurriculumUser[];
    return data;
  }
}
