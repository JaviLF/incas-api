const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const beneficiarios = require("./routes/beneficiaries");
const dirigentes = require("./routes/leaders");
const colaboradores = require("./routes/collaborators");
const unidades = require("./routes/unities");
const formacion_dirigente = require("./routes/leadersFormation")
const ramas = require("./routes/branches");
const ROUTE_URL = "/api";

class Application {
  constructor() {
    this.express = express();
    this.setUpCors();
    this.setUpExpress();
    this.setUpRoutes();
    this.setUpNotFoundRoute();
    this.setUpPort();
  }

  setUpRoutes() {
    this.express.use(ROUTE_URL + "/beneficiarios", beneficiarios);
    this.express.use(ROUTE_URL + "/dirigentes", dirigentes);
    this.express.use(ROUTE_URL + "/colaboradores", colaboradores);
    this.express.use(ROUTE_URL + "/unidades", unidades);
    this.express.use(ROUTE_URL + "/ramas", ramas);
    this.express.use(ROUTE_URL + "/formacion_dirigente", formacion_dirigente)
  }

  setUpExpress() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  setUpPort() {
    this.express.set("port", process.env.PORT || 8000);
  }

  setUpNotFoundRoute() {
    this.express.use((request, response, next) => {
      const error = new Error("Resource not found");
      error.status = 404;
      next(error);
    });
  }

  setUpCors() {
    this.express.use(cors());
  }
}

module.exports = new Application().express;