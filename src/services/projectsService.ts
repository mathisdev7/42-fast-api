import { Project, UserProject } from "../../types/ProjectData";
import { FortyTwoClient } from "../client";

export class ProjectsService {
  private client: FortyTwoClient;

  constructor(client: FortyTwoClient) {
    this.client = client;
  }

  /**
   * Get all projects
   * @param page - page number
   * @returns Array of Projects
   * @throws Error if projects not found
   *
   */

  async getProjects(page = 1): Promise<Project[]> {
    const projects = (await this.client.get(
      `/projects?page[number]=${page}`
    )) as Project[];
    return projects;
  }

  /**
   * Get project by id
   * @param id - project id
   * @returns Project
   * @throws Error if project not found
   *
   */

  async getProjectById(id: number): Promise<Project> {
    const project = (await this.client.get(`/projects/${id}`)) as Project;
    return project;
  }

  /**
   * Get project by slug
   * @param slug - project slug
   * @returns Project
   * @throws Error if project not found
   *
   */

  async getProjectBySlug(slug: string): Promise<Project> {
    const project = (await this.client.get(`/projects/${slug}`)) as Project;
    return project;
  }

  /**
   * Get all projects of a user
   * @param userId - user id
   * @returns Array of Projects
   * @throws Error if projects not found
   */

  async getUserProjects(userId: number): Promise<UserProject[]> {
    const projects = (await this.client.get(
      `/users/${userId}/projects_users`
    )) as UserProject[];
    return projects;
  }

  async getProjectUsers(projectId: number): Promise<UserProject[]> {
    const projects = (await this.client.get(
      `/projects/${projectId}/projects_users`
    )) as UserProject[];
    return projects;
  }
}
