let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930267697-3gcd4cdqk","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"cartSummary","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1618840872198","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930296821-86u7x355n","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"cartSummary","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1618840872198","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930267697-0bxsr5hal","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"workingCartSummary","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1618840880232","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930296821-vqkrkee7f","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"workingCartSummary","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1618840880232","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_working_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_working_cart_updated","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"}],"globalCSS":false,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCpqProductConfigureTotalBar_13_Vlocity","Id":"0Rb5i000001HJ7FCAY","ManageableState":"unmanaged","MasterLabel":"cfCpqProductConfigureTotalBar_13_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"osSupport":true,"sessionVars":[{"name":"loyaltyPricingEnabled","val":"false"}],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"UsageTotalField","key":"element_element_block_0_0_outputField_0_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"cartSummary.records[0].EffectiveUsagePriceTotal__c","hasMergeField":false,"id":"state-new-condition-29","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"cartSummary.records[0].EffectiveUsagePriceTotal__c","label":"{Label.EffectiveUsagePriceTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#C9C9C9","radius":"","style":"solid","type":"border_right","width":"1"},"class":"slds-theme_default slds-border_right slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-right: #C9C9C9 1px solid; \n         ","text":{"align":"","color":""},"theme":"theme_default"},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#C9C9C9","radius":"","style":"solid","type":"border_right","width":"1"},"class":"slds-theme_default slds-border_right slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-right: #C9C9C9 1px solid; \n         ","text":{"align":"","color":""},"theme":"theme_default"}}],"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"OneTimeTotalField","key":"element_element_block_0_0_outputField_1_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"cartSummary.records[0].EffectiveOneTimeTotal__c","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"cartSummary.records[0].EffectiveOneTimeTotal__c","label":"{Label.OneTimeTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"RecurringTotalField","key":"element_element_block_0_0_outputField_2_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"cartSummary.records[0].EffectiveRecurringTotal__c","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"cartSummary.records[0].EffectiveRecurringTotal__c","label":"{Label.EffectiveCPQRecurringTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"LoyaltyTotalField","key":"element_element_block_0_0_outputField_3_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"cartSummary.records[0].EffectiveOneTimeLoyaltyTotal__c","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"},{"field":"Session.loyaltyPricingEnabled","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"fieldName":"cartSummary.records[0].EffectiveOneTimeLoyaltyTotal__c","label":"{Label.EffectiveOneTimeLoyaltyTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"TotalPriceBlock","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default slds-grid slds-grid_align-end","container":{"class":""},"customClass":"slds-grid slds-grid_align-end","elementStyleProperties":{},"inlineStyle":"","margin":[],"minHeight":"50px","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n      min-height:50px;   ","text":{"align":"","color":""},"theme":"theme_default"},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default cpq__product_totalbar slds-grid slds-grid_align-end","container":{"class":"cpq__product_totalbar"},"customClass":"slds-grid slds-grid_align-end","elementStyleProperties":{},"inlineStyle":"","margin":[],"minHeight":"50px","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n      min-height:50px;   ","text":{"align":"","color":""},"theme":"theme_default"}},{"conditionString":"Parent.flowType == bulkChange","conditions":{"group":[{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"bulkChange"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"Bulk Change","name":"Bulk Change","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default slds-grid slds-grid_align-end","container":{"class":""},"customClass":"slds-grid slds-grid_align-end","elementStyleProperties":{},"inlineStyle":"","margin":[],"minHeight":"50px","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n      min-height:50px;   ","text":{"align":"","color":""},"theme":"theme_default"}}],"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"Parent.cartType","id":"state-new-condition-0","operator":"!=","type":"custom","value":"workingCart"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Global","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default slds-p-vertical_x-small cpq__global-total-bar","container":{"class":""},"customClass":"cpq__global-total-bar","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""},"theme":"theme_default"}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"UsageTotalField","key":"element_element_block_0_1_outputField_0_1","name":"Field","parentElementKey":"element_block_0_1","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"workingCartSummary.records[0].EffectiveUsagePriceTotal__c","hasMergeField":false,"id":"state-new-condition-29","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"workingCartSummary.records[0].EffectiveUsagePriceTotal__c","label":"{Label.EffectiveUsagePriceTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#C9C9C9","radius":"","style":"solid","type":"border_right","width":"1"},"class":"slds-theme_default slds-border_right slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-right: #C9C9C9 1px solid; \n         ","text":{"align":"","color":""},"theme":"theme_default"},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#C9C9C9","radius":"","style":"solid","type":"border_right","width":"1"},"class":"slds-theme_default slds-border_right slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-right: #C9C9C9 1px solid; \n         ","text":{"align":"","color":""},"theme":"theme_default"}}],"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"OneTimeTotalField","key":"element_element_block_0_1_outputField_1_1","name":"Field","parentElementKey":"element_block_0_1","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"workingCartSummary.records[0].EffectiveOneTimeTotal__c","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"workingCartSummary.records[0].EffectiveOneTimeTotal__c","label":"{Label.OneTimeTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"RecurringTotalField","key":"element_element_block_0_1_outputField_2_1","name":"Field","parentElementKey":"element_block_0_1","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"workingCartSummary.records[0].EffectiveRecurringTotal__c","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"workingCartSummary.records[0].EffectiveRecurringTotal__c","label":"{Label.EffectiveCPQRecurringTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"LoyaltyTotalField","key":"element_element_block_0_1_outputField_3_1","name":"Field","parentElementKey":"element_block_0_1","property":{"card":"{card}","currency":"","data-conditions":{"group":[{"field":"workingCartSummary.records[0].EffectiveOneTimeLoyaltyTotal__c","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"},{"field":"Session.loyaltyPricingEnabled","hasMergeField":false,"id":"state-new-condition-17","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"fieldName":"workingCartSummary.records[0].EffectiveOneTimeLoyaltyTotal__c","label":"{Label.EffectiveOneTimeLoyaltyTotal}","labelclass":"cpq__productconfiguretotalprice_label","locale":"","placeholder":"0","record":"{record}","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"type":"currency","valueclass":"cpq__productconfiguretotalprice_value"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col cpq__product-configure-total-price cpq__width_auto","container":{"class":""},"customClass":"slds-col cpq__product-configure-total-price cpq__width_auto","elementStyleProperties":{"labelclass":"cpq__productconfiguretotalprice_label","styles":{"label":{"textAlign":"right"},"value":{"textAlign":"right"}},"valueclass":"cpq__productconfiguretotalprice_value"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"TotalPriceBlock","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":["border_top","border_bottom"],"width":"1"},"class":"slds-theme_default slds-border_top slds-border_bottom slds-grid slds-grid_align-end","container":{"class":""},"customClass":"slds-grid slds-grid_align-end","elementStyleProperties":{},"inlineStyle":"","margin":[],"minHeight":"50px","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #cccccc 1px solid;border-bottom: #cccccc 1px solid; \n      min-height:50px;   ","text":{"align":"","color":""},"theme":"theme_default"},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":["border_top","border_bottom"],"width":"1"},"class":"slds-theme_default slds-border_top slds-border_bottom slds-grid slds-grid_align-end","container":{"class":""},"customClass":"slds-grid slds-grid_align-end","elementStyleProperties":{},"inlineStyle":"","margin":[],"minHeight":"50px","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #cccccc 1px solid;border-bottom: #cccccc 1px solid; \n      min-height:50px;   ","text":{"align":"","color":""},"theme":"theme_default"}}],"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"Parent.cartType","id":"state-new-condition-7","operator":"==","type":"custom","value":"workingCart"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Configure","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default slds-p-vertical_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:x-small","size":"x-small","type":"vertical"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""},"theme":"theme_default"}}],"theme":"slds","title":"CPQ Product Configure Total Bar","uniqueKey":"DisplaySequence","Id":"0ko5i000000ktPxQAA","OmniUiCardKey":"cpqProductConfigureTotalBar/Vlocity/13/1657017392832"};
  export default definition