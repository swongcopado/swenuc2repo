/*
This file is generated and isn't the actual source code for this
managed global class.
This read-only file shows the class's global constructors,
methods, variables, and properties.
To enable code to compile, all methods return null.
*/
global class InteractionSummaryController implements System.Callable, vlocity_cmt.VlocityOpenInterface2 {
    global String actionListString {
        get;
        set;
    }
    global Id interactionId {
        get;
        set;
    }
    global Boolean isLanguageRTL {
        get;
        set;
    }
    global static String namespacePrefix {
        get;
        set;
    }
    global String vlocAccessToken {
        get;
        set;
    }
    global InteractionSummaryController() {

    }
    global InteractionSummaryController(ApexPages.StandardController stdController) {

    }
    global Object call(String action, Map<String,Object> args) {
        return null;
    }
    @AuraEnabled
    global static String getCustomerInteraction(String recordId) {
        return null;
    }
    @RemoteAction
    global static vlocity_cmt.InteractionObj getInteractionObject(Id interactionId) {
        return null;
    }
    @RemoteAction
    global static String getTrackingEntries(Id interactionId) {
        return null;
    }
    @RemoteAction
    global static void updateTask(vlocity_cmt.InteractionObj interactionObj, Id interactionId) {

    }
}
