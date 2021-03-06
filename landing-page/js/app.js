// Define Global Variables
 
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section');
//creating a list tag //
const li = document.createElement("li");
// creating an anchor tag //
const anchorTag = document.createElement('a');

let getSection =document.querySelector('section');
function clickFinder (e) {
    if (e.target.nodeName === "SPAN");
}

getSection.addEventListener('click', clickFinder);
let activeLi;
//creating a forloop that will append ul to the navbar list
for (let i = 0; i < sections.length; i++) {
    //appending list elements to the ul node 
    activeLi = ul.appendChild(li.cloneNode());
    //set the attribute of list //
    activeLi.setAttribute('class', 'navbar_list')
}

//selecting all values that have the class .navbar_list
let selectedli = document.querySelectorAll('.navbar_list')
selectedli[0].classList.add('active')
//looping through every list //
selectedli.forEach((anLi) => {
    //appending an anchor tag to each list
    let activeAnchor = anLi.appendChild(anchorTag.cloneNode())
})

// selecting all anchor tags //
let allAnchor = document.querySelectorAll("a");
for (i = 1; i <= sections.length; i++) {
    //setting attribute for each anchor element in the allAnchor array
    //by their index.
    allAnchor[i - 1].setAttribute("href", `#section${i}`);
    //appending a text node to each anchor element 
    allAnchor[i - 1].appendChild(document.createTextNode(`section${i}`))
    //appending a class to each anchor element . 
    allAnchor[i - 1].classList.add("menu__link");
}

//an event that fires when the window of the browser is been scrolled
// build the nav
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", (event) => {
    event.preventDefault();
    sections.forEach(section => {
        let sectionMeasurements = section.getBoundingClientRect();
        console.log (sectionMeasurements)
        //setting the active class when the top of the section border is 
        // greater than or equal to 0 and the section bottom is greater 
        // than zero .
        //the else statement will remove the preset class if the condition is 
        // false 
        if (
            sectionMeasurements.top -100 <= 0 && sectionMeasurements.bottom -100 >= 0 
            ) {
           section.classList.add('visiblesection');
           let targetMenu = document.querySelector(`a[href="#${section.getAttribute('id')}"]`)
          
           targetMenu.classList.add('active-menu');
        }
        else {
            section.classList.remove('visiblesection');
            let targetMenu = document.querySelector(`a[href="#${section.getAttribute('id')}"]`)
          
           targetMenu.classList.remove('active-menu');
        }
    })
});

allAnchor.forEach(anchor => {
    addEventListener('click', (e) => {
        e.preventDefault();
        anchor = e.target.getAttribute("href");
        document.querySelector(anchor).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
})
