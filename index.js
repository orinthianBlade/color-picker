let colorsArr = Array.from({length: 5}, () => "#000000")
document.querySelector("button").addEventListener("click",() => {
    const colorValue = document.querySelector("input").value.substr(1)
    const selectedOption = document.querySelector("option:checked").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${selectedOption}`)
        .then(res => res.json())
        .then(function(data) {
            let filteredData = []
            data.colors.forEach(x => filteredData.push(x.hex.value))
            for (let i = 1; i < 6; i++){
                colorsArr[i-1] = filteredData[i-1]
                document.querySelector(`p.color-${i}`).textContent = filteredData[i-1]
                document.querySelector(`div.color-${i}`).style.backgroundColor=filteredData[i-1]
            }
            
        })
})

function setCopiedColors(currentIndex){
    navigator.clipboard.writeText(colorsArr[i-1])
}

for (let i = 1; i < 6; i++) {
    document.querySelectorAll(`.color-${i}`).forEach(x => x.addEventListener("click", 
    () => navigator.clipboard.writeText(colorsArr[i-1]).then(
  () => {
    /* clipboard successfully set */
     console.log("hi")
  },
  () => {
    /* clipboard write failed */
    console.log("FLOP ")
  }
)))
}


