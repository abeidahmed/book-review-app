export const fieldValidation = (error, errorType) => {
  if (error) {
    const errorMessage = error.replace("GraphQL error: ", "");
    if (errorMessage.startsWith(errorType)) {
      return errorMessage;
    }
  }
};
