const AlexaService = require("../service/alexa.service");

class AlexaController {
  request(req, res, next) {
    AlexaService.getAlexaRequest(req);
    res.send("request");
  }
}
module.exports = new AlexaController();
