var  dbSettings = require('../../database/connection');
const  sql = require('mssql');

async  function  getAllFormationStages() {
	try {
    let  pool = await  sql.connect(dbSettings);
    let  allFormationStages = await  pool.request().query("SELECT * from FormationStages");
    return  allFormationStages.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getAllFormationStagesByBranch(branchId) {
	try {
    let  pool = await  sql.connect(dbSettings);
    let  formationStages = await  pool.request()
		.input('input_parameter', sql.Int, branchId)
		.query("SELECT * from FormationStages where BranchId = @input_parameter");
    return  formationStages.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getFormationStageById(id) {
	try {
    let  pool = await  sql.connect(dbSettings);
    let  formationStage = await  pool.request()
		.input('input_parameter', sql.Int, id)
		.query("SELECT * from FormationStages where id = @input_parameter; SELECT * from FormationStageMaterials where FormationStageId = @input_parameter");
    return  formationStage.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addFormationStage(formationStage) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  insertFormationStage = await  pool.request()
    .input('Id', sql.Int, formationStage.Id)
    .input('Name', sql.NVarChar, formationStage.Name)
		.input('BranchId', sql.Int, formationStage.BranchId)
    .input('CorrespondantAge', sql.Int, formationStage.CorrespondantAge)
    .query('insert into FormationStages (Id,Name,BranchId,CorrespondantAge) values (@Id,@Name,@BranchId,@CorrespondantAge)');
    return  insertFormationStage.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteFormationStage(id) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  formationStage = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("DELETE FROM FormationStages where Id = @input_parameter");
    return  formationStage.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  updateFormationStage(formationStage) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  updateFormationStage = await  pool.request()
    .input('Id', sql.Int, formationStage.Id)
    .input('Name', sql.NVarChar, formationStage.Name)
		.input('BranchId', sql.Int, formationStage.BranchId)
    .input('CorrespondantAge', sql.Int, formationStage.CorrespondantAge)
    .query('UPDATE FormationStages SET Name=@Name,BranchId=@BranchId,CorrespondantAge=@CorrespondantAge WHERE Id = @Id');
    return  updateFormationStage.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAllFormationStages: getAllFormationStages,
	getAllFormationStagesByBranch: getAllFormationStagesByBranch,
	getFormationStageById: getFormationStageById,
	addFormationStage: addFormationStage,
	deleteFormationStage: deleteFormationStage,
	updateFormationStage: updateFormationStage,
}