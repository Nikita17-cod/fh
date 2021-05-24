// $(document).ready(function() {
//     $('.arr__down').click(function(event) {
//         $('.arr__down').appClass('sub-select__list');
//     });
// });

// $('.arr__down').click(function(){
//     $(this).parent('.box').toggleClass('active');
//   });
let item = document.querySelector(".select__link");
let select = document.querySelector(".sub-select__list");

select.addEventListener("click", function(e) {
    e = e.target;
    if (!e.classList.contains("sub-select__link")) return;
    item.innerHTML = e.innerHTML;
});