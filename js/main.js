/*
 * DoBu Martial Arts - Main JavaScript File
 * Author: Hare Om
 * Cohort: FED-0725
 * Uses: jQuery 3.7.1
 */

$(document).ready(function() {

  // ===== MOBILE MENU TOGGLE =====
  $('.menu-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
  });

  // ===== STICKY HEADER ON SCROLL =====
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  });

  // ===== SMOOTH SCROLL =====
  $('a[href^="#"]').on('click', function(e) {
    const target = $(this).attr('href');
    if (target !== '#' && $(target).length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top - 80
      }, 800);
    }
  });

  // ===== CLASSES FILTER (jQuery) =====
  $('.filter-checkbox').on('change', function() {
    filterClasses();
  });

  $('#level-filter').on('change', function() {
    filterClasses();
  });

  $('#class-search').on('keyup', function() {
    filterClasses();
  });

  function filterClasses() {
    const searchTerm = $('#class-search').val().toLowerCase();
    const selectedLevel = $('#level-filter').val();
    const selectedCategories = [];

    $('.filter-checkbox:checked').each(function() {
      selectedCategories.push($(this).val());
    });

    let visibleCount = 0;

    $('.class-card').each(function() {
      const className = $(this).find('.card-title').text().toLowerCase();
      const classLevel = $(this).data('level');
      const classCategory = $(this).data('category');

      let showCard = true;

      if (searchTerm && !className.includes(searchTerm)) {
        showCard = false;
      }

      if (selectedLevel !== 'all' && classLevel !== selectedLevel) {
        showCard = false;
      }

      if (selectedCategories.length > 0 && !selectedCategories.includes(classCategory)) {
        showCard = false;
      }

      if (showCard) {
        $(this).fadeIn(300);
        visibleCount++;
      } else {
        $(this).fadeOut(300);
      }
    });

    $('#results-count').text(`Showing ${visibleCount} classes`);
  }

  // ===== CONTACT FORM VALIDATION =====
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const name = $('#name').val().trim();
    if (name.length < 2) {
      showError('#name', 'Please enter your full name');
      isValid = false;
    } else {
      clearError('#name');
    }

    const email = $('#email').val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('#email', 'Please enter a valid email');
      isValid = false;
    } else {
      clearError('#email');
    }

    const message = $('#message').val().trim();
    if (message.length < 10) {
      showError('#message', 'Message must be at least 10 characters');
      isValid = false;
    } else {
      clearError('#message');
    }

    if (isValid) {
      alert('Message sent successfully!');
      this.reset();
    }
  });

  function showError(fieldId, message) {
    $(fieldId).addClass('error');
    $(fieldId).next('.form-error').text(message).show();
  }

  function clearError(fieldId) {
    $(fieldId).removeClass('error');
    $(fieldId).next('.form-error').hide();
  }

  // ===== SCHEDULE BOOKING =====
  // Note: Booking buttons now use coming-soon modal instead of alerts
  // Event handler removed - buttons now use .coming-soon class to trigger modal

  // ===== COMING SOON MODAL (jQuery) =====
  // Show modal for features that are coming soon
  $('.coming-soon').on('click', function(e) {
    e.preventDefault();
    $('.modal-overlay').addClass('active');
    $('body').css('overflow', 'hidden'); // Prevent scrolling
  });

  // Close modal
  $('.modal-close, .modal-overlay').on('click', function(e) {
    if (e.target === this) {
      $('.modal-overlay').removeClass('active');
      $('body').css('overflow', 'auto'); // Re-enable scrolling
    }
  });

  // Close modal on ESC key
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      $('.modal-overlay').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });

  console.log('DoBu MA loaded! 🥋');
});
