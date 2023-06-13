let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"Id":"{Session.AccountId}"},"ipMethod":"sfiEnergyConsole_FSFetchOutageInfo","jsonMap":"{\"Session.AccountId\":\"{Session.AccountId}\"}","resultVar":"","vlocityAsync":false}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfSfiEnergySelfServiceOverviewContainer_3_CME_E_U","Id":"0Rb5i000001HIvVKAW","ManageableState":"unmanaged","MasterLabel":"cfSfiEnergySelfServiceOverviewContainer_3_CME_E_U","NamespacePrefix":"c"},"multilanguageSupport":true,"osSupport":true,"selectableMode":"Multi","sessionVars":[{"isApi":true,"name":"AccountId","val":""},{"isApi":true,"name":"FirstName"},{"isApi":true,"name":"LastName","val":""},{"isApi":true,"name":"UserId","val":""}],"states":[{"actions":[],"childCards":["sfiEnergySelfServiceBanner","sfiEnergySelfServiceOverviewLeftSideContent","sfiEnergySelfServiceRightSideContent"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"sfiEnergySelfServiceBanner","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"FirstName":"{Session.FirstName}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":12,"isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":12,"isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":12,"isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 "},"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-2","name":"FlexCard","property":{"cardName":"sfiEnergySelfServiceOverviewLeftSideContent","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"AccountId":"{Session.AccountId}","FirstName":"{Session.FirstName}","LastName":"{Session.LastName}"},"recordId":"{recordId}","selectedState":"Overview"},"size":{"default":"12","isResponsive":true,"large":"7","medium":"7","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-right_x-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:x-large","size":"x-large","type":"right"}],"padding":[],"size":{"default":"12","isResponsive":true,"large":"7","medium":"7","small":"12"},"sizeClass":"slds-large-size_7-of-12 slds-medium-size_7-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-right_x-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:x-large","size":"x-large","type":"right"}],"padding":[],"size":{"default":"12","isResponsive":true,"large":"7","medium":"7","small":"12"},"sizeClass":"slds-large-size_7-of-12 slds-medium-size_7-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-3","name":"FlexCard","property":{"cardName":"sfiEnergySelfServiceRightSideContent","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"AccountId":"{Session.AccountId}","FirstName":"{Session.FirstName}","LastName":"{Session.LastName}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":true,"large":"3","medium":"3","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"ief_mobile-overviewright ","container":{"class":"ief_mobile-overviewright"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"3","medium":"3","small":"12"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_3-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"ief_mobile-overviewright ","container":{"class":"ief_mobile-overviewright"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"3","medium":"3","small":"12"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_3-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-4","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 "},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"border-style: none;","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         border-style: none;","text":{"align":"","color":""}}}],"theme":"slds","title":"sfiEnergySelfServiceOverviewContainer","Id":"0ko5i000000ktMpQAC","OmniUiCardKey":"sfiEnergySelfServiceOverviewContainer/CME_E_U/3/1669752465931","OmniUiCardType":"Parent"};
  export default definition