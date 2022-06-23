const express = require("express");
var leaderFormationService = require("../app/services/leaderFormationService");
const router = express.Router();

router.route('/leader/:id').get((request, response) => {
  leaderFormationService.getAllLeaderFormation(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('').post((request, response) => {
  let  leaderModuleFormation = { ...request.body }
  leaderFormationService.addLeaderFormation(leaderModuleFormation).then(data  => {
    response.status(201).json(data);
  })
})

router.route('/:id').get((request, response) => {
  leaderFormationService.getLeaderModuleFormation(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/:id').delete((request, response) => {
  leaderFormationService.deleteLeaderModuleFormation(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('').put((request, response) => {
  let  leaderModuleFormation = { ...request.body }
  leaderFormationService.updateLeaderModuleFormation(leaderModuleFormation).then(data  => {
    response.status(201).json(data);
  })
})

module.exports = router;