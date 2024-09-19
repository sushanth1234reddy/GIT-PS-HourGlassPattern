// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
rows=5;

for(i=2*rows-1;i>=1;i--){
    cols=(i>=rows)?(i-4):rows-i+1;
    spaces=(i>=rows)?(2*rows-i-1):(rows+i-6);
    res="";
    for(k=1;k<=spaces;k++){
        res=res+" ";
    }
    for(j=1;j<=cols;j++){
        res=res+"* ";
    }
    console.log(res);
}
