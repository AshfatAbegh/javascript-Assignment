// kiloMeterToMeter.js
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result);


// budgetCalculator.js
function budgetCalculator(clock,phone,laptop){
    var Clock = clock*50;
    var Phone = phone*100;
    var Laptop = laptop*500;
    var total = Clock + Phone + Laptop;
    return total;
}
var Price = budgetCalculator(2,3,8);
console.log(Price);

// hotelCost.js
function hotelCost(day){
    if(day<=10){
        day = day*100;
    }
    else if(day<=20){
        var firstPart = 10*100;
        var remaining = day-10;
        var secondPart = remaining*80;
        day = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        day = firstPart + secondPart + thirdPart;
    }
    return day;
}
var cost = hotelCost(60);
console.log(cost);

// megaFriend.js
function megaFriend(Names){
    var megaFriend=Names[0];
    for(var i=0; i<Names.length; i++){
        var element = Names[i];
        if(element>Names[i]){
            maxName = element;
        }
        return megaFriend;
    }
    }
    var Names=["Arafat","Abir","Sakibur"];
    console.log(Names);