import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import { CurrentPageReference } from 'lightning/navigation';
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfSfiEnergySelfServiceUpdateProfile extends FlexCardMixin(LightningElement){
              currentPageReference;        
              @wire(CurrentPageReference)
              setCurrentPageReference(currentPageReference) {
                this.currentPageReference = currentPageReference;
              }
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              
              @track Label={sfiEnergySelfServiceUpdateSuccessMsg:"Updated successfully.",
        SfiEnergySelfServiceUserDetails:"User Details",
        sfiEnergySelfServiceUsernameTxt:"Username",
        sfiEnergySelfServiceFirstName:"First Name",
        sfiEnergySelfServiceLastName:"Last Name",
        sfiEnergySelfServiceMobile:"Mobile",
        sfiEnergySelfServiceEmailReqMsg:"Email is required.",
        sfiEnergySelfServiceEmailPatternMissMatchMsg:"Invalid email address.",
        sfiEnergySelfServiceEmail:"Email",
        sfiEnergySelfServiceAddress:"Address",
        sfiEnergySelfServiceStreet:"Street",
        sfiEnergySelfServiceCity:"City",
        sfiEnergySelfServiceState:"State",
        sfiEnergySelfServiceCountry:"Country",
        sfiEnergySelfServicePostalCode:"Postal Code",
        sfiEnergySelfServiceUpdate:"Update",
        SfiEnergySelfServiceGenericErrorTxt:"There are one or more errors on the form. Please review and re-submit.",
        sfiEnergySelfServiceSignUpFieldsReqMsg:"One or more mandatory fields are empty."
        };
              pubsubEvent = [];
              customEvent = [];
              
              connectedCallback() {
                super.connectedCallback();
                this.setThemeClass(data);
                this.setStyleDefinition(styleDef);
                data.Session = {} //reinitialize on reload
                
                
                this.customLabels = this.Label;
                      
                this.setDefinition(data);
 this.registerEvents();
                
                
              }
              
              disconnectedCallback(){
                super.disconnectedCallback();
                    
                    

                  this.unregisterEvents();
              }

              registerEvents() {
                
        this.pubsubEvent[0] = {
          [interpolateWithRegex(`Success`,this._allMergeFields,this._regexPattern,"noparse")]: this.handleEventAction.bind(this, data.events[0],0),
[interpolateWithRegex(`Error`,this._allMergeFields,this._regexPattern,"noparse")]: this.handleEventAction.bind(this, data.events[1],1)
        };
        this.pubsubChannel0 = interpolateWithRegex(`SubmitButton`,this._allMergeFields,this._regexPattern,"noparse");
        pubsub.register(this.pubsubChannel0,this.pubsubEvent[0]);

              }

              unregisterEvents(){
                pubsub.unregister(this.pubsubChannel0,this.pubsubEvent[0]);

              }
            
              renderedCallback() {
                super.renderedCallback();
                
              }
          }