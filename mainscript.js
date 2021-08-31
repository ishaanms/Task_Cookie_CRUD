
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
//     let l=document.cookie.split(';');
    let sh=document.getElementById("show");
//     for(let i=0;i<l.length;i++){
//         let ck=l[i];
//         let templi=ck.split('=')
//         alert(templi);
//         alert(ke)
//         if(templi[0]===ke){
//             sh.innerHTML=
//             `
//             <p>${templi[1]}</p>
//             `
//         }
        
//     }
    let name = ke + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        sh.innerHTML=` ${c.substring(name.length, c.length)}`;
        }
    }
//     return "";
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
