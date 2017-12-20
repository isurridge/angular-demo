import * as request from 'request';
import configuration from './config';

const {API_PROTOCOL, API_HOSTNAME, API_PORT} = configuration.SHERLOCK;

export function executiveSummaryLineChartRoute(req: any, res: any) {
  const URL = `${API_PROTOCOL}://${API_HOSTNAME}:${API_PORT}/executive/summary/getLineChartData`;
  requestBackendServer(URL, req, res)
}

export function executiveSummaryStatusTablesRoute(req: any, res: any) {
  const URL = `${API_PROTOCOL}://${API_HOSTNAME}:${API_PORT}/executive/summary/getStatusTablesData`;
  requestBackendServer(URL, req, res)
}

export function executiveSummaryMeterRoute(req: any, res: any) {
  const URL = `${API_PROTOCOL}://${API_HOSTNAME}:${API_PORT}/executive/summary/getHealthMeterData`;
  requestBackendServer(URL, req, res)
}

function requestBackendServer(URL: any, req: any, res: any): void {
  if (req.query.accountID !== undefined) {
    URL = URL + "?accountID=" + req.query.accountID;

  } else if (req.query.state !== undefined) {
    URL = URL + "&state=" + req.query.state;

  } else if (req.query.city !== undefined) {
    URL = URL + "&city=" + req.query.city;

  } else if (req.query.storeNumber !== undefined) {
    URL = URL + "&storeNumber=" + req.query.storeNumber;

  }

  request({
    'url': URL,
    'json': true,
    'headers': {
      'token': req.headers.token
    }
  }, (error: any, response: any, body: any) => {
    if (error) {
      return res.status(500).end();
    }

    if (response.statusCode !== 200) {
      console.error('FAILED calling ' + URL + ' Status code: ' + JSON.stringify(response.statusCode));
    } else {
      console.log('SUCCESS calling ' + URL);
      res.send(response)
    }
  });
}


