import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import { CurrentPageReference } from 'lightning/navigation';
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfSfiEnergySelfServiceSignUp extends FlexCardMixin(LightningElement){
              currentPageReference;        
              @wire(CurrentPageReference)
              setCurrentPageReference(currentPageReference) {
                this.currentPageReference = currentPageReference;
              }
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              
              @track Label={sfiEnergySelfServiceLogoAltText:"Logo",
        sfiEnergySelfServiceFirstName:"First Name",
        sfiEnergySelfServiceLastName:"Last Name",
        sfiEnergySelfServiceEmailReqMsg:"Email is required.",
        sfiEnergySelfServiceEmailPatternMissMatchMsg:"Invalid email address.",
        sfiEnergySelfServiceEmail:"Email",
        sfiEnergySelfServiceSignUpFieldsReqMsg:"One or more mandatory fields are empty.",
        SfiEnergySelfServiceGenericErrorTxt:"There are one or more errors on the form. Please review and re-submit.",
        sfiEnergySelfServiceSignIn:"Sign In",
        sfiEnergySelfServiceHaveAccountTxt:"Have account?",
        sfiEnergySelfServiceSignUpGenericErrorMsg:"Something went wrong, please contact customer support!",
        sfiEnergySelfServiceSignUpErrorMsg:"We are unable to find your account, please contact support to help you set up an account.",
        sfiEnergySelfServiceTermsAndConditions:"Terms and Conditions",
        sfiEnergySelfServiceTermsAndConditionsAgree:"I agree to the",
        sfiEnergySelfServiceTermsAndConditionsReqMsg:"User should agree to the Terms and Conditions.",
        sfiEnergySelfServiceUserNameErrorMsg:"The username is already taken, please try a new username.",
        sfiEnergySelfServiceUserName:"Create Username",
        sfiEnergySelfServiceUserNamePatternMissMatchMsg:"Username should not contain special characters.",
        sfiEnergySelfServiceUserNameReqMsg:"Username field is required.",
        sfiEnergySelfServiceSSN:"SSN (last 4 digits)",
        sfiEnergySelfServiceSSNPatternMissMatchMsg:"SSN number should be digits.",
        sfiEnergySelfServiceSSNReqMsg:"Last 4 digits of your SSN is required.",
        sfiEnergySelfServiceLastNameReqMsg:"Last name is required.",
        sfiEnergySelfServiceFirstNameReqMsg:"First name is required.",
        sfiEnergySelfServiceAccountNumber:"Account Number",
        sfiEnergySelfServiceAccountNumberReqMsg:"Account number is required.",
        sfiEnergySelfServiceSignUp:"Sign Up",
        sfiEnergySelfServiceCntToSignIn:"Continue to Sign In",
        sfiEnergySelfServiceSingnUpSuccessMsg:"Password instructions successfully sent to your Email!",
        sfiEnergySelfServiceSignUpSuccessAltText:"Success"
        };
              pubsubEvent = [];
              customEvent = [];
              
              connectedCallback() {
                super.connectedCallback();
                this.setThemeClass(data);
                this.setStyleDefinition(styleDef);
                data.Session = {} //reinitialize on reload
                
                
                this.customLabels = this.Label;
                      
                          this.fetchUpdatedCustomLabels();
                      
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