import {
  AuthenticationDetails,
  CognitoIdentityServiceProvider,
  CognitoUser,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js';

import { SherlockCognitoUserPool } from './helpers/cognito';
import configuration from './config';

const {
  COGNITO_USER_POOL_ID,
  COGNITO_CLIENT_APP_ID,
  COGNITO_REFRESH_AUTH_FLOW
} = configuration.COGNITO;

/**
 * Responsible for creating authenticating
 * user credentials to create a session
 * resource.
 *
 * @param req
 * @param res
 */
export function createSessionRoute(req: any, res: any) {
  const { username, password } = req.body;

  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: new SherlockCognitoUserPool({
      UserPoolId: COGNITO_USER_POOL_ID,
      ClientId: COGNITO_CLIENT_APP_ID
    })
  });

  cognitoUser.authenticateUser(new AuthenticationDetails({
    Username: username,
    Password: password
  }), {
    onSuccess: (response) => {
      console.log('authentication success');

      const session = {
        idToken: response.getIdToken().getJwtToken(),
        accessToken: response.getAccessToken().getJwtToken(),
        refreshToken: response.getRefreshToken().getToken()
      };

      return res.status(201).json(session);
    },
    onFailure: (err) => {
      console.log('authentication failure');

      if (err.statusCode === 400) {
        return res.status(404).end();
      }

      return res.status(500).end();
    },
    newPasswordRequired: (userAttributes, requiredAttributes) => {
      console.log('new password required');

      return cognitoUser.completeNewPasswordChallenge(password, {
        name: 'admin'
      }, {
        onSuccess: (result) => {
          console.log('complete new password success');
        },
        onFailure: (err) => {
          console.log('complete new password failure');
        }
      });
    }
  })
}


export function updateSessionRoute(req: any, res: any) {
  const { refreshToken } = req.body;

  const pool = new SherlockCognitoUserPool({
    UserPoolId: COGNITO_USER_POOL_ID,
    ClientId: COGNITO_CLIENT_APP_ID
  });

  pool.getClient().makeUnauthenticatedRequest('initiateAuth', {
    ClientId: COGNITO_CLIENT_APP_ID,
    AuthFlow: COGNITO_REFRESH_AUTH_FLOW,
    AuthParameters: {
      REFRESH_TOKEN: refreshToken
    }
  }, (err: any, response: any) => {
    if (err) {
      return res.status(500).end();
    }

    const session = {
      idToken: response.AuthenticationResult.IdToken,
      accessToken: response.AuthenticationResult.AccessToken
    };

    return res.status(200).json(session);
  });
}
