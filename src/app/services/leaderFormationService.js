var  dbSettings = require('../../database/connection');
const  sql = require('mssql');

async  function  getAllLeaderFormation(leaderCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  formationList = await  pool.request()
    .input('input_parameter', sql.Int, leaderCI)
    .query("SELECT * from LeadersFormation where LeaderCI = @input_parameter");
    return  formationList.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLeaderModuleFormation(id) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  formationModule = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LeadersFormation where Id = @input_parameter");
    return  formationModule.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addLeaderFormation(leaderFormation) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  insertLeaderFormation = await  pool.request()
    .input('Id', sql.Int, leaderFormation.Id)
    .input('LeaderCI', sql.Int, leaderFormation.LeaderCI)
		.input('Module', sql.NVarChar, leaderFormation.Module)
    .input('AccomplishedDate', sql.Date, leaderFormation.AccomplishedDate)
    .input('Observations', sql.NVarChar, leaderFormation.Observations)
    .query('insert into LeadersFormation (Id,LeaderCI,Module,AccomplishedDate,Observations) values (@Id,@LeaderCI,@Module,@AccomplishedDate,@Observations)');
    return  insertLeaderFormation.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteLeaderModuleFormation(id) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  formationModule = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("DELETE FROM LeadersFormation where Id = @input_parameter");
    return  formationModule.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  updateLeaderModuleFormation(leaderFormation) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  updateLeaderFormation = await  pool.request()
    .input('Id', sql.Int, leaderFormation.Id)
    .input('LeaderCI', sql.Int, leaderFormation.LeaderCI)
		.input('Module', sql.NVarChar, leaderFormation.Module)
    .input('AccomplishedDate', sql.Date, leaderFormation.AccomplishedDate)
    .input('Observations', sql.NVarChar, leaderFormation.Observations)
    .query('UPDATE LeadersFormation SET LeaderCI=@LeaderCI,Module=@Module,AccomplishedDate=@AccomplishedDate,Observations=@Observations WHERE Id = @Id');
    return  updateLeaderFormation.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAllLeaderFormation: getAllLeaderFormation,
  getLeaderModuleFormation:  getLeaderModuleFormation,
  addLeaderFormation: addLeaderFormation,
  deleteLeaderModuleFormation: deleteLeaderModuleFormation,
  updateLeaderModuleFormation: updateLeaderModuleFormation,
}