function showJisSunaqi(){
    var context = document.getElementsByClassName("content")[0];
    if (context.style.display === "none"){
        context.style.display = ""
    }else{
        context.style.display = "none"
    }
   
}

function clearValue(){
    document.getElementById("result").value="";
}
function get(value){
    document.getElementById("result").value+=value;
}
function calculate(){
    var result=0;
    result=document.getElementById("result").value;
    document.getElementById("result").value="";
    
    document.getElementById("result").value=fomatFloat(eval(result),10);
};

function fomatFloat(src,pos){  
    return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);  
 }

function showPage(elName){
    var gouMaiJiSuanQi = document.getElementById("gouMaiJiSuanQi");
    var dailyJiSuanQi = document.getElementById("dailyJiSuanQi");
    if('gouMaiJiSuanQi' === elName){
        dailyJiSuanQi.style.display = "none"
        gouMaiJiSuanQi.style.display = ""
    }else if('dailyJiSuanQi' === elName){
        
        dailyJiSuanQi.style.display = ""
        gouMaiJiSuanQi.style.display = "none"
    }

}
showPage("gouMaiJiSuanQi")
showJisSunaqi()