
// let showvalu=document.getElementById("getkey")
// let delvalu=document.getElementById("delkey")


function add()
{
    let key=document.getElementById("addkey").value;
    let val=document.getElementById("addval").value;
    document.cookie = key + "=" + val;
    alert("COOKIE IS ADDED!!")
    showli();
}
function get(){
    let ke=document.getElementById("getkey").value;
    let l=document.cookie.split(';');
    let sh=document.getElementById("show");
    for(let i=0;i<l.length;i++){
        let ck=l[i];
        alert(ck);
        if(ck.substr(0,ke.length-1)==ke){
            sh.innerHTML=
            `
            <p>${ck.substr(ke.length+2)}</p>
            `
        }
    }
}
function del(){
    let name=document.getElementById("delkey").value + "=";
    document.cookie = name + '=;max-age=0';
    alert("COOKIE IS DELETED!!")
    showli();
}
function showli(){
    let lis=document.cookie.split(';');
    let listt=document.getElementById("li");
    listt.innerHTML='';
    for(let l=0;l<lis.length;l++){
        
        listt.innerHTML+=
        `
        <p>${lis[l]} </p>
        `;
    }
}
