class Leader{
	constructor(CI,Name,LastName,Age,UnityCharge,BirthDate,Gender,Email,Alergies,MedicalSecure,CurrentAntiquity,IsRegistered,UnityId){
		this.CI=CI;
		this.Name=Name;
		this.LastName=LastName;
		this.Age=Age;

		this.UnityCharge=UnityCharge;
		this.BirthDate=BirthDate;
		this.Gender=Gender;
		this.Email=Email;
		this.Alergies=Alergies;
		this.MedicalSecure=MedicalSecure;

		this.CurrentAntiquity=CurrentAntiquity;
		this.IsRegistered=IsRegistered;
		this.UnityId=UnityId;
	}
}

module.exports = Leader;