let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\n\t\"isFSPackageLicenseAvailable\": true,\n\t\"AccountId\": \"0015i00000mydJqAAU\",\n\t\"AccountEntitlements\": {\n\t\t\"entitlements\": [\n\t\t\t{\n\t\t\t\t\"entitlementName\": \"Service Inspection\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"entitlementName\": \"Line Inspection\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"entitlementName\": \"Meter Inspection\"\n\t\t\t}\n\t\t]\n\t}\n}","dsDelay":0,"resultVar":""}},"enableLwc":true,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfSfiEnergyConsoleActionsFSFlyout_2_CME_E_U","Id":"0Rb5i000001HIwLCA4","ManageableState":"unmanaged","MasterLabel":"cfSfiEnergyConsoleActionsFSFlyout_2_CME_E_U","NamespacePrefix":"c"},"multilanguageSupport":true,"requiredPermission":"","selectableMode":"Multi","states":[{"actions":[],"childCards":["sfiEnergyConsoleFSEntitlementTile"],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-0-Text-0","key":"element_element_element_block_0_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%20class=%22slds-text-heading_medium%22%3E%7BLabel.sfiEnergyConsoleVerifyEntitlements%7D%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-0","key":"element_element_block_0_1_block_0_1","name":"Block","parentElementKey":"element_block_0_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"#F4F6F9","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F4F6F9;     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#F4F6F9","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F4F6F9;     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Text-0","key":"element_element_element_block_0_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.sfiEnergyConsoleNoEntitlementsMsg%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1","key":"element_element_block_0_1_block_1_1","name":"Block","parentElementKey":"element_block_0_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"AccountEntitlements","id":"state-new-condition-3","operator":"==","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-FlexCard-2","key":"element_element_block_0_1_childCardPreview_2_1","name":"FlexCard","parentElementKey":"element_block_0_1","property":{"cardName":"sfiEnergyConsoleFSEntitlementTile","cardNode":"{record.AccountEntitlements.entitlements}","data-conditions":{"group":[{"field":"AccountEntitlements","id":"state-new-condition-0","operator":"!=","type":"custom","value":"null"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-3","key":"element_element_block_0_1_block_3_1","name":"Block","parentElementKey":"element_block_0_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"8","isResponsive":false},"stateIndex":1,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 "},"type":"block"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Action-4","key":"element_element_block_0_1_action_4_1","name":"Action","parentElementKey":"element_block_0_1","property":{"buttonVariant":"brand","card":"{card}","displayAsButton":true,"hideActionIcon":true,"record":"{record}","stateAction":{"Component":{"targetName":"vlocity_cmt__vlocityLWCOmniWrapper"},"displayName":"{Label.sfiEnergyConsoleActionsFSSchedule}","hasExtraParams":true,"id":"flex-action-1634101469539","openUrlIn":"New Tab/Window","targetParams":{"c__ContextId":"{recordId}","c__isFSPackageLicenseAvailable":"{isFSPackageLicenseAvailable}","c__layout":"lightning","c__tabIcon":"standard:service_appointment","c__tabLabel":"{Label.sfiEnergyConsoleActionsFSSchedule}","c__target":"c:sfiEnergyConsoleFSScheduleAppointmentMultiLanguage"},"targetType":"Component","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"sfiEnergyConsoleActionsFSFlyout","Id":"0ko5i000000ktMxAAU","OmniUiCardKey":"sfiEnergyConsoleActionsFSFlyout/CME_E_U/2/1634547899307","OmniUiCardType":"Child"};
  export default definition