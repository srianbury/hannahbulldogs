function formatErrors(errors) {
  return errors
    .map(error => `${error.param}: ${error.msg}.`)
    .join(" ");
}

export default formatErrors;
