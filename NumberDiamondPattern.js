//     1 
//    1 2 
//   1 2 3 
//  1 2 3 4 
// 1 2 3 4 5 
//  1 2 3 4 
//   1 2 3 
//    1 2 
//     1 
rows=5;
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?i:2*rows-i;
    spaces=(i<=rows)?rows-i:i-rows;
    res="";
    for(k=1;k<=spaces;k++){
        res=res+" ";
    }
    for(j=1;j<=cols;j++){
        res=res+j+" ";
    }
    console.log(res);
}