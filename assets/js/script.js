

// -----------------
// Enabling popover
// -----------------

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// -----------------
// Enabling tooltip
// -----------------

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// ===== Document ready =====
$(document).ready(function() {

  // ===== Scroll to Top =====
  
  const backToTopButton = document.querySelector("#btn-back-to-top");

  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  };

  backToTopButton.addEventListener("click", goToTop);

  //Get the button
  mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  // Display and hide
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // ===== Accordion function =====

  // 💬 CURRENTLY NOT IN USE------------------
  var acc = document.getElementsByClassName("accor");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


  // ===== Nav tab switch =====

  // 💬 CURRENTLY NOT IN USE------------------
  jQuer('-').each(function(){ // ul, tabs
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = jQuery(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = jQuery($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
        jQuery(this.hash).hide();
    });

    // Bind the click event handler
    jQuery(this).on('-', '-', function(e){ // click, a
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = jQuery(this);
        $content = jQuery(this.hash);

        // Make the tab active.
        $active.addClass('active');
        $content.show();

        // Prevent the anchor's default click action
        e.preventDefault();
    });
  }); 
});