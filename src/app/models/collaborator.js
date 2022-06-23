class Collaborator{
	constructor(CI,Name,LastName,Age,ProfesionalLevel,BirthDate,Gender,Email,Alergies,MedicalSecure,IsRegistered,UnityId){
		this.CI=CI;
		this.Name=Name;
		this.LastName=LastName;
		this.Age=Age;
		this.ProfesionalLevel=ProfesionalLevel;

		this.BirthDate=BirthDate;
		this.Gender=Gender;
		this.Email=Email;
		this.Alergies=Alergies;
		this.MedicalSecure=MedicalSecure;
		
		this.IsRegistered=IsRegistered;
		this.UnityId=UnityId;
	}
}

module.exports = Collaborator;