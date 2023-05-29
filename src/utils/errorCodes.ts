
export type ErrorCodes = {
    [key: string]: {
        statusCode: number,
        message: String
    }
}
const errorCodes: ErrorCodes = {
  INVALID_EMAIL_OR_PASSWORD: {
    statusCode: 400, // Bad Request
    message: 'Invalid email address or password',
  },
  ID_NOT_FOUND: {
    statusCode: 404, // Not Found
    message: 'ID not found',
  },
  INVALID_TOKEN: {
    statusCode: 500, // Internal Server Error
    message: 'Invalid Token Detected',
  },
  INTERNAL_ERROR: {
    statusCode: 500, // Internal Server Error
    message: 'Internal Server Error',
  },
  UNAUTHORIZED_OPERATION: {
    statusCode: 400,
    message: 'User not authorized to do this operation'
  }
};

export default errorCodes;