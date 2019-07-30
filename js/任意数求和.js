var ary=[1,2,3,4,5,'AA',true];

function sum(){
    let total=null;
    for(let i=0;i<arguments.length;i++){
        let item=Number(arguments[i]);
        if(isNaN(item)){
            continue;
        }
        total+=item;
    }
    return total;
}

let AA=sum(ary)
console.log(AA);