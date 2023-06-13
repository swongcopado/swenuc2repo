export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"saipavan_os_on@salesforce.org","userId":"0055i00000Bb7CTQAB","userCurrencyCode":"USD","timeStamp":"2022-10-18T10:25:39.059Z","sOmniScriptId":"0jN5i0000009hjFMAQ","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent|1:label":null,"persistentComponent|0:label":null,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":false},"prefillJSON":"{}","lwcId":"8edad152-bd56-3924-dc66-980001c6bdc9","labelMap":{"AccountNavigateAction":"ErrorStep:AccountNavigateAction","FDOFailedDisconnectedAssetsMessaging":"ErrorStep:FDOFailedDisconnectedAssetsMessaging","FDOFailedMessaging":"ErrorStep:FDOFailedMessaging","RequestDateTimeMissingErrorMessaging":"ErrorStep:RequestDateTimeMissingErrorMessaging","FDONavigateAction":"FDONavigateAction","CreateFDO":"CreateFDO","ErrorStep":"ErrorStep","CanCreate":"CanCreate","GetAccountId":"GetAccountId","SetGlobalValues":"SetGlobalValues","NavigateToOrderWhenNoAssetsPresent":"NavigateToOrderWhenNoAssetsPresent","SetDuplicateAssetsErrorMessage":"SetDuplicateAssetsErrorMessage","GetAssetIdsToProcess":"GetAssetIdsToProcess","GetExistingAssetsFromOrderItem":"GetExistingAssetsFromOrderItem"},"labelKeyMap":{"New":"New","Next":"Next","Previous":"Previous","Done":"Done","GetAccountId":"GetAccountId","Continue":"Continue","GoBack":"Go Back","InProgress":"In Progress","CanCreate":"CanCreate","OK":"OK","CreateFDO":"CreateFDO","CPQPriceListMismatchError":"The selected Price List can't be used to price the Assets. Select a different Price List.","CPQRequestDateTimeMissingError":"We couldn't create the Order because it had no Requested Date and Time to Submit Order.","CPQCannotCreateOrder":"We couldn't create the Order because an Order with a Requested Date and Time to Submit Order greater than %RequestDateTime% exists.","CPQFDOFailedDisconnectedAssets":"We couldn't change the Assets because a Disconnect request already exists."},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Turbo Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"AssetIds","element":"AssetIds"},{"inputParam":"OrderId","element":"OrderId"}],"controlWidth":12,"bundle":"GetExistingAssetsFromOrderItem","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetExistingAssetsFromOrderItem","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorTurboAction":true,"JSONPath":"GetExistingAssetsFromOrderItem","lwcId":"lwc0"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"existingAssetIds","data":null,"condition":"<>"}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"getFilteredAssetIdsToProcess","remoteClass":"MultiServiceAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"existingAssetIds":"%existingAssetIds%","assetIds":"%AssetIds%"},"errorMessage:default":null,"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetAssetIdsToProcess","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"GetAssetIdsToProcess","lwcId":"lwc1"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"message","data":null,"condition":"<>"}],"operator":"AND"}},"pubsub":false,"message":{},"label":null,"elementValueMap":{"duplicateAssetsErrorMessage":"%message%"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetDuplicateAssetsErrorMessage","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetDuplicateAssetsErrorMessage","lwcId":"lwc2"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/c__Industries_CPQ/r/%OrderId%/view?duplicateAssetsErrorMessage=%duplicateAssetsErrorMessage%","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"AssetIds","data":null,"condition":"="}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateToOrderWhenNoAssetsPresent","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateToOrderWhenNoAssetsPresent","lwcId":"lwc3"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"RequestDateTime":"%orderStartRequestDateTime%","OrderId":"%OrderId%","AssetIds":"=ARRAY(%AssetIds%)"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetGlobalValues","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetGlobalValues","lwcId":"lwc4"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":null,"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"getAccountId","remoteClass":"OmniFDOWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"GetAccountId","inProgressMessage":"InProgress","failureNextLabel":"Continue","failureGoBackLabel":"GoBack","failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"assetIdList":"%AssetIds%","RequestDateTime":"%RequestDateTime%","OrderId":"%OrderId%","ContextId":"%AssetIds%"},"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetAccountId","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"GetAccountId","lwcId":"lwc5"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":true,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":null,"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"canCreateFDO","remoteClass":"OmniFDOWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"CanCreate","inProgressMessage":"InProgress","failureNextLabel":"Continue","failureGoBackLabel":"GoBack","failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"assetIdList":"%assetIdList%","accountId":"%accountId%","RequestDateTime":"%RequestDateTime%","OrderId":"%OrderId%"},"errorMessage":{"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CanCreate","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CanCreate","lwcId":"lwc6"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"canCreateFDO","data":"false","condition":"="}],"operator":"AND"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":0,"previousLabel":"Previous","nextWidth":3,"nextLabel":"OK","message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage:default":null,"errorMessage":{"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":null,"cancelMessage":null,"cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"ErrorStep":""},"aggElements":{}},"offSet":0,"name":"ErrorStep","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Validation","rootIndex":7,"response":null,"propSetMap":{"validateExpression":null,"show":{"group":{"rules":[{"field":"noRequestDateTime","data":"true","condition":"="}],"operator":"AND"}},"messages|0:text":"CPQRequestDateTimeMissingError","messages":[{"value":true,"type":"Warning","text":"CPQRequestDateTimeMissingError","active":true},{"value":false,"type":"Requirement","active":true}],"label":null,"hideLabel":true,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"RequestDateTimeMissingErrorMessaging","level":1,"JSONPath":"ErrorStep:RequestDateTimeMissingErrorMessaging","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc70-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Validation","rootIndex":7,"response":null,"propSetMap":{"validateExpression":null,"show":{"group":{"rules":[{"field":"disconnectedAssets","data":"false","condition":"="}],"operator":"AND"}},"messages|0:text":"CPQCannotCreateOrder","messages":[{"value":true,"type":"Warning","text":"CPQCannotCreateOrder","active":true},{"value":false,"type":"Requirement","active":true}],"label":null,"hideLabel":true,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"FDOFailedMessaging","level":1,"JSONPath":"ErrorStep:FDOFailedMessaging","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc71-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Validation","rootIndex":7,"response":null,"propSetMap":{"validateExpression":null,"show":{"group":{"rules":[{"field":"disconnectedAssets","data":"true","condition":"="}],"operator":"AND"}},"messages|0:text":"CPQFDOFailedDisconnectedAssets","messages":[{"value":true,"type":"Warning","text":"CPQFDOFailedDisconnectedAssets","active":true},{"value":false,"type":"Requirement","active":true}],"label":null,"hideLabel":true,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"FDOFailedDisconnectedAssetsMessaging","level":1,"JSONPath":"ErrorStep:FDOFailedDisconnectedAssetsMessaging","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc72-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Navigate Action","rootIndex":7,"response":null,"propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetUrl":"/lightning/r/Account/%ContextId%/view","targetType":"Record","targetName":"Account","targetLWCLayout":"lightning","targetLWC":"C:CPQEnglish","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"canCreateFDO","data":"false","condition":"="}],"operator":"OR"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"OK","iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":3,"businessEvent":"","businessCategory":"","HTMLTemplateId":""},"name":"AccountNavigateAction","level":1,"JSONPath":"ErrorStep:AccountNavigateAction","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bNavigate":true,"lwcId":"lwc73-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ErrorStep","lwcId":"lwc7"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"canCreateFDO","data":"true","condition":"="}],"operator":"AND"}},"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"createFDO","remoteClass":"OmniFDOWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"CreateFDO","inProgressMessage":"InProgress","failureNextLabel":"Continue","failureGoBackLabel":"GoBack","failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"assetIdList":"%assetIdList%","accountId":"%accountId%","RequestDateTime":"%RequestDateTime%","OrderId":"%OrderId%","ContextId":"%AssetIds%"},"errorMessage:custom|0:message":"CPQPriceListMismatchError","errorMessage":{"custom":[{"value":"Insert failed. First exception on row 0; first error: INVALID_CROSS_REFERENCE_KEY, The Price Book Entry must belong to the Price Book related to the Order.: [PricebookEntryId]","path":"","message":"CPQPriceListMismatchError"}]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateFDO","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CreateFDO","lwcId":"lwc8"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetUrl":"/lightning/app/c__Industries_CPQ/r/%fdoId%/view?duplicateAssetsErrorMessage=%duplicateAssetsErrorMessage%","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"canCreateFDO","data":"true","condition":"="}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"FDONavigateAction","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"FDONavigateAction","lwcId":"lwc9"}],"bReusable":true,"bpVersion":3,"bpType":"CPQ","bpSubType":"ChangeToOrder","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{}};