let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"around","size":"none"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}","data-conditions":{"id":"state-condition-object","isParent":true,"group":[{"id":"state-new-condition-3","field":"ConsoleLeftCardDetails.AllContact","operator":"!=","value":"undefined","type":"custom","hasMergeField":false}]},"data-preloadConditionalElement":false},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"key":"element_element_block_0_0_outputField_0_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-heading_medium%20slds-text-align_center%22%3E%7BLabel.SfiEnergyConsoleAllContacts%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"around","size":"small","label":"around:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#1564BF"},"inlineStyle":"","class":"slds-p-around_small ","style":"     : #ccc 1px solid; \n        color:#1564BF; "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Text-0","styleObjects":[{"key":0,"conditions":"default","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"around","size":"small","label":"around:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#1564BF"},"inlineStyle":"","class":"slds-p-around_small ","style":"     : #ccc 1px solid; \n        color:#1564BF; "},"label":"Default","name":"Default","conditionString":"","draggable":false}]},{"key":"element_element_block_0_0_customLwc_1_0","name":"Custom LWC","element":"customLwc","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"contactColumnsInput":"{columnsData.columns}","contactRecordsInput":"{ConsoleLeftCardDetails.AllContact}","customlwcname":"sfiEnergyLeftProfileContacts"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Custom LWC-1"}],"elementLabel":"Block-0"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}","data-conditions":{"id":"state-condition-object","isParent":true,"group":[{"id":"state-new-condition-17","field":"ConsoleLeftCardDetails.AllContact","operator":"==","value":"undefined","type":"custom","hasMergeField":false}]},"data-preloadConditionalElement":false},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"key":"element_element_block_1_0_outputField_0_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BLabel.sfiEnergyConsoleNoRecords%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12"},"parentElementKey":"element_block_1_0","elementLabel":"Block-1-Text-0"}],"elementLabel":"Block-1"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[]}],"dataSource":{"type":"Custom","value":{"dsDelay":0,"body":"{\n    \"AccountTree\": \"\",\n    \"ConsoleLeftCardDetails\": {\n        \"AccountId\": \"0015i00000mydJrAAU\",\n        \"AccountName\": \"Billy Bing\",\n        \"BillingCity\": \"London\",\n        \"BillingCountry\": \"UK\",\n        \"BillingPostalCode\": \"34334\",\n        \"BillingState\": \"London\",\n        \"BillingStreet\": \"123 west\",\n        \"PrimaryContactEmail\": \"james.rawling@billybing.com\",\n        \"PrimaryContactId\": \"0035i000024L2PGAAK\",\n        \"PrimaryContactPhone\": \"0131 9876333\",\n        \"RecordTypeName\": \"Consumer\",\n        \"BillingAddress\": \"123 west London London 34334 UK\",\n        \"PrimaryContactName\": \"James Rawlings (Primary Contact)\",\n        \"ShippingAddress\": \"77 Whitehill Rd, Fort Kinnaird Edinburgh Scotland EH15 3HR United Kingdom\",\n        \"AllContact\": [\n            {\n                \"Email\": \"james.rawling@billybing.com\",\n                \"Id\": \"0035i000024L2PGAAK\",\n                \"Name\": \"James Rawlings\",\n                \"Phone\": \"0131 9876333\",\n                \"Role\": \"Primary Contact\"\n            },\n            {\n                \"Email\": \"julia.tom@billybing.com\",\n                \"Id\": \"0035i000024L2PHAAK\",\n                \"Name\": \"Julia Tom\",\n                \"Phone\": \"0131 9876333\",\n                \"Role\": \"Business User\"\n            },\n            {\n                \"Email\": \"ben.stokes1@email.com\",\n                \"Id\": \"0035i000024L2PIAA0\",\n                \"Name\": \"Ben1 Stokes1\",\n                \"Phone\": \"3345560001\",\n                \"Role\": \"Business User;Purchasing Contact;Property Manager\"\n            }\n        ],\n        \"callIcon\": \"utility:call\",\n        \"emailIcon\": \"utility:email\",\n        \"incoming_callIcon\": \"utility:incoming_call\",\n        \"userIcon\": \"utility:user\"\n    },\n    \"MapAPIKey\": \"AIzaSyAt9JfKFI4hMzo7U7bMNxn4yE-IdQ-Y5oM\",\n    \"columnsData\": {\n        \"columns\": [\n            {\n                \"fieldName\": \"Name\",\n                \"label\": \"Name\",\n                \"searchable\": true,\n                \"sortable\": true,\n                \"userSelectable\": false\n            },\n            {\n                \"fieldName\": \"Role\",\n                \"label\": \"Role\",\n                \"searchable\": true,\n                \"sortable\": true,\n                \"userSelectable\": true\n            },\n            {\n                \"fieldName\": \"Email\",\n                \"label\": \"Email\",\n                \"searchable\": true,\n                \"sortable\": true,\n                \"type\": \"email\",\n                \"userSelectable\": true\n            },\n            {\n                \"fieldName\": \"Phone\",\n                \"label\": \"Phone\",\n                \"searchable\": true,\n                \"sortable\": true,\n                \"type\": \"phone\",\n                \"userSelectable\": true\n            }\n        ]\n    },\n    \"ImageURL\": \"https://maps.googleapis.com/maps/api/staticmap?center=77 Whitehill Rd, Fort Kinnaird Edinburgh Scotland EH15 3HR United Kingdom&zoom=14&size=600x400&key=AIzaSyAt9JfKFI4hMzo7U7bMNxn4yE-IdQ-Y5oM\"\n}","resultVar":""},"orderBy":{"name":"","isReverse":false},"contextVariables":[]},"title":"sfiEnergyLeftProfileContactsModal","enableLwc":true,"isFlex":true,"theme":"slds","selectableMode":"Multi","lwc":{"DeveloperName":"cfSfiEnergyLeftProfileContactsModal_2_CME_E_U","Id":"0Rb5i000001HIwQCAQ","MasterLabel":"cfSfiEnergyLeftProfileContactsModal_2_CME_E_U","NamespacePrefix":"c","ManageableState":"unmanaged"},"multilanguageSupport":true,"isRepeatable":true,"Id":"a505i000000J6OOAAU","vlocity_cmt__GlobalKey__c":"sfiEnergyLeftProfileContactsModal/CME_E_U/2/1639118213300","vlocity_cmt__IsChildCard__c":true};
  export default definition