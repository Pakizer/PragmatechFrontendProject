let container=document.querySelector('.container')
setting={
    gridWidth:1200,
    itemCount:40,
    columnCount:5,
    gap:10
}

function createGridLayout(){
    item= `<div class="item"></div>`
    container.style.width=`${setting.gridWidth}px`
    container.style.gridTemplateColumns=`repeat(${setting.columnCount},1fr)`
    container.style.gridGap=`${setting.gap}px`
    for(let i=1;i<setting.itemCount;i++){
        container.innerHTML+=item
    }

}
createGridLayout(setting)