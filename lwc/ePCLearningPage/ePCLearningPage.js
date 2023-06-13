import { LightningElement, wire, api, track } from 'lwc';
import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class EPCLearningPage extends LightningElement {

    @api welcome_text = "Let's Learn about Enterprise Product Catalog";
    pageName = 'EPC';
   
    @wire(getNavigationItems,{pageName:'$pageName'}) 
   epcItems;


    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }
}