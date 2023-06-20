public class AcctOps {
    Public static Account setDefaultDescription(Account a){
        If (a.Description != null) return a;
        Else {
            a.Description = 'Default description'; // Base Change
            return a;
        }
    }
       //New methods introduced by Developer 1 working on the US-001
    public static Account setDefaultBillingAddress(Account a){ // Base Change
        account acc = new account();
     
        a.billingstreet = 'Basauri, 6'; 
        a.billingstate = 'Madrid'; 
        a.billingpostalcode ='9999'; 
        
        acc = a;
        
        return a;
        
        
        
    }
    public static Account setDefaultShippingAddress(Account a){// Base Change
        a.shippingstreet = 'Basauri, 6'; 
        a.shippingstate = 'Madrid';
        a.shippingpostalcode ='28023';
        return a;
    }
    public static Account setDefaultPhone(Account a) {// Base Change 
        a.Phone='688456789'; // Base Change
        a.name= 'changeLastName';
        return a;
    }
    public static Account setDefaultURL(Account a) { //DEV 1
        a.website = 'www.copa.do'; // Base Change
        return a;
    }
}