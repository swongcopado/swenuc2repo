import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import { CurrentPageReference } from 'lightning/navigation';
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfSfiEnergyActionsLayout extends FlexCardMixin(LightningElement){
              currentPageReference;        
              @wire(CurrentPageReference)
              setCurrentPageReference(currentPageReference) {
                this.currentPageReference = currentPageReference;
              }
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              
              @track Label={SfiEnergyConsoleActions:"Actions",
        SfiEnergyConsoleMoveIn:"Start Service",
        SfiEnergyConsoleMoveOut:"Stop Service",
        SfiEnergyConsoleUpdateAccount:"Update Account",
        SfiEnergyConsoleAddUpdateContact:"Update/Add Contact",
        sfiEnergyConsoleActionsFSSchedule:"Schedule Field Service",
        SfiEnergyConsoleMakeComplaint:"Make a Complaint",
        SfiEnergyConsoleUpdateCase:"Update Case",
        SfiEnergyConsoleCreatePaymentPlan:"Create Payment Plan",
        SfiEnergyConsoleUpdateAccountShippingAddress:"Update Billing Address",
        SfiEnergyConsoleAddAccount:"Add Account",
        SfiEnergyConsoleAddMeterRead:"Add Meter Read"
        };
              pubsubEvent = [];
              customEvent = [];
              
              connectedCallback() {
                super.connectedCallback();
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
                
              }

              unregisterEvents(){
                
              }
            
              renderedCallback() {
                super.renderedCallback();
                
              }
          }