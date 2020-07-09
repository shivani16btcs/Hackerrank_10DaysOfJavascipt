function getCount(objects) {
    let p=0;
    for (let i=0;i<objects.length;i++){
        if(objects[i].x==objects[i].y){
            p++;
        }
    }
    return p;
}
