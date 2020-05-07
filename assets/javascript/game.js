let teamone = document.querySelector("#teamone-shoot-button");
let teamtwo = document.querySelector("#teamtwo-shoot-button");
let teamonenumshots= document.querySelector("#teamone-numshots");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");
let teamonenumgoal =document.querySelector ("#teamone-numgoals");
let teamtwonumgoal = document.querySelector ("#teamtwo-numgoals");
let resetone = document.querySelector("#reset-button")
let resets= document.querySelector('#num-resets');

teamone.addEventListener("click", function(){
    console.log("team one shot");
    let teamoneshotstaken = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = teamoneshotstaken;
    var d = Math.random();
if (d < 0.5){
    console.log("if worked")
    let goalnumber1 = Number(teamonenumgoal.innerHTML) + 1;
    teamonenumgoal.innerHTML = goalnumber1;
}
})
    


teamtwo.addEventListener("click", function(){
    console.log("team two shot");
    let teamtwoshotstaken = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = teamtwoshotstaken;
    var d = Math.random();
    if (d < 0.5){
        console.log("if worked")
        let goalnumber2 = Number(teamtwonumgoal.innerHTML) + 1;
        teamtwonumgoal.innerHTML = goalnumber2;
    }
})

resetone.addEventListener("click", function(){
    console.log("resetsifworked");
    let numberofresets = Number(resets.innerHTML) + 1;
    resets.innerHTML = numberofresets;
    teamonenumgoal.innerHTML = 0;
    teamtwonumgoal.innerHTML = 0;
    teamonenumshots.innerHTML = 0;
    teamtwonumshots.innerHTML = 0;

})