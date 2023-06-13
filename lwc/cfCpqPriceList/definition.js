let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"cartId":"{Parent.cartId}"},"ipMethod":"CPQ_GetPriceLists","resultVar":"","vlocityAsync":false}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1643604006620-7n9stzovv","label":"Fire Pubsub event to call API","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"cartType":"shoppingCart","getInputMethod":"prepareUpdateCartsInput","handleResponseMethod":"processUpdateCartsResponse","ipMethod":"CPQ_UpdateCarts","methodName":"updateCarts","selectedPriceListId":"{action.value}","selectedPriceListName":"{action.label}","updateType":"pricelist"},"hasExtraParams":true,"id":"flex-action-1643605099246","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"channelname":"cpq_select_pricelist_{recordId}_{Parent.phase}","displayLabel":"cpq_select_pricelist_{recordId}_{Parent.phase}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"}],"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCpqPriceList_1_Salesforce","Id":"0Rb5i000001HJ7ECAG","ManageableState":"unmanaged","MasterLabel":"cfCpqPriceList_1_Salesforce","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"cartId","val":"{Parent.cartId}"},{"name":"pricelistId","val":"{Parent.pricelistId}"}],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Select-Pricelist","name":"Select","property":{"card":"{card}","propertyObj":{"action":null,"customProperties":[{"id":0,"label":"options","value":"{records}"},{"id":1,"label":"variant","value":"label-hidden"},{"id":2,"label":"name","value":"cpq_select_pricelist_{recordId}_{Parent.phase}"},{"id":3,"label":"data-actionobj","value":"{record.actions.setpricelist}"}],"fieldLevelHelp":"","label":"Label","options":[],"placeholder":"{Label.CPQSelectPriceList}","type":"combobox","value":"{Parent.pricelistId}"},"record":"{record}","type":"combobox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqPriceList","Id":"0ko5i000000ktPvQAA","OmniUiCardKey":"cpqPriceList/Salesforce/1/1641193080943"};
  export default definition