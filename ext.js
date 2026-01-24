let inputbtn = document.getElementById("input-btn");

let myLeads = []
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputbtn.addEventListener("click", function(){
    // to clear the i/p field, on clicking on the button,
    //the input should saved in var inputValue
    //then immendiatiely the input in the field should be cleared
    let inputValue = document.getElementById("input-el").value
    
    myLeads.push(inputValue)
    //inputValue = " "(this is not working, idk why)
    document.getElementById("input-el").value = " "
    //console.log(myLeads)
    renderLeads()
})



/*
function save(){
    console.log("helloo")
}
*/
function renderLeads() {
    let listitems = ""
    for(let i = 0; i<myLeads.length; i++) {
        
        //listitems += "<li><a target = '_blank' href = '"+ myLeads[i] +"'>" + myLeads[i] + "</a></ li>"

        //template strings
        listitems += `
        <li>
            <a target = '_blank' href = ${myLeads[i]}>
                 ${myLeads[i]}
            </a>
        </ li>`
        console.log(listitems)
     }

     
    
    ulEl.innerHTML = listitems
    let name = `
     Hi,
        I am Eesha
        Thank You!
    `
    console.log(name)
}

