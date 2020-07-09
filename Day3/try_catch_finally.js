function reverseString(s) {
    try{ 
        var a=[],j=0;
     if(typeof(s)=="number")
         console.log("s.split is not a function")
     
     for(let i=s.length-1;i>=0;i--)
     a[j++]=s[i];
     
  if(a.length>0)   
 console.log(a.join(''))
    }
    catch(err){
        console.log(err);
    }
    finally{
        if(a.length<1)
        console.log(s)
    }
 }
 
 