var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",

price(){
let total = 0

for(let key in this){
    if(typeof this[key] === "string"){
        total += parseInt(this[key]);
    }
}
return total + " грн";

},

minPrice(){
let min = null

for(let key in this){
    if(typeof this[key] === "string"){
        const value = parseInt(this[key]);
        if(min === null || value < min){
            min = value

        }
    }
}

return min + " грн";

},

maxPrice(){
let max = null

for(let key in this){
    if(typeof this[key] === "string"){
        const value = parseInt(this[key]);
        if(max === null || value > max){
            max = value

        }
    }
}

return max + " грн";


}

};

services['Розбити сколо'] = "200 грн";
services['Замовити чорну ікру'] = "1800 грн";
services['Забрати пачку серветок'] = "40 грн"

console.log(services.price())
console.log(services.minPrice())
console.log(services.maxPrice())