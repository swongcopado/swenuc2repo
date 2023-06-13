import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import { CurrentPageReference } from 'lightning/navigation';
    import {interpolateWithRegex, interpolateKeyValue, loadCssFromStaticResource } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track, wire } from "lwc";
          import pubsub from "vlocity_cmt/pubsub";
          import { getRecord } from "lightning/uiRecordApi";
          
          import data from "./definition";
          
          import styleDef from "./styleDefinition";
              
          export default class cfSfiEnergySelfServiceFooter extends FlexCardMixin(LightningElement){
              currentPageReference;        
              @wire(CurrentPageReference)
              setCurrentPageReference(currentPageReference) {
                this.currentPageReference = currentPageReference;
              }
              @api debug;
              @api recordId;
              @api objectApiName;
              
              @track record;
              
              @track Label={SfiEnergySelfServiceBekkiDescription:"Bekky provides progressive, and affordable Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        SfiEnergySelfServiceBekkyRights:"BEKKY PVT LTD 2022. All rights reserved.",
        SfiEnergySelfServiceCompany:"Company",
        SfiEnergySelfServiceAbout:"About",
        SfiEnergySelfServiceTestimonials:"Testimonials",
        SfiEnergySelfServiceFindADoctor:"Find a doctor",
        SfiEnergySelfServiceApps:"Apps",
        SfiEnergySelfServiceRegion:"Region",
        SfiEnergySelfServiceIndonesia:"Indonesia",
        SfiEnergySelfServiceSingapore:"Singapore",
        SfiEnergySelfServiceHongkong:"Hongkong",
        SfiEnergySelfServiceCanada:"Canada",
        SfiEnergySelfServiceHelpText:"Help",
        SfiEnergySelfServiceHelpCenter:"Help center",
        SfiEnergySelfServiceContactSupport:"Contact support",
        SfiEnergySelfServiceInstructions:"Instructions",
        SfiEnergySelfServiceHowItWorks:"How it works"
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
                this.setAttribute(
                  "class",
                  "card-0ko5i000000ktMmQAC"
                );
                this.loadCustomStylesheetAttachement("00P5i00000OBLqMUAW");
                
                
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