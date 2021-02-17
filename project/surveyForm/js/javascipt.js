

    
    
function check(){
var user = document.getElementById("user").value;
var fname = document.getElementById("username").value; 
var phone = document.getElementById("number").value; 
var myreg = /^[09]{2}\d{8}$/;
var email = document.getElementById("mail").value;
var reg = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
var userreg=/^[\u4E00-\u9FFF]+$/;

    if (user.length<6){
        alert("字數不足");    
        
    }

    else if(!userreg.test(fname)){
        alert("必須輸入中文！且兩個字以上");
        
    }
    
    else if(fname.length<2){
        alert("必須輸入中文！且兩個字以上");
        
    }

    else if(phone.length==0){
        alert("手機號碼不能為空！");
        
    } 

    else if(phone.length!=10){ 
            alert("請輸入有效的手機號碼，需是10位！");
        
    } 
    
    else if(!myreg.test(phone)) { 
        alert("請輸入有效的手機號碼！"); 
            
        } 

    else if(!reg.test(email)){
        alert('郵箱格式不正確！');
        
    }
else alert("驗證成功");    
return true;    
}

function showList(){
    if (check()){
        alert("帳號:"+document.getElementById("user").value+"\n"
        +"姓名:"+document.getElementById("username").value+"\n"
        +"手機:"+document.getElementById("number").value+"\n"
        +"信箱:"+document.getElementById("mail").value
    );
    }
    
}






