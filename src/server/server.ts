import * as express from 'express';
import { Application } from 'express';
import {
  executiveSummaryLineChartRoute,
  executiveSummaryMeterRoute,
  executiveSummaryStatusTablesRoute
} from './executive-summary.route';
const bodyParser = require('body-parser');
import { verifyInvitationRoute, signupRoute, confirmRoute } from './signup.route';
import { workOrdersDataTableRoute } from './work-orders.route';
import { alarmsDataTableRoute, alarmsWizardRoute } from './alarms.route';
import { createSessionRoute, updateSessionRoute } from './sessions.route';

// config
import configuration from './config';
const { ALLOW_ORIGIN, ALLOW_HEADERS, ALLOW_METHODS } = configuration.CORS;

// bootstrap app
const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', ALLOW_ORIGIN);
//   res.header('Access-Control-Allow-Headers', ALLOW_HEADERS);
//   res.header('Access-Control-Allow-Methods', ALLOW_METHODS);
//   next();
// });

// FORMATTING ==> app.route('/api/subject/:id').get(subjectRoute);
app.route('/api/executiveSummaryLineChart').get(executiveSummaryLineChartRoute);
app.route('/api/executiveSummaryStatusTables').get(executiveSummaryStatusTablesRoute);
app.route('/api/executiveSummaryMeter').get(executiveSummaryMeterRoute);
app.route('/api/workOrdersDataTable').get(workOrdersDataTableRoute);
app.route('/api/alarmsDataTable').get(alarmsDataTableRoute);
app.route('/api/alarmsWizard').get(alarmsWizardRoute);
app.route('/api/auth/verifyInvitation').post(verifyInvitationRoute);
app.route('/api/auth/signup').post(signupRoute);
app.route('/api/auth/confirm').post(confirmRoute);
app.route('/api/sessions')
  .post(createSessionRoute)
  .put(updateSessionRoute);

console.log('Starting server ...');
app.listen(8090, () => {
  console.log('Server is now running on port 8090 ...');
});
