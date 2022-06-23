var  dbSettings = require('../../database/connection');
const  sql = require('mssql');

async  function  getLeaders() {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  leaders = await  pool.request().query("SELECT * from Leaders");
    return  leaders.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLeadersByUnity(unityId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  leaders = await  pool.request()
    .input('input_parameter', sql.Int, unityId)
    .query("SELECT * from Leaders where UnityId = @input_parameter");
    return  leaders.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLeadersByBranch(branchId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  leaders = await  pool.request()
    .input('input_parameter', sql.Int, branchId)
    .query("SELECT * from Leaders where UnityId IN (SELECT Id from Unities where BranchId = @input_parameter)");
    return  leaders.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLeader(leaderCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  leader = await  pool.request()
    .input('input_parameter', sql.Int, leaderCI)
    .query("SELECT * from Leaders where CI = @input_parameter");
    return  leader.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getAllLeader(leaderCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  leader = await  pool.request()
    .input('input_parameter', sql.Int, leaderCI)
    .query("SELECT * from Leaders where CI = @input_parameter; SELECT * from LeadersFormation where LeaderCI = @input_parameter");
    return  leader.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addLeader(leader) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  insertLeader = await  pool.request()
    .input('CI', sql.Int, leader.CI)
    .input('Name', sql.NVarChar, leader.Name)
		.input('LastName', sql.NVarChar, leader.LastName)
    .input('Age', sql.Int, leader.Age)

    .input('UnityCharge', sql.NVarChar, leader.UnityCharge)
    .input('BirthDate', sql.Date, leader.BirthDate)
    .input('Gender', sql.NVarChar, leader.Gender)
    .input('Email', sql.NVarChar, leader.Email)
    .input('Alergies', sql.NVarChar, leader.Alergies)
    .input('MedicalSecure', sql.NVarChar, leader.MedicalSecure)

		.input('CurrentAntiquity', sql.Int, leader.CurrentAntiquity)
    .input('IsRegistered', sql.Bit, leader.IsRegistered)
    .input('UnityId', sql.Int, leader.UnityId)
    .query('insert into Leaders (CI,Name,LastName,Age,UnityCharge,BirthDate,Gender,Email,Alergies,MedicalSecure,CurrentAntiquity,IsRegistered,UnityId) values (@CI,@Name,@LastName,@Age,@UnityCharge,@BirthDate,@Gender,@Email,@Alergies,@MedicalSecure,@CurrentAntiquity,@IsRegistered,@UnityId)');
    return  insertLeader.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteLeader(leaderCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  leader = await  pool.request()
    .input('input_parameter', sql.Int, leaderCI)
    .query("DELETE FROM Leaders where CI = @input_parameter");
    return  leader.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  updateLeader(leader) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  updateLeader = await  pool.request()
    .input('CI', sql.Int, leader.CI)
    .input('Name', sql.NVarChar, leader.Name)
		.input('LastName', sql.NVarChar, leader.LastName)
    .input('Age', sql.Int, leader.Age)

    .input('UnityCharge', sql.NVarChar, leader.UnityCharge)
    .input('BirthDate', sql.Date, leader.BirthDate)
    .input('Gender', sql.NVarChar, leader.Gender)
    .input('Email', sql.NVarChar, leader.Email)
    .input('Alergies', sql.NVarChar, leader.Alergies)
    .input('MedicalSecure', sql.NVarChar, leader.MedicalSecure)

		.input('CurrentAntiquity', sql.Int, leader.CurrentAntiquity)
    .input('IsRegistered', sql.Bit, leader.IsRegistered)
    .input('UnityId', sql.Int, leader.UnityId)
    .query('UPDATE Leaders SET Name=@Name,LastName=@LastName,Age=@Age,UnityCharge=@UnityCharge,BirthDate=@BirthDate,Gender=@Gender,Email=@Email,Alergies=@Alergies,MedicalSecure=@MedicalSecure,CurrentAntiquity=@CurrentAntiquity,IsRegistered=@IsRegistered,UnityId=@UnityId WHERE CI = @CI');
    return  updateLeader.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLeaders:  getLeaders,
  getLeadersByUnity: getLeadersByUnity,
  getLeadersByBranch: getLeadersByBranch,
  getLeader:  getLeader,
  getAllLeader: getAllLeader,
  addLeader:  addLeader,
  deleteLeader: deleteLeader,
  updateLeader: updateLeader
}