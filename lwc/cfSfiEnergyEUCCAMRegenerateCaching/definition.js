let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"Custom","value":{"body":"{\n\"status\": \"false\",\n\"jobName\": \"sfiEnergyCAMRegenerateCaching\"\n}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[],"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfSfiEnergyEUCCAMRegenerateCaching_2_CME_E_U","Id":"0Rb5i000001HIxxKAO","ManageableState":"unmanaged","MasterLabel":"cfSfiEnergyEUCCAMRegenerateCaching_2_CME_E_U","NamespacePrefix":"c"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-0-clone-0","key":"element_element_element_block_0_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Ch2%3E%7BLabel.SfiEnergyCAMRegenCache%7D%3C/h2%3E%0A%3Cdiv%20class=%22slds-text-title%22%3E&nbsp;%3C/div%3E%0A%3Cdiv%20class=%22slds-text-body_small%22%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BLabel.SfiEnergyCAMVIPCacheDesc1%7D%3Cstrong%3E%20%3C/strong%3E%3Cspan%20style=%22color:%20#3598db;%22%3E%3Cem%3E%7BjobName%7D%3C/em%3E%3C/span%3E%3Cstrong%3E%20%3C/strong%3E%7BLabel.SfiEnergyCAMRegenCacheDesc2%7D%20%3Cspan%20style=%22color:%20#3598db;%22%3E%3Cem%3E%7BLabel.SfiEnergyCAMRegenCacheCustomSettingName%7D%3C/em%3E%3C/span%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 "},"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Block-1-Action-2","key":"element_element_element_block_0_0_block_0_0_action_1_0","name":"Action","parentElementKey":"element_element_block_0_0_block_0_0","property":{"actionList":[{"actionIndex":0,"draggable":false,"isOpen":true,"key":"1654692763868-5cv924zbl","label":"Update Data Source","stateAction":{"Web Page":{"targetName":"/apex"},"eventName":"updatedatasource","id":"flex-action-1655373366118","message":"{\"type\":\"IntegrationProcedures\",\"value\":{\"dsDelay\":\"\",\"ipMethod\":\"sfiEnergyCAM_RunScheduledJob\",\"vlocityAsync\":false,\"inputMap\":{\"JobName\":\"{jobName}\"},\"jsonMap\":\"{\\\"JobName\\\":\\\"{JobName}\\\"}\"},\"orderBy\":{\"name\":\"\",\"isReverse\":\"\"},\"contextVariables\":[{\"name\":\"JobName\",\"val\":\"Test\",\"id\":2},{\"name\":\"jobName\",\"val\":\"\",\"id\":2}]}","openUrlIn":"Current Window","responseNode":"response","targetType":"Web Page","type":"cardAction"}}],"buttonVariant":"brand","card":"{card}","displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{Label.SfiEnergyGlobalStart}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-2","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:small","size":"small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:small","size":"small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"status","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":""},"class":"slds-border_bottom slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     border-bottom: #cccccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","mergeField":"%3Ch2%3E%7BLabel.SfiEnergyCAMRegenCache%7D%3C/h2%3E%0A%3Cdiv%20class=%22slds-text-title%22%3E&nbsp;%3C/div%3E%0A%3Cdiv%20class=%22slds-text-body_small%20slds-text-color_success%22%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BLabel.SfiEnergyCAMVIPCacheSuccessMsg%7D%3C/span%3E%3C/div%3E%0A%3Cdiv%20class=%22slds-text-body_small%20slds-text-color_default%22%3E%7BLabel.SfiEnergyCAMVIPCacheInfoMsg%7D%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":1,"styleObject":{"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 "},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:small","size":"small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:small","size":"small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"status","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Success","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":""},"class":"slds-border_bottom slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     border-bottom: #cccccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_2_outputField_0_2","name":"Text","parentElementKey":"element_block_0_2","property":{"card":"{card}","mergeField":"%3Ch2%3E%7BLabel.SfiEnergyCAMRegenCache%7D%3C/h2%3E%0A%3Cdiv%20class=%22slds-text-title%22%3E&nbsp;%3C/div%3E%0A%3Cdiv%20class=%22slds-text-body_small%20slds-text-color_error%22%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BLabel.SfiEnergyErrorOccurredMsg%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":2,"styleObject":{"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 "},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:small","size":"small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:small","size":"small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"error","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Error","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#FFFFFF","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":""},"class":"slds-border_bottom slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FFFFFF;     border-bottom: #cccccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"sfiEnergyEUCCAMRegenerateCaching","tracking":{"businessEvent":""},"Id":"0ko5i000000ktOuQAQ","OmniUiCardKey":"sfiEnergyEUCCAMRegenerateCaching/CME_E_U/2/1664188101048","OmniUiCardType":"Child"};
  export default definition