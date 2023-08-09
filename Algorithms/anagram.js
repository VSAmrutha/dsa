
function Validanagram(first,second){
    if(first.length!==second.length) return false;
    const lookup={}
    for(let i=0;i<first.length;i++){
        let letter=first[i];
        //increment if letter is present, if increment the count
        lookup[letter]? lookup[letter]+=1: lookup[letter]=1        
    }
    for(let i=0;i<second.length;i++){
        let letter=second[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter]-=1
        }
    }
    return true
}
//Validanagram('anagram','nagaram') // true
//Validanagram('aaz','zaa') // true
//Validanagram('rat','car') // true
Validanagram('texttwisttime','timetwisttext') // true
Validanagram('amanaplanacanalpanama','acanalmanplanpamana') //true

function ValidanagramMy(str1,str2){
    if(str1.length!==str2.length) return false
    let arrStr1=str1.split("")
    let arrStr2=str2.split("")
    
    let frequencycounter1={}
    let frequencycounter2={}
    for(let val of arrStr1){
        frequencycounter1[val]=(frequencycounter1[val] || 0)+1
    }
    for(let val of arrStr2){
        frequencycounter2[val]=(frequencycounter2[val] || 0)+1
    }
    for(let key in frequencycounter1){
        if(!key in frequencycounter2){
            return false
        }
        if(frequencycounter1[key]!==frequencycounter2[key]){
            return false
        }
    }
    return true
}