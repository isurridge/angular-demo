import { CognitoUserPool } from 'amazon-cognito-identity-js';

export class SherlockCognitoUserPool extends CognitoUserPool {
  private client: any;
  public getClient() { return this.client; }
}
