

// var tablinks=document.getElementsByClassName("tab-links");
// var tabcontents=document.getElementsByClassName("tab-contents");

// function opentab(tabname){
//     // console.log(tabname);
//  for(tablink of tablinks){
//      tablink.classList.remove("active-link");
//  }
//   for(tabcontent of tabcontents){
//       tabcontent.classList.remove("active-tab");
//   }


// event.currentTarget.classList.add("active-link");
// document.getElementById(tabname).classList.add("active-tab"); }



// .tab-contents{
//     display: none;
// }
// .tab-contents.active-tab{
//     display: block;
// }




var tablinks=document.getElementsByClassName("tab-links");
 var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.getElementById('id-accordian').addEventListener('click', function(event) {
    // Check if a list item was clicked
    if (event.target.tagName === 'LI') {
      // Remove 'active' and 'active-link' classes from all list items
      document.querySelectorAll('#id-accordian li').forEach(function(li) {
        li.classList.remove('active', 'active-link');
      });

      // Add 'active' and 'active-link' classes to the clicked list item
      event.target.classList.add('active', 'active-link');

      var target = event.target.getAttribute('data-target')
      var targetWithoutHash = target.substring(1);
      
      document.querySelectorAll('div.accordion').forEach(function(card) {
        card.classList.add('accordion-inactive'); // hide all cards
      });
        document.getElementById(targetWithoutHash).classList.remove("accordion-inactive");
    }
  });