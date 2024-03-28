// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();


//const Listing = require(".../models/listing.js");
  document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const cards = document.querySelectorAll(".listing-link");
    
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        filterItems();
    });

    searchInput.addEventListener("input", function () {
        filterItems();
    });

    function filterItems() {
        //console.log("clicked");
        const searchText = searchInput.value.toLowerCase();
        
        //console.log(items);
        cards.forEach((card) => {
          const title = card.querySelector("p").textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});
