var  dbSettings = require('../../database/connection');
const  sql = require('mssql');
const Beneficiary = require('../models/beneficiary');

async  function  getBeneficiaries() {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  beneficiaries = await  pool.request().query("SELECT * from Beneficiaries");
    return  beneficiaries.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getBeneficiariesByUnity(unityId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  beneficiaries = await  pool.request()
    .input('input_parameter', sql.Int, unityId)
    .query("SELECT * from Beneficiaries where UnityId = @input_parameter");
    return  beneficiaries.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getBeneficiariesByBranch(branchId) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  beneficiaries = await  pool.request()
    .input('input_parameter', sql.Int, branchId)
    .query("SELECT * from Beneficiaries where UnityId IN (SELECT Id from Unities where BranchId = @input_parameter)");
    return  beneficiaries.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getBeneficiary(beneficiaryCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  beneficiary = await  pool.request()
    .input('input_parameter', sql.Int, beneficiaryCI)
    .query("SELECT * from Beneficiaries where CI = @input_parameter");
    return  beneficiary.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addBeneficiary(beneficiary) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  insertBeneficiary = await  pool.request()
    .input('CI', sql.Int, beneficiary.CI)
    .input('Name', sql.NVarChar, beneficiary.Name)
		.input('LastName', sql.NVarChar, beneficiary.LastName)
    .input('Age', sql.Int, beneficiary.Age)
    .input('CurrentLevel', sql.NVarChar, beneficiary.CurrentLevel)
    
    .input('BirthDate', sql.Date, beneficiary.BirthDate)
    .input('Gender', sql.NVarChar, beneficiary.Gender)
    .input('EducationCenter', sql.NVarChar, beneficiary.EducationCenter)
    .input('EducationLevel', sql.NVarChar, beneficiary.EducationLevel)
    .input('AttorneyName', sql.NVarChar, beneficiary.AttorneyName)
    .input('AttorneyPhone', sql.Int, beneficiary.AttorneyPhone)
    .input('Alergies', sql.NVarChar, beneficiary.Alergies)
    .input('BloodType', sql.NVarChar, beneficiary.BloodType)
    .input('MedicalSecure', sql.NVarChar, beneficiary.MedicalSecure)

		.input('CurrentAntiquity', sql.Int, beneficiary.CurrentAntiquity)
    .input('IsRegistered', sql.Bit, beneficiary.IsRegistered)
    .input('UnityId', sql.Int, beneficiary.UnityId)
    .query('insert into Beneficiaries (CI,Name,LastName,Age,CurrentLevel,BirthDate,Gender,EducationCenter,EducationLevel,AttorneyName,AttorneyPhone,Alergies,BloodType,MedicalSecure,CurrentAntiquity,IsRegistered,UnityId) values (@CI,@Name,@LastName,@Age,@CurrentLevel,@BirthDate,@Gender,@EducationCenter,@EducationLevel,@AttorneyName,@AttorneyPhone,@Alergies,@BloodType,@MedicalSecure,@CurrentAntiquity,@IsRegistered,@UnityId)');
    return  insertBeneficiary.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}


async function deleteBeneficiary(beneficiaryCI) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  beneficiary = await  pool.request()
    .input('input_parameter', sql.Int, beneficiaryCI)
    .query("DELETE FROM Beneficiaries where CI = @input_parameter");
    return  beneficiary.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  updateBeneficiary(beneficiary) {
  try {
    let  pool = await  sql.connect(dbSettings);
    let  updateBeneficiary = await  pool.request()
    .input('CI', sql.Int, beneficiary.CI)
    .input('Name', sql.NVarChar, beneficiary.Name)
		.input('LastName', sql.NVarChar, beneficiary.LastName)
    .input('Age', sql.Int, beneficiary.Age)
    .input('CurrentLevel', sql.NVarChar, beneficiary.CurrentLevel)

    .input('BirthDate', sql.Date, beneficiary.BirthDate)
    .input('Gender', sql.NVarChar, beneficiary.Gender)
    .input('EducationCenter', sql.NVarChar, beneficiary.EducationCenter)
    .input('EducationLevel', sql.NVarChar, beneficiary.EducationLevel)
    .input('AttorneyName', sql.NVarChar, beneficiary.AttorneyName)
    .input('AttorneyPhone', sql.Int, beneficiary.AttorneyPhone)
    .input('Alergies', sql.NVarChar, beneficiary.Alergies)
    .input('BloodType', sql.NVarChar, beneficiary.BloodType)
    .input('MedicalSecure', sql.NVarChar, beneficiary.MedicalSecure)

		.input('CurrentAntiquity', sql.Int, beneficiary.CurrentAntiquity)
    .input('IsRegistered', sql.Bit, beneficiary.IsRegistered)
    .input('UnityId', sql.Int, beneficiary.UnityId)
    .query('UPDATE Beneficiaries SET Name=@Name,LastName=@LastName,Age=@Age,CurrentLevel=@CurrentLevel,BirthDate=@BirthDate,Gender=@Gender,EducationCenter=@EducationCenter,EducationLevel=@EducationLevel,AttorneyName=@AttorneyName,AttorneyPhone=@AttorneyPhone,Alergies=@Alergies,BloodType=@BloodType,MedicalSecure=@MedicalSecure, ,CurrentAntiquity=@CurrentAntiquity,IsRegistered=@IsRegistered,UnityId=@UnityId WHERE CI = @CI');
    return  updateBeneficiary.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getBeneficiaries:  getBeneficiaries,
  getBeneficiariesByUnity: getBeneficiariesByUnity,
  getBeneficiariesByBranch: getBeneficiariesByBranch,
  getBeneficiary:  getBeneficiary,
  addBeneficiary:  addBeneficiary,
  deleteBeneficiary: deleteBeneficiary,
  updateBeneficiary: updateBeneficiary
}