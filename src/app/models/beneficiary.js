class Beneficiary{
	constructor(CI,Name,LastName,Age,CurrentLevel,BirthDate,Gender,EducationCenter,EducationLevel,AttorneyName,AttorneyPhone,Alergies,BloodType,MedicalSecure,CurrentAntiquity,IsRegistered,UnityId){
		this.CI=CI;
		this.Name=Name;
		this.LastName=LastName;
		this.Age=Age;
		this.CurrentLevel=CurrentLevel;
		
		this.BirthDate=BirthDate;
		this.Gender=Gender;
		this.EducationCenter=EducationCenter;
		this.EducationLevel=EducationLevel;
		this.AttorneyName=AttorneyName;
		this.AttorneyPhone=AttorneyPhone;
		this.Alergies=Alergies;
		this.BloodType=BloodType;
		this.MedicalSecure=MedicalSecure;

		this.CurrentAntiquity=CurrentAntiquity;
		this.IsRegistered=IsRegistered;
		this.UnityId=UnityId;
	}
}

module.exports = Beneficiary;