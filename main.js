function colorFull(){
    let el = document.getElementById("color")
    let a= "#"+ (Math.floor(Math.random()*15728640)+1048576).toString(16)
    el.style.backgroundColor = a
    document.getElementById('parag').innerText=a
}
// const btn = document.getElementById('btn')
// btn.onclick = colorFull
// console.log((Math.floor(Math.random()*15728640)+1048576).toString(16));
// console.log((Math.floor(Math.random()*15728640)+1048576).toString(16));