// '<script type="text/javascript" src="evercookie.js"></script>'

// '<script>'
// var ec = new evercookie(); 

// // set a cookie "id" to "12345"
// // usage: ec.set(key, value)
// ec.set("id", "12345"); 

// // retrieve a cookie called "id" (simply)'
// ec.get("id", function(value) { alert("Cookie value is " + value) }); 

// // or use a more advanced callback function for getting our cookie
// // the cookie value is the first param
// // an object containing the different storage methods
// // and returned cookie values is the second parameter
// function getCookie(best_candidate, all_candidates)
// {
//     alert("The retrieved cookie is: " + best_candidate + "\n" +
//         "You can see what each storage mechanism returned " +
//         "by looping through the all_candidates object.");

//     for (var item in all_candidates)
//         document.write("Storage mechanism " + item +
//             " returned: " + all_candidates[item] + "<br>");
// }
// ec.get("id", getCookie); 

// // we look for "candidates" based off the number of "cookies" that
// // come back matching since it's possible for mismatching cookies.
// // the best candidate is most likely the correct one
// '</script> '

const opengallerybtn = document.querySelectorAll('[data-modal-target]');
const closegallerybtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const classgal = document.getElementById('gallery');
console.log(opengallerybtn, closegallerybtn, overlay, classgal)

// function openmodal(modal) {
//     if (modal == null) {
//         classgal.classList.toggle('active')
//         overlay.classList.add('active')
//         console.log('openmodal executed')
//     }

// }

// function closemodal(modal) {
//     if (modal == null) {
//         classgal.classList.remove('active')
//         overlay.classList.remove('active')
//     }
    
// }

function oly() {
    var mdl = document.getElementById('gallery');
    var OT = document.getElementById('overlay');
    mdl.classList.toggle("active")
    OT.classList.toggle("active")
}
opengallerybtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modaltarget)
        console.log(modal)
        openmodal(modal);
    })
})

closegallerybtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        console.log('modal')
        closemodal(modal);
    })
})
