const express = require("express");
var collaboratorService = require("../app/services/collaboratorService");
const router = express.Router();

router.route('').get((request, response) => {
  collaboratorService.getCollaborators().then((data) => {
    response.json(data[0]);
  })
})

router.route('').post((request, response) => {
  let  collaborator = { ...request.body }
  collaboratorService.addCollaborator(collaborator).then(data  => {
    response.status(201).json(data);
  })
})

router.route('/:id').get((request, response) => {
  collaboratorService.getCollaborator(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/unity/:id').get((request, response) => {
  collaboratorService.getCollaboratorsByUnity(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/branch/:id').get((request, response) => {
  collaboratorService.getCollaboratorsByBranch(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/:id').delete((request, response) => {
  collaboratorService.deleteCollaborator(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('').put((request, response) => {
  let  collaborator = { ...request.body }
  collaboratorService.updateCollaborator(collaborator).then(data  => {
    response.status(201).json(data);
  })
})

module.exports = router;