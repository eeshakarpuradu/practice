let inputbtn = document.getElementById("input-btn");

let myLeads = []
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

inputbtn.addEventListener("click", function(){
    // to clear the i/p field, on clicking on the button,
    //the input should saved in var inputValue
    //then immendiatiely the input in the field should be cleared
    //let inputValue = document.getElementById("input-el").value
    
    //myLeads.push(inputValue)
    //inputValue = " "(this is not working, idk why)
    //document.getElementById("input-el").value = " "
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
    
})

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
}

