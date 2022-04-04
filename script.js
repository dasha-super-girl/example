function addEffect1(){
  $("#abc:hidden").slideDown("slow");
}

function addEffect2(){
  $("#abcd:hidden").show();
}
//Checking of Fisrt name field
function checkFirst() {
  var first = document.getElementById("first").value;
  var regex = /^[a-zA-Z\s]{2,15}$/;

  if (regex.test(first)) { // if testing of first is true
      document.getElementById("first_Check").style.color = "green";
      document.getElementById("first_Check").innerHTML = "Поздравляю, вы ввели верно! :)";
      return true;
  }
  else {// if it's not
      document.getElementById("first_Check").style.color = "red";
      document.getElementById("first_Check").innerHTML = "Пожалуйста, введите 2-20 символов";
      return false;
  }
}



//Checking of Last name field
function checkLast() {
  var last = document.getElementById("last").value;
  var regex = /^[a-zA-Z\s]{2,20}$/;

  if (regex.test(last)) { // if testing of first is true
      document.getElementById("last_Check").style.color = "green";
      document.getElementById("last_Check").innerHTML = "Поздравляю, вы ввели верно! :)";
      return true;
  }
  else {// if it's not
      document.getElementById("last_Check").style.color = "red";
      document.getElementById("last_Check").innerHTML = "Пожалуйста, введите 2-20 символов";
      return false;
  }
}


//Checking of Phone number field
function checkPhone() {
  var phone = document.getElementById("phone").value;
  var regex = /^\d{3}-(\d{3})-\d{3}$/;

  if (regex.test(phone)) { // if testing of first is true
      document.getElementById("phone_Check").style.color = "green";
      document.getElementById("phone_Check").innerHTML = "Поздравляю, вы ввели верно! :)";
      return true;
  }
  else {// if it's not
      document.getElementById("phone_Check").style.color = "red";
      document.getElementById("phone_Check").innerHTML = "Введено неверно! :( ";
      return false;
  }
}




var btn = document.querySelectorAll('.btn');
[...btn].map((e)=>{
    e.onmouseover = ()=> { e.style.backgroundColor = '#1eae4f', e.style.color = 'white'; }
    e.onmouseout = ()=> { e.getAttribute('data') !== '' ? (e.style.backgroundColor = 'white', e.style.color = '#1eae4f') : ''; }
    e.onclick = ()=> {
        [...btn].map((e)=>{ e.setAttribute('data', 'active'), e.style.backgroundColor = 'white', e.style.color = '#1eae4f'; });
        e.setAttribute('data', ''), e.style.backgroundColor = '#1eae4f', e.style.color = 'white';
    }
});