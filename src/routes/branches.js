const express = require("express");
var branchService = require("../app/services/branchService");
const router = express.Router();

router.route('').get((request, response) => {
  branchService.getBranches().then((data) => {
    response.json(data[0]);
  })
})

router.route('').post((request, response) => {
  let  branch = { ...request.body }
  branchService.addBranch(branch).then(data  => {
    response.status(201).json(data);
  })
})

router.route('/:id').get((request, response) => {
  branchService.getBranch(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

/*router.route('').put((request, response) => {
  let  branch = { ...request.body }
  branchService.(branch).then(data  => {
    response.status(201).json(data);
  })
})*/

module.exports = router;