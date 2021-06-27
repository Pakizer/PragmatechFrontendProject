let numbers=[1,4,7,9,12,56,23,89]

// tek ededleri goster
// cut ededleri goster
// 3 e bolunen ededleri goster
// 3 ve ya 5 e bolunen ededleri goster


function arrFilter(arr,rule){
    let newArr=[]
    for(x in arr){
        if(rule(arr[x])){
            newArr.push(arr[x])
        }
    }

    return newArr
}


let check=a=>a>30
arrFilter([3,67,89,12,145,567],check)



// herfsayi 5 den boyuk olan adlari goster
arr=['Iskender','Araz','Elvin','Aytac','Pakizer','Togrul']
let result


function newArr(){
for(a in arr){
if(result = arr.filter(letter => letter.length > 5)){
  return result
} 
  
}

}

console.log(newArr())




adlar=['Iskender','Araz','Elvin','Aytac','Pakizer','Togrul']

// herfsayi 5 den boyuk olan adlari goster
// daxilinde a herfi olan adlari goster
// son herfi r olan adlari goster
// 


function sozFilteri(qayda){
    arr=[]
    for(i=0;i<adlar.length;i++){
        if(qayda(adlar[i])){
            arr.push(adlar[i])
        }
    }

    return arr
}

let sozler=sozFilteri(soz=>soz.length>5)