var  dbSettings = require('../../database/connection');
const  sql = require('mssql');

async  function  getBranches() {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  branches = await  pool.request().query("SELECT * from Branches");
    return  branches.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getBranch(branchId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  branch = await  pool.request()
    .input('input_parameter', sql.Int, branchId)
    .query("SELECT * from Branches where Id = @input_parameter");
    return  branch.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addBranch(branch) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  insertBranch = await  pool.request()
    .input('Id', sql.Int, branch.Id)
    .input('Name', sql.NVarChar, branch.Name)
		.input('StartAge', sql.Int, branch.StartAge)
    .input('FinishAge', sql.Int, branch.FinishAge)
    .query('insert into Branches (Id,Name,StartAge,FinishAge) values (@Id,@Name,@StartAge,@FinishAge)');
    return  insertBranch.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getBranches:  getBranches,
  getBranch:  getBranch,
  addBranch: addBranch,
}