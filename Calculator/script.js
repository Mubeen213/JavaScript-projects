var cal = "";
const useinp = document.getElementById('useinp');
const comput = document.getElementById('compout');
var buttons = document.getElementsByClassName('element');

for(var i=0 ; i< buttons.length ; i++){
  buttons[i].addEventListener('click',function(){
     
    var value = this.getAttribute('data-value');
    cal+=value;
    useinp.value = cal;

  });
}

function execute(){

  if(useinp.value == "" | useinp.value == 0){
    alert('No inputs found');
    return;
  }
  else{
    let ans  = eval(cal);
    comput.value = ans;
  }
}

function reset(){
  cal="";
  useinp.value="";
  comput.value="";
}

function removech(){
  cal = cal.substring(0,cal.length-1);
  useinp.value = cal;
}
