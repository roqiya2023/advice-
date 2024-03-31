//https://api.adviceslip.com/advice
const dice= document.getElementById("dice-img");
const output=document.getElementById("output");
console.log(dice)
dice.addEventListener("click",(event)=>{
    fetch  (`https://api.adviceslip.com/advice`)
    .then((response)=>response.json())
    .then(data=>showAdvice(data))
}
)
//data={slip:{advice:"hello"}}

function showAdvice(data){
   output.innerHTML=data.slip.advice

}