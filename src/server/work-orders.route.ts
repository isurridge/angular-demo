import * as request from 'request';
import configuration from './config';
const { API_PROTOCOL, API_HOSTNAME, API_PORT } = configuration.SHERLOCK;

export function workOrdersDataTableRoute(req: any, res: any) {
  console.log(req.query);
  const URL = `${API_PROTOCOL}://${API_HOSTNAME}:${API_PORT}/workOrder/all`;

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
