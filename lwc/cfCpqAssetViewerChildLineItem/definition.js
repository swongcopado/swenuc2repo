let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\n      \"Name\": \"Business Internt Essentials\",\n      \"Location\": \"Mission St\",\n      \"Quantity\": {\n        \"value\": 2\n      },\n      \"vlocity_cmt__RecurringPrice__c\": 355.5,\n      \"vlocity_cmt__OneTimeTotal__c\": {\n        \"originalValue\": 444.5\n      },\n      \"vlocity_cmt__ProvisioningStatus__c\": {\n        \"value\": \"Active\"\n      },\n      \"description\": \"Public WIFI | Internet Sercurity...\",\n      \"lineitems\": {\n        \"records\": [\n          {\n            \"Name\": \"Child Internet 2\",\n            \"Quantity\": {\n              \"value\": 2\n            },\n            \"vlocity_cmt__RecurringPrice__c\": 200.5,\n            \"vlocity_cmt__OneTimeTotal__c\": {\n              \"originalValue\": 244.5\n            },\n            \"vlocity_cmt__ProvisioningStatus__c\": {\n              \"value\": \"Active\"\n            },\n            \"description\": \"Public WIFI | Internet Sercurity...\",\n            \"lineitems\": {\n              \"records\": [\n                {\n                  \"Name\": \"Grand Child Child Internet 2\",\n                  \"Quantity\": {\n                    \"value\": 2\n                  },\n                  \"vlocity_cmt__RecurringPrice__c\": 200.5,\n                  \"vlocity_cmt__OneTimeTotal__c\": {\n                    \"originalValue\": 244.5\n                  },\n                  \"vlocity_cmt__ProvisioningStatus__c\": {\n                    \"value\": \"Active\"\n                  },\n                  \"description\": \"Public WIFI | Internet Sercurity...\"\n                }\n              ]\n            }\n          }\n        ]\n      }\n    }","dsDelay":0,"resultVar":""}},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqAssetViewerChildLineItem_1_Vlocity","Id":"0Rb5i000001HJ7u0AE","ManageableState":"unmanaged","MasterLabel":"cfCpqAssetViewerChildLineItem_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"states":[{"blankCardState":true,"components":{"layer-0":{"children":[]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"fields":[],"isSmartAction":false,"name":"blankState","smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}},{"actions":[],"blankCardState":false,"childCards":["cpqCartInlineChildPromoForAssetViewer"],"components":{"layer-0":{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":1,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 "},"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqCartInlineChildPromoForAssetViewer","cardNode":"{record.promotions.records}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"11","isResponsive":false},"stateIndex":1,"styleObject":{"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 "},"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-4-Action-0","key":"element_element_block_3_1_action_0_1","name":"Action","parentElementKey":"element_block_3_1","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"Record":{"targetAction":"view","targetId":"{Id.value}","targetName":"Asset"},"displayName":"{Name}","id":"flex-action-1629972879701","openUrlIn":"New Tab/Window","targetType":"Record","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"9","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__asset-name","container":{"class":""},"customClass":"cpq__asset-name","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__asset-name","container":{"class":""},"customClass":"cpq__asset-name","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-4-Field-1","key":"element_element_block_3_1_outputField_1_1","name":"Field","parentElementKey":"element_block_3_1","property":{"card":"{card}","fieldName":"Product2.vlocity_cmt__VersionLabel__c","placeholder":"","record":"{record}","type":"text"},"size":{"default":3,"isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__asset-version slds-text-body_small ","container":{"class":"cpq__asset-version slds-text-body_small"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":3,"isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__asset-version slds-text-body_small ","container":{"class":"cpq__asset-version slds-text-body_small"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":3,"isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-4-Text-2","key":"element_element_block_3_1_outputField_2_1","name":"Text","parentElementKey":"element_block_3_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22color:%20#3e3e3c;%20font-size:%2012pt;%22%3E%7Bdescription%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-4","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"hierarchy-name slds-p-around_x-small slds-p-left_large slds-p-top_small ","container":{"class":"hierarchy-name"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"},{"label":"left:large","size":"large","type":"left"},{"label":"top:small","size":"small","type":"top"}],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"hierarchy-name slds-p-around_x-small slds-p-left_large slds-p-top_small ","container":{"class":"hierarchy-name"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"},{"label":"left:large","size":"large","type":"left"},{"label":"top:small","size":"small","type":"top"}],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Block-2-Text-0","key":"element_element_element_block_3_1_block_1_1_outputField_0_1","name":"Text","parentElementKey":"element_element_block_3_1_block_1_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BQuantity.value%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-top_x-small slds-p-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"left:small","size":"small","type":"left"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-top_x-small slds-p-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"left:small","size":"small","type":"left"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Block-2-Text-1","key":"element_element_element_block_3_1_block_1_1_outputField_1_1","name":"Text","parentElementKey":"element_element_block_3_1_block_1_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E$%7Bvlocity_cmt__RecurringCharge__c.value%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-top_x-small slds-p-left_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-top_x-small slds-p-left_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-1-Block-2-Text-0","key":"element_element_element_element_block_3_1_block_1_1_block_2_1_outputField_0_1","name":"Text","parentElementKey":"element_element_element_block_3_1_block_1_1_block_2_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E$%7Bvlocity_cmt__OneTimeCharge__c.value%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-1-Block-2-Text-1","key":"element_element_element_element_block_3_1_block_1_1_block_2_1_outputField_1_1","name":"Text","parentElementKey":"element_element_element_block_3_1_block_1_1_block_2_1","property":{"card":"{card}","data-conditions":{"group":[{"field":"vlocity_cmt__OneTimeCharge__c.originalValue","id":"state-new-condition-7","operator":"!=","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22text-decoration:%20line-through;%20color:%20#b0adab;%22%3E%7Bvlocity_cmt__OneTimeCharge__c.originalValue%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-2-Block-2","key":"element_element_element_block_3_1_block_1_1_block_2_1","name":"Block","parentElementKey":"element_element_block_3_1_block_1_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Block-2-Text-3","key":"element_element_element_block_3_1_block_1_1_outputField_3_1","name":"Text","parentElementKey":"element_element_block_3_1_block_1_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E$%7Bvlocity_cmt__OneTimeTotal__c.value%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-top_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-top_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-5","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-6","name":"FlexCard","property":{"cardName":"cpqAssetViewerChildLineItem_1_Vlocity","cardNode":"{record.childAssets.records}","data-conditions":{"group":[{"field":"childAssets.records","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isRecursive":true,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"hierarchy-state ","container":{"class":"hierarchy-state"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"hierarchy-state ","container":{"class":"hierarchy-state"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_top","width":"1"},"class":"slds-card slds-border_top ","container":{"class":"slds-card"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #cccccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAssetViewerChildLineItem","Id":"0ko5i000000ktMTQAA","OmniUiCardKey":"cpqAssetViewerChildLineItem/Vlocity/1/1621245573979"};
  export default definition