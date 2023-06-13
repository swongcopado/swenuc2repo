import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfVEEEnergyServicesModalFlexCard extends FlexCardMixin(LightningElement){
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              
              @track Label={VEEConsoleServicePoint:"Service Point",
      VEEConsoleServicesDescription:"Description",
      VEEConsoleServicesDeRegulationStatus:"Deregulation Status",
      VEEConsoleServicesOrderNumber:"Order Number",
      VEEConsoleServicesContractName:"Contract Name",
      VEEConsoleServicesContactName:"Contact Name",
      VEEConsoleServicesBillingAccountName:"Billing Account Name",
      VEEConsoleServicesInstallationDate:"Installation Date",
      VEEConsoleServicesInventoryItem:"Inventory Item",
      VEEConsoleBillingHold:"Billing Hold",
      VEEConsoleServicesPremiseName:"Premise Name",
      VEEConsoleServiceAccountName:"Service Account Name",
      VEEConsoleServiceSerialNumber:"Serial Number",
      VEEConsoleServiceDetails:"Service Details"
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