import { environment } from '../../environments/environment';

export class Server {
  public static url(): string {
    return environment.production ? environment.apiBaseUrl : 'http://nextstop-backend.test/';
  }
}
