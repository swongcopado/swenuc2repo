import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import { CurrentPageReference } from 'lightning/navigation';
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfSfiEnergyEUCCAMVIPCaching extends FlexCardMixin(LightningElement){
              currentPageReference;        
              @wire(CurrentPageReference)
              setCurrentPageReference(currentPageReference) {
                this.currentPageReference = currentPageReference;
              }
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              
              @track Label={SfiEnergyGlobalStart:"Start",
        SfiEnergyErrorOccurredMsg:"Something went wrong, please contact your System Administrator.",
        SfiEnergyCAMVIPCacheInfoMsg:"To check for completion of this job, go to Setup and search Apex Jobs. You may find multiple instances of jobs that are in-progress state. Wait until all jobs are completed before proceeding.",
        SfiEnergyCAMVIPCacheSuccessMsg:"The job has been submitted. You will receive an email upon completion.",
        SfiEnergyCAMVIPCacheDesc2:"to refresh cached API Response records.",
        SfiEnergyCAMVIPCacheDesc1:"This Job runs the Vlocity scheduled job",
        SfiEnergyCAMVIPCache:"VIP CACHE JOB"
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