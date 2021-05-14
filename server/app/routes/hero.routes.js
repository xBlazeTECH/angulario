module.exports = app => {
  const heros = require("../controllers/hero.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", heros.create);

  // Retrieve all Tutorials
  router.get("/", heros.findAll);

  // Retrieve all published Tutorials
  router.get("/published", heros.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", heros.findOne);

  // Update a Tutorial with id
  router.put("/:id", heros.update);

  // Delete a Tutorial with id
  router.delete("/:id", heros.delete);

  // Create a new Tutorial
  router.delete("/", heros.deleteAll);

  app.use('/api/hero', router);
};
