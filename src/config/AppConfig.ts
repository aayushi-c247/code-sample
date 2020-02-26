export const EnviornmentType: any = {
  DEV: 'development',
  PROD: 'production',
};

export const env: any = process.env.NODE_ENV || EnviornmentType.DEV;

export const AppConfig = {
  GRAPHQL_ENDPOINT: 'http://192.168.2.45:8000/graphql',
};
