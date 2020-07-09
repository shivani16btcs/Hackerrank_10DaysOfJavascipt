function isPositive(a) {
try{
    if(a==0)
    throw "Zero Error";
    if(a<0)
    throw "Negative Error";
}
catch(err){
    return err
   }

return "YES"
 
}
