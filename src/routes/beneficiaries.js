const express = require("express");
var beneficiaryService = require("../app/services/beneficiaryService");
const router = express.Router();

router.route('').get((request, response) => {
  beneficiaryService.getBeneficiaries().then((data) => {
    response.json(data[0]);
  })
})

router.route('').post((request, response) => {
  let  beneficiary = { ...request.body }
  beneficiaryService.addBeneficiary(beneficiary).then(data  => {
    response.status(201).json(data);
  })
})

router.route('/:id').get((request, response) => {
  beneficiaryService.getBeneficiary(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/unity/:id').get((request, response) => {
  beneficiaryService.getBeneficiariesByUnity(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/branch/:id').get((request, response) => {
  beneficiaryService.getBeneficiariesByBranch(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/:id').delete((request, response) => {
  beneficiaryService.deleteBeneficiary(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('').put((request, response) => {
  let  beneficiary = { ...request.body }
  beneficiaryService.updateBeneficiary(beneficiary).then(data  => {
    response.status(201).json(data);
  })
})

module.exports = router;