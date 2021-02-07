

//1. kilometerToMeter Calculation

function kilometerToMeter(kilometer){
       return kilometer * 1000 ;
}

var result = kilometerToMeter(6);
console.log(result);

//2. budgetCalculator 



function budgetCalculator(watch, phone, laptop){
    return watch * 50 + phone * 100 + laptop * 500;
}

var totalTaka = budgetCalculator(7, 2, 1)
 console.log(totalTaka);


// 3. hotelCost

function hotelCost(day){
    var totalTaka = 0;
if(day <= 10){
    totalTaka = day * 100;
}else if(day <= 20){
    var firstPart = 10 * 100;
    var remaining = day - 10;
    var secondPart = remaining * 80;
    totalTaka =firstPart + secondPart;
}else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    totalTaka = firstPart + secondPart + thirdPart;
}

 return totalTaka;
}

var totalTakaForDays = hotelCost(20);
console.log(totalTakaForDays);










// 4. Megafriend 

function megaFriend(names) {
    var longest = '';
    for (var i= 0; i < names.length; i++) {
      if (names[i].length > longest.length) {
        longest = names[i];
      }
    }
    return longest;
  }

  var friendsName = ["kamal", "jamal", "rahim", "wahidur", "jashimuddin"]
  var longestNameOfMyFriend = megaFriend(friendsName);
console.log(longestNameOfMyFriend);
