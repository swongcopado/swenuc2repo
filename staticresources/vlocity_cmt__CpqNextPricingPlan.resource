{
    "dataPackId": "",
    "dataPacks": [
        {
            "VlocityDataPackData": {
                "%vlocity_namespace%__PricingPlan__c": [
                    {
                        "%vlocity_namespace%__Code__c": "STANDARD_PRICING_PLAN",
                        "%vlocity_namespace%__Description__c": "",
                        "%vlocity_namespace%__EffectiveFromDate__c": "",
                        "%vlocity_namespace%__EffectiveUntilDate__c": "",
                        "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                        "%vlocity_namespace%__IsActive__c": true,
                        "%vlocity_namespace%__PricingPlanStep__c": [
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "62d15659-459f-1240-808c-3b03d5218bd6",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": false,
                                "%vlocity_namespace%__MethodName__c": "getMatrixPrice",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 5,
                                "Name": "Get Matrix Price",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Get Matrix Price"
                            },
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "be96a233-f8eb-bda7-cb1b-2dde97b26f01",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": true,
                                "%vlocity_namespace%__MethodName__c": "generatePricingKeys",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 10,
                                "Name": "Generate Pricing Keys",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Generate Pricing Keys"
                            },
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "48d8cff8-332a-fdcd-917c-13d2e11f5991",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": true,
                                "%vlocity_namespace%__MethodName__c": "getCompiledPricingData",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 20,
                                "Name": "Get Compiled Data",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Get Compiled Data"
                            },
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "22d1a88b-b037-6ae3-faaa-82ccbf737391",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": true,
                                "%vlocity_namespace%__MethodName__c": "getTightestMatchEntries",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 30,
                                "Name": "Initialize Pricing Variables",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Get Tightest Match PLEs"
                            },
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "906fbea3-81f2-19fe-37f8-981c9960b9e1",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": true,
                                "%vlocity_namespace%__MethodName__c": "applyCharges",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 40,
                                "Name": "Apply Charges",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Apply Charges"
                            },
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "4a6fb197-59c3-1e38-93fd-89475c876124",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": true,
                                "%vlocity_namespace%__MethodName__c": "applyOfferOverridesAndAdjustments",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 50,
                                "Name": "Apply Offer Overrides And Adjustments",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Apply Offer Overrides And Adjustments"
                            },
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "bdc2f13e-6117-eee1-ee0b-ddd8aa7bedad",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": true,
                                "%vlocity_namespace%__MethodName__c": "applyPromotionOverridesAndAdjustments",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 60,
                                "Name": "Apply Promotion Overrides And Adjustments",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Apply Promotion Overrides And Adjustments"
                            },
                            {
                                "%vlocity_namespace%__Description__c": "",
                                "%vlocity_namespace%__GlobalKey__c": "223f6077-5b04-14cc-e8a9-ef0708502a51",
                                "%vlocity_namespace%__ImplementationName__c": "CpqPricingService",
                                "%vlocity_namespace%__IsActive__c": true,
                                "%vlocity_namespace%__MethodName__c": "calculateRollups",
                                "%vlocity_namespace%__PricingPlanId__c": {
                                    "%vlocity_namespace%__GlobalKey__c": "7d610715-25f7-6949-3e21-0c24d7152cc1",
                                    "VlocityDataPackType": "VlocityMatchingKeyObject",
                                    "VlocityMatchingRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan",
                                    "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c"
                                },
                                "%vlocity_namespace%__Sequence__c": 70,
                                "Name": "Calculate Rollups",
                                "VlocityDataPackIsIncluded": true,
                                "VlocityDataPackType": "SObject",
                                "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlanStep__c",
                                "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlanStep__c/Calculate Rollups"
                            }
                        ],
                        "Name": "Standard Pricing Plan",
                        "VlocityDataPackIsIncluded": true,
                        "VlocityDataPackType": "SObject",
                        "VlocityRecordSObjectType": "%vlocity_namespace%__PricingPlan__c",
                        "VlocityRecordSourceKey": "%vlocity_namespace%__PricingPlan__c/Standard Pricing Plan"
                    }    
                ],
                "VlocityDataPackIsIncluded": true,
                "VlocityDataPackKey": "PricingPlan/Standard Pricing Plan",
                "VlocityDataPackType": "PricingPlan"
            },
            "VlocityDataPackIsIncluded": true,
            "VlocityDataPackKey": "PricingPlan/Standard Pricing Plan",
            "VlocityDataPackName": "Standard Pricing Plan",
            "VlocityDataPackRelationshipType": "Primary",
            "VlocityDataPackStatus": "Success",
            "VlocityDataPackType": "PricingPlan"
        }
    ],
    "name": "VlocityDeploy",
    "primaryDataPackKey": "VlocityDeploy",
    "processMultiple": true,
    "status": "Complete",
    "version": 1
}
