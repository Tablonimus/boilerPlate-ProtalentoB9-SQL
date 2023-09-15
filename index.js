const { app, port } = require("./src/app");
const { sequelize } = require("./src/db");

// /* -------SINCRONIZAMOS BASE DE DATOS Y SERVIDOR EXPRESS------------- */
sequelize.sync({ force: false }).then(
  app.listen(port, () => {
    console.log(`Servidor levantado en el puerto: ${port}`);
  })
);
