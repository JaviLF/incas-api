var  dbSettings = require('../../database/connection');
const  sql = require('mssql');

async  function  getUnities() {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  unities = await  pool.request().query("SELECT * from Unities");
    return  unities.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getUnity(unityId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  unity = await  pool.request()
    .input('input_parameter', sql.Int, unityId)
    .query("SELECT * from Unities where Id = @input_parameter");
    return  unity.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getAllUnity(unityId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  unity = await  pool.request()
    .input('input_parameter', sql.Int, unityId)
    .query("SELECT * from Unities where Id = @input_parameter;SELECT * from Leaders where UnityId = @input_parameter; SELECT * from Beneficiaries where UnityId = @input_parameter; SELECT * from Collaborators where UnityId = @input_parameter");
    return  unity.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getUnitiesByBranch(branchId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  unities = await  pool.request()
    .input('input_parameter', sql.Int, branchId)
    .query("SELECT * from Unities where BranchId = @input_parameter");
    return  unities.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addUnity(unity) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  insertUnity = await  pool.request()
    .input('Id', sql.Int, unity.Id)
    .input('Name', sql.NVarChar, unity.Name)
		.input('BranchId', sql.Int, unity.BranchId)
    .input('LeaderInChargeId', sql.Int, unity.LeaderInChargeId)
    .query('insert into Unities (Id,Name,BranchId,LeaderInChargeId) values (@Id,@Name,@BranchId,@LeaderInChargeId)');
    return  insertUnity.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteUnity(unityId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  unity = await  pool.request()
    .input('input_parameter', sql.Int, unityId)
    .query("DELETE FROM Unities where Id = @input_parameter");
    return  unity.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  updateUnity(unity) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  updateUnity = await  pool.request()
    .input('Id', sql.Int, unity.Id)
    .input('Name', sql.NVarChar, unity.Name)
		.input('BranchId', sql.Int, unity.BranchId)
    .input('LeaderInChargeId', sql.Int, unity.LeaderInChargeId)
    .query('UPDATE Unities SET Name=@Name,BranchId=@BranchId,LeaderInChargeId=@LeaderInChargeId WHERE Id = @Id');
    return  updateUnity.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getUnities:  getUnities,
  getUnity:  getUnity,
  getAllUnity: getAllUnity,
  getUnitiesByBranch: getUnitiesByBranch,
  addUnity:  addUnity,
  deleteUnity: deleteUnity,
  updateUnity: updateUnity
}