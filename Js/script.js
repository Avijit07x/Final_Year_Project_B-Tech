// Drop Down List
function toggleDropdown(dropdownId) {
    let dropdown = document.getElementById(dropdownId).querySelector('.drop-down');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
    let dropdowns = document.querySelectorAll('.drop-down');

    dropdowns.forEach(function (dropdown) {
        let parent = dropdown.parentNode;
        if (!event.target.classList.contains('fa-angle-down') && event.target.parentNode !== parent && !parent.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
}
