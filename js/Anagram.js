
    let s1=prompt("Enter string 1");
    let s2=prompt("Enter string 2");
    if( s1 && s2){
        const v1=s1.split('').sort().join('');
        const v2=s2.split('').sort().join('');
        if(v1 == v2) alert("Equal");
        else alert("Not Equal");
        alert(v1 +" --- "+v2);
    }
    else alert("invalid");