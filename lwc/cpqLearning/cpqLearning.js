import { LightningElement, wire, api, track } from 'lwc';
import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class CpqLearning extends LightningElement {

    @api welcome_text = "Let's Learn about Industries Configure, Price, and Quote (CPQ)";
    pageName = 'CPQ';
   
    @wire(getNavigationItems,{pageName:'$pageName'}) 
   cpqItems;


    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }

}