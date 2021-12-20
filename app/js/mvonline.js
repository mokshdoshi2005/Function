function style1() {
    var element =document.body;
    element.classList.toggle("style1")
}

function style2() {
    var element =document.body;
    element.classList.toggle("style2")
}

function gallery() {
    var element =document.body;
    element.classList.toggle("Gallery")
}

document.getElementById("1")
    .addEventListener('click',() => {style1()})
;

// document.getElementById("two")
//     .addEventListener('click',() => {style2()})
// ;

const g = document.querySelector('.Gallery');

let limit = 10;
let postcount = 1;
let loop = 1;

const getpost = async() => {
    const response = await fetch(`/image`)
    //console.log(response)

    response.map((curEle, index) => {

        var n = 1;
        if (n < 4){
            
            const htmlData = `
            <div class="gallery__nu">
                <img src="DB.(postcount++)" alt="" style="border-radius: 15px; margin: 0.5rem; grid-column: n / n+1;;">
            </div>  
            `
            //gallery.insertAdjacentHTML('afterbegin', htmlData)
            console.log(n)    
            n = n++
        }

    })

}

getpost();