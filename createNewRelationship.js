//this will create new subrecord "relationship" for the contact record

function createNewRelationshipAfterSubmit(type){
	if (type = 'create'){
		
		var entityID = nlapiGetRecordId();
		nlapiLogExecution('DEBUG', 'entityID', entityID)
		var entityType = nlapiGetRecordType();
		nlapiLogExecution('DEBUG', 'entityType', entityType)
		var OwnerID = nlapiGetFieldValue('custentity_referredby');		
		nlapiLogExecution('DEBUG', 'OwnerID', OwnerID);

		
		
		
		var newrecord = nlapiCreateRecord('customrecord_relationships');
		newrecord.setFieldValue('custrecord_entity_entity',entityID);
		newrecord.setFieldValue('owner',OwnerID);
		newrecord.setFieldValue('custrecordcustrecord_entity_notification', 17);
		
		nlapiSubmitRecord(newrecord, true);
	}
	
	
}


