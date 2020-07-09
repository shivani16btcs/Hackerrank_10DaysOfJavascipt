function vowelsAndConsonants(s) {
    var v=[];
    var c=[];
    for (let i=0;i<s.length;i++){
        if(s[i]=='a'||s[i]=='i'||s[i]=='e'||s[i]=='o'||s[i]=='u')
        v.push(s[i]);
        else
        c.push(s[i]);
    }
    for(let i=0;i<v.length;i++)
    console.log(v[i]);
    for(let i=0;i<c.length;i++)
    console.log(c[i]);
}