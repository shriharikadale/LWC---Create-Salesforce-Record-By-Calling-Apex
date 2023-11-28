public with sharing class CreateAcc {
   @AuraEnabled
    public static list<Account> newcon(String Accountname , String AccountIndustry){

        list<Account> acclist = new list<Account>();

        if(Accountname != null && Accountname != ''){
            Account acc = new Account();
            acc.Name = Accountname;
            acc.Industry = AccountIndustry;
            acclist.add(acc);
         
        }
        if(!acclist.isEmpty()){
            insert acclist;
            return acclist;
        }
        return null;
        
    }
}