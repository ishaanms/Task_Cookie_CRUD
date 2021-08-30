
// let showvalu=document.getElementById("getkey")
// let delvalu=document.getElementById("delkey")

function showli(){
    alert('showli works')
    let lis=document.cookie.split();
    for(let l=0;l<lis.length;l++){
        document.innerHTML+=
        `
        <div class="li">
        <p>${lis[l]} </p>
        <div>
        `;
    }
}
function add()
{
    let key=document.getElementById("addkey").value;
    let val=document.getElementById("addval").value;
    document.cookie = key + "=" + val;
    showli();
}
function get(){
    let ke=document.getElementById("getkey").value + "=";
    let l=document.cookie.split();
    for(let i=0;i<l.length;i++){
        let ck=l[i];
        if(ck.substr(0,ke.length+2)===ke){
            document.innerHTML=
            `
            <div class="show">
            <p>${ck.substr(ke.length+2)}</p>
            </div>
            `
        }
    }
}
function del(){
    let name=document.getElementById("delkey").value + "=";
    let l=document.cookie.split();
    for(let i=0;i<l.length;i++){
        let ck=l[i];
        if(ck.substr(0,name.length+2)===name){
            document.cookie=name+";max-age=0";
        }
    }
    showli();
}
