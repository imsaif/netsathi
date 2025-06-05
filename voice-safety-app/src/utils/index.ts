export const formatResponse = (message: string) => {
  return {
    status: 'success',
    message,
  };
};

export const logInfo = (info: string) => {
  console.log(`[INFO]: ${info}`);
};

export const logError = (error: string) => {
  console.error(`[ERROR]: ${error}`);
};