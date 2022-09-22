//Cash Register

/*Questions:- Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.  */


const checkCashRegister = (price,cash,cid)=>{
    const Amount={
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.10,
      "QUARTER": 0.25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
    let totalCID=0;
    for(let element of cid) {
      totalCID += element[1];
    }
    totalCID = totalCID.toFixed(2);
    let changeToGive=cash - price;
    const changeArray=[];
    
    if(changeToGive > totalCID) {
      return {status: "INSUFFICIENT_FUNDS", change: changeArray};
    }
    else if(changeToGive.toFixed(2) === totalCID){
      return {status:"CLOSED", change: cid};
    }
    else{
      cid=cid.reverse();
      for(let elem of cid){
        let temp=[elem[0],0];
  
        while(changeToGive >= Amount[elem[0]] && elem[1] > 0) {
          temp[1] += Amount[elem[0]];
          elem[1] -= Amount[elem[0]];
          changeToGive -= Amount[elem[0]];
          changeToGive = changeToGive.toFixed(2);
        }
  
        if(temp[1] > 0){
          changeArray.push(temp);
        }
      }
    }
  
    if(changeToGive > 0) {
      return {status: "INSUFFICIENT_FUNDS", change:[]};
    }
    return {status: "OPEN", change: changeArray};
  }











  



/*   function checkCashRegister(price, cash, cid) {
  //all money values are multiplied by 100 to deal with precision errors involved with decimals 
  const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];

  function transaction(price, cash, cid) {
    let changeNeeded = (cash - price) * 100;
    //money will be pushed to the second value in each array
    let moneyProvided = [
    ["ONE HUNDRED", 0], 
    ["TWENTY", 0], 
    ["TEN", 0], 
    ["FIVE", 0], 
    ["ONE", 0], 
    ["QUARTER", 0], 
    ["DIME", 0], 
    ["NICKEL", 0], 
    ["PENNY", 0],
  ];
  //take the cid, reverse it (like in Roman Numerals exercise), multiply values by 100
  let availCash = [...cid].reverse().map(el => [el[0], el[1] * 100]);
  //get the total sum of all cash and divide by 100
  let sumOfCash = availCash.reduce((a, b) => (a + b[1]),0) / 100;
  //if sumOfCash is exact change needed return
  if (sumOfCash === changeNeeded / 100) {
    return {status: "CLOSED", change: [...cid]};
  }
  //else, run this function
  else for (let i = 0; i < availCash.length; i++) {
    //if denomination values are less than changeNeeded and availableCash values are greater than 0, run the while loop
      while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
        //1. moneyProvided array is increased by denomination value
        moneyProvided[i][1] += denomination[i];
        //2. changeNeeded is decreased by same denomination value
        changeNeeded -= denomination[i];
        //3. availCash is also decreased by same denomination value
        availCash[i][1] -= denomination[i];
      }
    };
    
   //clean up the moneyProvided array by
    let change = moneyProvided
    //1. resetting the money values by dividing by 100
    .map(el => [el[0], el[1] / 100])
    //2. filtering out all non-empty dollar and value arrays
    .filter(el => el[1] !== 0);
    //calculate the total of the change array
    let changeTotal = change.reduce((a, b) => (a + b[1]),0);
    //if the total change is less than the change needed
    if (changeTotal < changeNeeded) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return {status: "OPEN", change};
  }

  //this is where the transaction function is called
  let answer = transaction(price, cash, cid);
  //here the final answer is provided if the 2 if statements don't catch it first
  return answer;
};  */


















/* function checkCashRegister(price, cash, cid) {
    //initialization of the status and the change array
    var status="";
    var change=[
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
    //computation of the due change and total cash in CID
    var changeDue = toPrecise(cash-price);
    var totalCash=toPrecise(cid.map(element => element[1]).reduce((a,b) =>a+b));
    //Exit case : if there isn't enough money in CID
    if(toPrecise(changeDue-totalCash)>0){
      return {status:"INSUFFICIENT_FUNDS", change:[]};
  
    } else{
      //for each type of money...
      for(let i=cid.length-1;i>=0; i--){
        //while there is still money in the cid, change to give, and change - current money is positive
          while(cid[i][1]>0
          &&changeDue>0
          &&toPrecise(changeDue-currencyToAmount(cid[i][0]))>=0){
            change[i][1]=change[i][1]+currencyToAmount(cid[i][0]);
            cid[i][1]=toPrecise(cid[i][1]-currencyToAmount(cid[i][0]));
            changeDue=toPrecise(changeDue-currencyToAmount(cid[i][0]));
          }
        }
      }
      //re computation of the total cash in CID
      totalCash=cid.map(element => element[1]).reduce((a,b) =>a+b);
      //If there is still change due after :
      if(changeDue>0&&totalCash!=0){
        return {status:"INSUFFICIENT_FUNDS", change:[]};
      //If all the cash is given :
      } else if(toPrecise(changeDue-totalCash)==0){
        return {status:"CLOSED",change:change
      .map(element => [element[0], parseFloat(toPrecise(element[1]))])};
      //If there is still cash in the cid after giving the change :
      } else{
          return {status:"OPEN", change:change.filter(element => element[1]!=0).reverse()};
      }
  }
  
  function toPrecise(expression){
    return expression.toFixed(2);
  }
  
  function currencyToAmount(name){
    switch(name){
      case "PENNY":	
        return 0.01;
        break;
      case "NICKEL":	
        return 0.05;
        break;
      case "DIME":	
        return 0.1;
        break;
      case "QUARTER":	
        return 0.25;
        break;
      case "ONE":
        return 1;
        break;
      case "FIVE":	
        return 5;
        break;
      case "TEN":	
        return 10;
        break;
      case "TWENTY":
        return 20;
        break;
      case "ONE HUNDRED": 
        return 100;
        break;
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); */