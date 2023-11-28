import { LightningElement , api } from 'lwc';
import CreateAcc from '@salesforce/apex/CreateAcc.newcon';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Createrec extends LightningElement {
  
value = '';
AccountName;
Accountval;

 get options(){
    return [
        {label : 'Agriculture' , value : 'Agriculture'},
        {label : 'Automobile' , value : 'Automobile'}
    ];
 }

 handleIndustry(event){
    this.value = event.detail.value;
    console.log("this.value :"+JSON.stringify(this.value));

 }

 handlename(event){
    this.AccountName = event.target.value;
 }

 handlesave(){
    CreateAcc({Accountname : this.AccountName , AccountIndustry : this.value})
    .then( result => {
        //this.Accountval = result[0];
        console.log("this.Account :"+JSON.stringify(this.Accountval));
        this.Accountval = result[0].Id;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Account Record Created',
                message: 'Successfully..!!',
                variant: 'success'
            })
        );
        
    })
    .catch(error =>{
        console.log("Error :"+JSON.stringify(error));
    })
 }


}