import * as request from 'request';
import configuration from './config';
const { API_PROTOCOL, API_HOSTNAME, API_PORT } = configuration.SHERLOCK;

export function alarmsDataTableRoute(req: any, res: any) {
  console.log(req.query);
  const URL = `${API_PROTOCOL}://${API_HOSTNAME}:${API_PORT}/alarm/all`;

  request({
    'url': URL,
    'json': true,
    'headers': {
      'token': req.headers.token
    }
  }, (error: any, response: any, body: any) => {
    if (response.statusCode !== 200) {
      console.error('FAILED calling ' + URL + ' Status code: ' + JSON.stringify(response.statusCode));
    } else {
      console.log('SUCCESS calling ' + URL);
      res.send(response)
    }
  });
}

export function alarmsWizardRoute(req: any, res: any) {
  res.status(200).json([
    {
      id: 1,
      siteAddress: '123 Rd',
      state: 'CA',
      alarmCount: 5,
      alarmDetail: 'door delay',
      recommendation: 'reprogram to 60 seconds',
      actionType: 'remote fix',
      explanation: 'this is why we are doing it',
      workOrderNumber: null,
      children: [
        {
          id: 5,
          siteAddress: '123 Rd',
          state: 'IA',
          alarmCount: 1,
          alarmDetail: 'door delay',
          recommendation: 'reprogram to 60 seconds',
          actionType: 'remote fix',
          explanation: 'this is why we are doing it',
          workOrderNumber: null
        },
        {
          id: 3,
          siteAddress: '123 Rd',
          state: 'CA',
          alarmCount: 20,
          alarmDetail: 'door delay',
          recommendation: 'reprogram to 60 seconds',
          actionType: 'remote fix',
          explanation: 'this is why we are doing it',
          workOrderNumber: 'kjh334'
        },
        {
          id: 3,
          siteAddress: '123 Rd',
          state: 'CA',
          alarmCount: 20,
          alarmDetail: 'door delay',
          recommendation: 'reprogram to 60 seconds',
          actionType: 'remote fix',
          explanation: 'this is why we are doing it',
          workOrderNumber: 'kjh334'
        },
        {
          id: 3,
          siteAddress: '123 Rd',
          state: 'CA',
          alarmCount: 20,
          alarmDetail: 'door delay',
          recommendation: 'reprogram to 60 seconds',
          actionType: 'remote fix',
          explanation: 'this is why we are doing it',
          workOrderNumber: 'kjh334'
        },
        {
          id: 5,
          siteAddress: '123 Rd',
          state: 'IA',
          alarmCount: 1,
          alarmDetail: 'door delay',
          recommendation: 'reprogram to 60 seconds',
          actionType: 'remote fix',
          explanation: 'this is why we are doing it',
          workOrderNumber: null
        }]
    },
    {
      id: 2,
      siteAddress: '123 Rd',
      state: 'CA',
      alarmCount: 4,
      alarmDetail: 'scheduling error',
      recommendation: 'fix holiday schedule',
      actionType: 'remote fix',
      explanation: 'this is why we are doing it',
      workOrderNumber: null,
      children: [{
        id: 2,
        siteAddress: '123 Rd',
        state: 'CA',
        alarmCount: 12,
        alarmDetail: 'scheduling error',
        recommendation: 'fix holiday schedule',
        actionType: 'remote fix',
        explanation: 'this is why we are doing it',
        workOrderNumber: null
      }, {
        id: 4,
        siteAddress: '123 Rd',
        state: 'IA',
        alarmCount: 3,
        alarmDetail: 'scheduling error',
        recommendation: 'fix holiday schedule',
        actionType: 'remote fix',
        explanation: 'this is why we are doing it',
        workOrderNumber: null
      }, {
        id: 4,
        siteAddress: '123 Rd',
        state: 'IA',
        alarmCount: 3,
        alarmDetail: 'scheduling error',
        recommendation: 'fix holiday schedule',
        actionType: 'remote fix',
        explanation: 'this is why we are doing it',
        workOrderNumber: null
      }, {
        id: 4,
        siteAddress: '123 Rd',
        state: 'IA',
        alarmCount: 3,
        alarmDetail: 'scheduling error',
        recommendation: 'fix holiday schedule',
        actionType: 'remote fix',
        explanation: 'this is why we are doing it',
        workOrderNumber: null
      }]
    },
    {
      id: 2,
      siteAddress: '123 Rd',
      state: 'CA',
      alarmCount: 4,
      alarmDetail: 'scheduling for a new light bulb',
      recommendation: 'fix holiday schedule',
      actionType: 'remote fix',
      explanation: 'this is why we are doing it',
      workOrderNumber: 'sdf867'
    }
  ]);
}
