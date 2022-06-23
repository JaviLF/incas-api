const express = require("express");
var unityService = require("../app/services/unityService");
const router = express.Router();

router.route('').get((request, response) => {
  unityService.getUnities().then((data) => {
    response.json(data[0]);
  })
})

router.route('').post((request, response) => {
  let  unity = { ...request.body }
  unityService.addUnity(unity).then(data  => {
    response.status(201).json(data);
  })
})

router.route('/:id').get((request, response) => {
  unityService.getUnity(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/all/:id').get((request, response) => {
  unityService.getAllUnity(request.params.id).then((data) => {
    response.json({unity_info: data[0],
                  leaders: data[1],
                  beneficiaries: data[2],
                  collaborators: data[3]});
  })
})

router.route('/branch/:id').get((request, response) => {
  unityService.getUnitiesByBranch(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/:id').delete((request, response) => {
  unityService.deleteUnity(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('').put((request, response) => {
  let  unity = { ...request.body }
  unityService.updateUnity(unity).then(data  => {
    response.status(201).json(data);
  })
})

module.exports = router;