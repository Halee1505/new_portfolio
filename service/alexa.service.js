const getAlexaRequest = (req) => {
  console.log("alexa request body", req.body);
  return "ok";
};
const getAlexaResponse = (req) => {
  const {
    request: { type },
  } = req.body;
  return type;
};

module.exports = {
  getAlexaRequest,
  getAlexaResponse,
};
