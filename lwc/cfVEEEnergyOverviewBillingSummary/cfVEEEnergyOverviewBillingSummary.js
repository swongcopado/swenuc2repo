import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfVEEEnergyOverviewBillingSummary extends FlexCardMixin(LightningElement){
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              
              @track Label={VEEConsoleBillingPaymentDue:"Next payment due on",
      VEEConsoleBillingMinAmountDue:"Minimum amount due to avoid disconnection",
      VEEConsoleMakePayment:"Make Payment",
      VEEConsoleViewBill:"View Bill",
      VEEConsoleCreatePaymentPlan:"Create Payment Plan",
      VEEConsoleCreatePaymentPlanLabel:"Create Payment Plan",
      VEEConsoleBillingPaymentPlanV2:"Payment Plan",
      VEEConsolePaymentStartDateV2:"Start Date",
      VEEConsoleNextPaymentV2:"Next Payment",
      VEEConsoleNoPaymentPlanMsgV2:"No payment plan currently available",
      VEEConsoleBillOverdue:"Bill Overdue",
      VEEConsoleActivePaymentPlanV2:"Active Payment Plan",
      VEEConsolePaperLessBillingV2:"Paperless Billing"
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