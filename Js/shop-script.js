// Trigger click on the first button by default
document.getElementById('gird-icon-btn').click();

function displayGridItem() {
  document.getElementById('shopProductGridList').classList.remove('shop-product-section-list-body');
  document.getElementById('shopProductGridList').classList.add('shop-product-section-grid-body');
  // Add 'active' class to the clicked button
  document.getElementById('gird-icon-btn').classList.add('active');
  // Remove 'active' class from the other button
  document.getElementById('list-icon-btn').classList.remove('active');
}

function displayListItem2() {
  document.getElementById('shopProductGridList').classList.remove('shop-product-section-grid-body');
  document.getElementById('shopProductGridList').classList.add('shop-product-section-list-body');
  // Add 'active' class to the clicked button
  document.getElementById('list-icon-btn').classList.add('active');
  // Remove 'active' class from the other button
  document.getElementById('gird-icon-btn').classList.remove('active');
}

function changeOption(selectedOption) {
    // Get the text content of the selected option
    var selectedText = selectedOption.textContent;

    // Update the text of the dropdown button
    document.getElementById('dropdown-btn').textContent = selectedText;

    // Remove the 'selected' class from all list items
    var allOptions = document.querySelectorAll('.dropdown-content li');
    allOptions.forEach(function(option) {
      option.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked option
    selectedOption.classList.add('selected');
  }