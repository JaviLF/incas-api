const express = require("express");
var leaderService = require("../app/services/leaderService");
const router = express.Router();

router.route('').get((request, response) => {
  leaderService.getLeaders().then((data) => {
    response.json(data[0]);
  })
})

router.route('').post((request, response) => {
  let  leader = { ...request.body }
  leaderService.addLeader(leader).then(data  => {
    response.status(201).json(data);
  })
})

router.route('/:id').get((request, response) => {
  leaderService.getLeader(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/all/:id').get((request, response) => {
  leaderService.getAllLeader(request.params.id).then((data) => {
    response.json({leader_info: data[0], leader_formation: data[1]});
  })
})

router.route('/unity/:id').get((request, response) => {
  leaderService.getLeadersByUnity(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/branch/:id').get((request, response) => {
  leaderService.getLeadersByBranch(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/:id').delete((request, response) => {
  leaderService.deleteLeader(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('').put((request, response) => {
  let  leader = { ...request.body }
  leaderService.updateLeader(leader).then(data  => {
    response.status(201).json(data);
  })
})

module.exports = router;