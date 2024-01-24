let n=prompt("Enter number");
if(n){
    let rev=parseInt(n.split('').reverse().join(''));
    alert(rev);
} else alert("Invalid")