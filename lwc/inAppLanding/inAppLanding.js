import { LightningElement, wire, api, track } from 'lwc';
import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class InAppLanding extends LightningElement {
    @api welcome_text = "Welcome to the Energy & Utilities Cloud Learning Org";
    pageName = 'LandingPage';
   
    @wire(getNavigationItems,{pageName:'$pageName'}) 
   landingItems;


    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }

}