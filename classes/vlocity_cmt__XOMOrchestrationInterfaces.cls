/*
This file is generated and isn't the actual source code for this
managed global class.
This read-only file shows the class's global constructors,
methods, variables, and properties.
To enable code to compile, all methods return null.
*/
global class XOMOrchestrationInterfaces {
    global XOMOrchestrationInterfaces() {

    }
global interface IAutoTask {
    void executeBatch(List<vlocity_cmt__OrchestrationItem__c> param0);
}
global interface IDeferredUpdater {
    void updateDatabase();
}
global interface IExecutionLogger {
    void addLogRecord(vlocity_cmt__OrchestrationItem__c param0, Datetime param1, String param2, String param3);
}
global interface IHighScaleSystemInterface {
    System.HttpResponse executeItem(String param0, String param1, vlocity_cmt__OrchestrationItem__c param2, System.HttpRequest param3);
    void parseResponse(vlocity_cmt__OrchestrationItem__c param0, String param1, String param2, System.HttpResponse param3);
    System.HttpRequest prepareRequest(String param0, String param1, vlocity_cmt__OrchestrationItem__c param2);
}
global interface IStateManager {
    void completeItem(vlocity_cmt__OrchestrationItem__c param0, Datetime param1, vlocity_cmt.XOMOrchestrationInterfaces.IExecutionLogger param2);
    void failItem(vlocity_cmt__OrchestrationItem__c param0, Datetime param1, String param2, vlocity_cmt.XOMOrchestrationInterfaces.IExecutionLogger param3);
}
global interface ISystemBatchInterface {
    void executeBatch(String param0, String param1, List<vlocity_cmt__OrchestrationItem__c> param2);
}
global interface ISystemInterface {
    void endBatch(String param0, String param1);
    void executeItem(String param0, String param1, vlocity_cmt__OrchestrationItem__c param2);
    void startBatch(String param0, String param1);
}
global class SystemInterfaceRecoverableException extends Exception {
}
}
