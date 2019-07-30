function unique(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        let item=arr[i];
        if(obj[item]!==undefined){
            arr[i]=arr[arr.length-1];
            arr.length--;
            i--;
            continue;
        }
        obj[item]=item;
    }
return arr;
}
let aa=[1,2,3,4,2,3,5,1,6,2,3,4,6];
aa=unique(aa);
aa.sort((a,b)=> a-b);
console.log(aa)