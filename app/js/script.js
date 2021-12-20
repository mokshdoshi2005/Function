function ScollTo() {
    document.documentElement.scrollTop = 0; "used"
    window.top = 0;
    window.behaviour = 'smooth' 
}

function output() {

    var y = document.getElementById("input").value;
    z="we got "
    
    if (y !== ""){
        document.getElementById("output").innerHTML=z + y;
    }
}

// function style2() {
//     $('body').toggleClass('style2');
// }

document.getElementById("btnscrolltop")
    .addEventListener('click',() => {ScrollTo()})
;

//

let x = "hello"
document.getElementById("var").innerHTML=x;

//

document.getElementById("out-ent")
    .addEventListener('click',() => {output()})
;

//

var photo = document.getElementById("img").value;

//var link = photo

// document.getElementById("import")
//     .addEventListener('click',() => {imprt()})
// ;

// function imprt() {
//     document.getElementById("import_pop").innerHTML=photo;
// }


