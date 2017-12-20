import {
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import configuration from './config';

const {
  COGNITO_USER_POOL_ID,
  COGNITO_CLIENT_APP_ID
} = configuration.COGNITO;

export function verifyInvitationRoute(req: any, res: any) {
  const { invitationId } = req.body;

  if (invitationId) {
    if (invitationId === '123') {
      return res.status(200).json({
        success: true,
        version: '0.4.1',
        data: {
          message: 'Verified Invitation',
          email: 'jcitest1@mailinator.com'
        },
        error: null
      });
    } else {
      return res.status(400).json({
        success: false,
        version: '0.4.1',
        data: {
          message: 'Invalid invitation id'
        },
        error: true
      });
    }
  } else {
    return res.status(400).json({msg: 'Bad Request: invitationId missing'});
  }
}

export function signupRoute(req: any, res: any) {
  const { email, password, name, phoneNumber } = req.body;

  if (email && password && name && phoneNumber) {
    const userPool = new CognitoUserPool({
      UserPoolId: COGNITO_USER_POOL_ID,
      ClientId: COGNITO_CLIENT_APP_ID
    });
    const attributeList = [
      new CognitoUserAttribute({ Name: 'email', Value: email }),
      new CognitoUserAttribute({ Name: 'name', Value: name }),
      new CognitoUserAttribute({ Name: 'phone_number', Value: phoneNumber }),
    ];

    userPool.signUp(email, password, attributeList, null, function(err, result) {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      console.log('Username is ' + result.user.getUsername());
      return res.status(200).json(result);
    });
  } else {
    return res.status(400).json({msg: 'Bad Request: Params missing'});
  }
}

export function confirmRoute(req: any, res: any) {
  const { confirmationCode, username } = req.body;

  if (confirmationCode && username) {
    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: new CognitoUserPool({
        UserPoolId: COGNITO_USER_POOL_ID,
        ClientId: COGNITO_CLIENT_APP_ID
      })
    });

    cognitoUser.confirmRegistration(confirmationCode, true, function(err, result) {
      if (err) {
        console.log('Error: ' + err);
        return res.status(400).json(err);
      }
      console.log('Success: ' + result);
      return res.status(200).json(result);
    });
  } else {
    res.status(400).json({msg: 'Bad Request: Params missing'});
  }
}
