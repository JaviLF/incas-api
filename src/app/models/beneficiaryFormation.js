class BeneficiaryFormation{
	constructor(Id,BeneficiaryCI,FormationStageId,AccomplishedDate,BeneficiaryAgeThen,Observations){
		this.Id=Id;
		this.BeneficiaryCI=BeneficiaryCI;
		this.FormationStageId=FormationStageId;
		this.AccomplishedDate=AccomplishedDate;
		this.BeneficiaryAgeThen=BeneficiaryAgeThen;
		this.Observations=Observations;
	}
}

module.exports = BeneficiaryFormation;