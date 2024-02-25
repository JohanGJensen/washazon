type Env = {
  MOCKED: boolean;
  HOST: string;
  API_HOST: string;
}

const getMockedBool = () => {
  if (process.env.MOCKED === 'true') {
    return true;
  }

  return false;
};

const env: Env = {
  MOCKED: getMockedBool(),
  HOST: process.env.HOST || '',
  API_HOST: process.env.API_HOST || ''
}

export default env;
