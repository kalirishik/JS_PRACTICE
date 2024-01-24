let n = prompt("Enter a list of integers separated by spaces:").split(' ').map(Number);
let r=[];
for(let i=0;i<n.length;i++){
    if(n[i]%2==0)
        r.push(n[i]);
}
alert("Even numbers are : "+r);
