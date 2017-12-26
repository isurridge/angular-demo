const environment = process.env.NODE_ENV || 'development';

class Configuration {
  COGNITO: {
    COGNITO_USER_POOL_ID: string;
    COGNITO_CLIENT_APP_ID: string;
    COGNITO_REFRESH_AUTH_FLOW: string;
  };
  SHERLOCK: {
    API_PROTOCOL: string;
    API_HOSTNAME: string;
    API_PORT: string;
  };
  CORS: {
    ALLOW_ORIGIN: string;
    ALLOW_HEADERS: string;
    ALLOW_METHODS: string;
  }
}

let configuration = new Configuration();
switch (environment) {
  case 'production':

    break;
  case 'development':
    configuration.COGNITO = {
      COGNITO_USER_POOL_ID: 'us-east-1_DhZ10w8NF',
      COGNITO_CLIENT_APP_ID: '2i0lvh5lklfc69mvfhrqs0osj3',
      COGNITO_REFRESH_AUTH_FLOW: 'REFRESH_TOKEN_AUTH'
    };

    configuration.SHERLOCK = {
      API_PROTOCOL: 'http',
      API_HOSTNAME: 'localhost',
      API_PORT: '3000'
    };

    configuration.CORS = {
      ALLOW_ORIGIN: 'http://localhost:8090',
      ALLOW_HEADERS: 'Origin, X-Requested-With, Content-type, Accept',
      ALLOW_METHODS: 'POST, PUT, GET, PATCH, DELETE'
    };

    break;
}

export default configuration;
