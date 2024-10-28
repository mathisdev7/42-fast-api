import { FortyTwoClient } from "./client";
import {
  CoalitionService,
  CurriculumService,
  ProjectsService,
} from "./services";
import { CampusService } from "./services/campusService";
import { UserService } from "./services/userService";

export class FortyTwoAPI {
  private client: FortyTwoClient;
  public users: UserService;
  public campus: CampusService;
  public coalition: CoalitionService;
  public curriculum: CurriculumService;
  public projects: ProjectsService;

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
    this.users = new UserService(this.client);
    this.campus = new CampusService(this.client);
    this.coalition = new CoalitionService(this.client);
    this.curriculum = new CurriculumService(this.client);
    this.projects = new ProjectsService(this.client);
  }

  public async init() {
    await this.client.init();
  }
}
