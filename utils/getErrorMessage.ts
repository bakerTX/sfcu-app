function getErrorMessage(e: unknown) {
  let message;
  if (e instanceof Error) message = e.message;
  else message = String(e);

  return message;
}

export default getErrorMessage;
