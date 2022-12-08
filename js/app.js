/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 *
*/
// let sectionId intially equals zero before we add any section or list item in navbbar.
let sectionId = 0;
// menu is a constant refers to navbar tag 
const menu = document.getElementById(`navbar__list`);
// [0] is used as getElementsByTagName() method returns a live HTMLCollection and we need first one in collection which is main.
const main = document.body.getElementsByTagName(`main`)[0];
//selecting all sections
const sections = document.querySelectorAll(`section`);
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
//function to add a li in navbar 
function addMenuLi() {
    sectionId += 1;
    menu.insertAdjacentHTML(`beforeend`, `<li ><a class="menu__link" href="#section${sectionId}">Section ${sectionId}</a></li>`);
}//end function addMenuLi
// function setting the active section in view port
function sectionActive() {
    // for....each loop on sections to get the boundaries of active section
    sections.forEach((section) => {
        const sectionRectangle = section.getBoundingClientRect();
        /**  after getting section's rectangle boundaries 
         * According to top and bottom we add a value of "your-active-class" to class attribute inside section tag
         * And value 300 to check if it is in viewport or not .
        */
        if (sectionRectangle.top <= 150 && sectionRectangle.bottom >= 50) {
            section.classList.add(`your-active-class`);
        }
        else {
            section.classList.remove(`your-active-class`);
        }
    });//End sections ForEach loop
    /** New ForEach loop: added for review 3
    **Match the requirment: The active section in the Navbar should be highlighted.
    */
    menuLi.forEach((link) => {
        const sectionactiveid = document.querySelector('.your-active-class').getAttribute('id');
        if (link.getAttribute('href') === `#${sectionactiveid}`) {
            link.classList.add(`active_link`);
        }
        else {
            link.classList.remove(`active_link`);
        }
    });//End of new forEach
}//End sectionActive function
/**
 * End Main Functions
 * Begin Events
 *
*/
// Build menu 
//****Noitce that: when you add a menu list item it automatically creates a section for it,,if it didn't exist. 
addMenuLi();
addMenuLi();
addMenuLi();
addMenuLi();
// Set sections as active
window.addEventListener('scroll', () => {
    sectionActive();
});
// Scroll to anchor ID using scrollTO event
//list item 
const menuLi = document.querySelectorAll(`.menu__link`);
const scrollToSection = (event) => {
    event.preventDefault();
    const secId = event.target.getAttribute(`href`);
    const section = document.querySelector(secId);
    window.scrollTo({
        top: section.offsetTop, //To scroll to the top of the section.
        behavior: `smooth`,
    });
};
// Scroll to section on link click
//revoking fuction scrollToSection 
menuLi.forEach((link) => link.addEventListener('click', scrollToSection));