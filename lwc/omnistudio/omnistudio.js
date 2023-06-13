import { LightningElement, wire, api, track } from 'lwc';
import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class Omnistudio extends LightningElement {
    @api welcome_text = "Let's Learn about OmniStudio";
    pageName = 'Omnistudio';
   
    @wire(getNavigationItems,{pageName:'$pageName'}) 
   omniItems;


    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }

}