console.log(123);
$("#btn").click(function(e){
    console.log(11);
    e.preventDefault();
    var n=$("#uname").val();
    var p=$("#upwd").val();
    var nReg=/^[a-zA-Z0-9]{3,8}$/;
    var pReg=/^[a-zA-Z0-9]{3,8}$/;

    if(!nReg.test(n)){
        alert("用户名格式不正确，字母或数字3~8");
        return;
    }
    if(!pReg.test(p)){
        alert("密码格式不正确，字母或数字3~8");
        return;
    }
    $.ajax({
        type:"POST",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        success:function (data){
            console.log(data);
            //alert(data.code+":"+data.msg);
            console.log(111);
            if(data.code>0){
                sessionStorage.setItem("uname",n);
                location.href="index.html";
            }else{
                alert("用户名密码不正确");
            }
        },
        error:function(){
            alert("您的网络出现故障，请检查");
        }
    });
});