students=[
    {
        ad:'Samir',
        soyad:'Kerimov',
        yas:40
    },
    {
        ad:'Hesen',
        soyad:'Kerimov',
        yas:35
    },
    {
        ad:'Hesen',
        soyad:'Serdarov',
        yas:23
    },
    {
        ad:'Malik',
        soyad:'Quliyev',
        yas:23
    }
]

// adi hesen olan istifadecileri goster
// soyadi Kerimov olan istifadecileri goster
// adlari eyni olan istifadecileri goster
// soyadlari eyni olan istifadecileri goster
let result

function studentFilteri(qayda){
    arr=[]
    for (i in students) {
        if(qayda(students[i])){
            arr.push(students[i])
        }
        result = student.filter((el) => student.filter(_el => _el.ad === el.ad).length > 1)

        return arr
    
    }
    
    
    let telebe = studentFilter(student => student.ad == 'Hesen')
