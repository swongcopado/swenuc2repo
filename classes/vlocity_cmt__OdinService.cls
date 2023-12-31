/*
This file is generated and isn't the actual source code for this
managed global class.
This read-only file shows the class's global constructors,
methods, variables, and properties.
To enable code to compile, all methods return null.
*/
global class OdinService {
    global static vlocity_cmt.OdinService.OdinOrderEventLogMode orderEventLogMode;
    global OdinService() {

    }
    global static void notify(List<Object> notificationList) {

    }
    global static void notify(List<Object> notificationList, Map<String,Object> resultMap) {

    }
global class OdinMessage {
    global String code;
    global String message;
    global String severity;
    global OdinMessage(String code, String message) {

    }
}
global class OdinNotificationServiceException extends Exception {
}
global enum OdinOrderEventLogMode {DO_NOT_INSERT, IN_A_DIFFERENT_TRANSACTION, IN_SAME_TRANSACTION}
}
