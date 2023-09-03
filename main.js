const card = document.querySelector("#card");

card.addEventListener("mousemove", function(details) {
    let dimensions = this.getBoundingClientRect();
    
    if( details.clientX - dimensions.x < dimensions.width/2 ) {
        // console.log("left")
        const redClr = covertToRange(details.clientX - dimensions.x, [0,dimensions.width/2], [255,0])
        this.style.backgroundColor = `rgb(${redClr},0,0)`
    } else {
        // console.log("rigtht");
        const greenClr = covertToRange(details.clientX - dimensions.x, [dimensions.width/2, dimensions.width], [0,255])
        this.style.backgroundColor = `rgb(0,${greenClr},0)`
    }
})

card.addEventListener("mouseleave", function(){
    this.style.backgroundColor = "#fff"
})

function covertToRange(value, srcRange, distRange){
    if(value < srcRange[0]  || value > srcRange[1]){
        return NaN
    }

    var srcMax = srcRange[1] - srcRange[0],
        distMax = distRange[1] - distRange[0],
        adjValue = value - srcRange[0];

    return (adjValue * distMax / srcMax + distRange[0]);
    
    
}