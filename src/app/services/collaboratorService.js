var  dbSettings = require('../../database/connection');
const  sql = require('mssql');

async  function  getCollaborators() {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  collaborators = await  pool.request().query("SELECT * from Collaborators");
    return  collaborators.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getCollaboratorsByUnity(unityId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  collaborators = await  pool.request()
    .input('input_parameter', sql.Int, unityId)
    .query("SELECT * from Collaborators where UnityId = @input_parameter");
    return  collaborators.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getCollaboratorsByBranch(branchId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  collaborators = await  pool.request()
    .input('input_parameter', sql.Int, branchId)
    .query("SELECT * from Collaborators where UnityId IN (SELECT Id from Unities where BranchId = @input_parameter)");
    return  collaborators.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getCollaborator(collaboratorCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  collaborator = await  pool.request()
    .input('input_parameter', sql.Int, collaboratorCI)
    .query("SELECT * from Collaborators where CI = @input_parameter");
    return  collaborator.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addCollaborator(collaborator) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  insertCollaborator = await  pool.request()
    .input('CI', sql.Int, collaborator.CI)
    .input('Name', sql.NVarChar, collaborator.Name)
		.input('LastName', sql.NVarChar, collaborator.LastName)
    .input('Age', sql.Int, collaborator.Age)
    .input('ProfesionalLevel', sql.NVarChar, collaborator.ProfesionalLevel)

    .input('BirthDate', sql.Date, collaborator.BirthDate)
    .input('Gender', sql.NVarChar, collaborator.Gender)
    .input('Email', sql.NVarChar, collaborator.Email)
    .input('Alergies', sql.NVarChar, collaborator.Alergies)
    .input('MedicalSecure', sql.NVarChar, collaborator.MedicalSecure)

    .input('IsRegistered', sql.Bit, collaborator.IsRegistered)
    .input('UnityId', sql.Int, collaborator.UnityId)
    .query('insert into Collaborators (CI,Name,LastName,Age,ProfesionalLevel,BirthDate,Gender,Email,Alergies,MedicalSecure,IsRegistered,UnityId) values (@CI,@Name,@LastName,@Age,@ProfesionalLevel,@BirthDate,@Gender,@Email,@Alergies,@MedicalSecure,@IsRegistered,@UnityId)');
    return  insertCollaborator.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteCollaborator(collaboratorCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  collaborator = await  pool.request()
    .input('input_parameter', sql.Int, collaboratorCI)
    .query("DELETE FROM Collaborators where CI = @input_parameter");
    return  collaborator.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  updateCollaborator(collaborator) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  updateCollaborator = await  pool.request()
    .input('CI', sql.Int, collaborator.CI)
    .input('Name', sql.NVarChar, collaborator.Name)
		.input('LastName', sql.NVarChar, collaborator.LastName)
    .input('Age', sql.Int, collaborator.Age)
    .input('ProfesionalLevel', sql.NVarChar, collaborator.ProfesionalLevel)

    .input('BirthDate', sql.Date, collaborator.BirthDate)
    .input('Gender', sql.NVarChar, collaborator.Gender)
    .input('Email', sql.NVarChar, collaborator.Email)
    .input('Alergies', sql.NVarChar, collaborator.Alergies)
    .input('MedicalSecure', sql.NVarChar, collaborator.MedicalSecure)

    .input('IsRegistered', sql.Bit, collaborator.IsRegistered)
    .input('UnityId', sql.Int, collaborator.UnityId)
    .query('UPDATE Collaborators SET Name=@Name,LastName=@LastName,Age=@Age,ProfesionalLevel=@ProfesionalLevel,BirthDate=@BirthDate,Gender=@Gender,Email=@Email,Alergies=@Alergies,MedicalSecure=@MedicalSecure,IsRegistered=@IsRegistered,UnityId=@UnityId WHERE CI = @CI');
    return  updateCollaborator.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getCollaborators:  getCollaborators,
  getCollaboratorsByUnity: getCollaboratorsByUnity,
  getCollaboratorsByBranch: getCollaboratorsByBranch,
  getCollaborator:  getCollaborator,
  addCollaborator:  addCollaborator,
  deleteCollaborator: deleteCollaborator,
  updateCollaborator: updateCollaborator
}