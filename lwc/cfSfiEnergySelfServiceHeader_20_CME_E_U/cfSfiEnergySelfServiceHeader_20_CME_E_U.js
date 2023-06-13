import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfSfiEnergySelfServiceHeader_20_CME_E_U extends FlexCardMixin(LightningElement){
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              @track _sessionApiVars = {};
        @api set cfAccountId(val) {
          if(typeof val !== "undefined") {
            this._sessionApiVars["AccountId"] = val;
          }
        } get cfAccountId() {
          return this._sessionApiVars["AccountId"] || "";
        }
      
        @api set cfFirstName(val) {
          if(typeof val !== "undefined") {
            this._sessionApiVars["FirstName"] = val;
          }
        } get cfFirstName() {
          return this._sessionApiVars["FirstName"] || "";
        }
      
        @api set cfLastName(val) {
          if(typeof val !== "undefined") {
            this._sessionApiVars["LastName"] = val;
          }
        } get cfLastName() {
          return this._sessionApiVars["LastName"] || "";
        }
      
        @api set cfUserId(val) {
          if(typeof val !== "undefined") {
            this._sessionApiVars["UserId"] = val;
          }
        } get cfUserId() {
          return this._sessionApiVars["UserId"] || "";
        }
      
              
              pubsubEvent = [];
              customEvent = [];
              
              connectedCallback() {
                super.connectedCallback();
                this.setStyleDefinition(styleDef);
                data.Session = {} //reinitialize on reload
                
                
                
                this.setDefinition(data);
 this.registerEvents();
                
                
              }
              
              disconnectedCallback(){
                super.disconnectedCallback();
                    
                    

                  this.unregisterEvents();
              }

              registerEvents() {
                
              }

              unregisterEvents(){
                
              }
            
              renderedCallback() {
                super.renderedCallback();
                
              }
          }