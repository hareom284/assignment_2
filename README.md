# DoBu Martial Arts Website

**Assignment 2: Build Website using HTML, CSS, JavaScript & jQuery**

**Student:** Hare Om
**Cohort:** FED-0725
**Module:** Front-End Web Development
**Date:** November 28, 2024

---

## Project Overview

This is a fully functional website for DoBu Martial Arts gym, built using HTML5, CSS3, JavaScript, and jQuery. The website implements the wireframes, information architecture, and branding strategy from Assignment 1.

---

## Website Structure

```
dobu-website/
│
├── index.html                  # Homepage
├── css/
│   └── styles.css             # Main stylesheet
├── js/
│   └── main.js                # jQuery and JavaScript functions
├── pages/
│   ├── classes.html           # Classes page with jQuery filtering
│   ├── schedule.html          # Schedule with booking functionality
│   ├── contact.html           # Contact form with validation
│   └── membership.html        # Membership pricing plans
├── images/                     # Image assets
└── README.md                  # This file
```

---

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, Flexbox, Grid
- **JavaScript (ES6)** - Vanilla JS functions
- **jQuery 3.7.1** - DOM manipulation and event handling
- **Google Fonts** - Montserrat & Open Sans typography
- **Responsive Design** - Mobile-first approach

---

## Key Features

### 1. Homepage (index.html)
- Hero section with call-to-action buttons
- Feature cards showcasing gym benefits
- Featured classes grid
- Statistics section
- Responsive navigation with mobile menu

### 2. Classes Page (classes.html)
**jQuery Features:**
- Real-time search filtering
- Category checkboxes (Martial Arts, Fitness, Self-Defense)
- Level dropdown filter (Beginner, Intermediate, Advanced)
- Dynamic results count update
- Smooth fade-in/fade-out animations

**Code Snippet (main.js lines 45-89):**
```javascript
$('.filter-checkbox').on('change', function() {
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
```

### 3. Schedule Page (schedule.html)
**jQuery Features:**
- Interactive timetable
- Book button with data attributes
- Click event handlers for booking
- Alert/confirmation messages
- Full class detection

**Code Snippet (main.js lines 134-162):**
```javascript
$('.book-btn').on('click', function() {
  const className = $(this).data('class');
  const classTime = $(this).data('time');
  const classDay = $(this).data('day');
  const instructor = $(this).data('instructor');

  if ($(this).hasClass('full')) {
    alert('Sorry, this class is full.');
  } else {
    alert(`Booking confirmed: ${className} at ${classTime}`);
  }
});
```

### 4. Contact Page (contact.html)
**jQuery & JavaScript Features:**
- Form validation on submit
- Email regex validation
- Phone number validation
- Required field checking
- Error message display
- FAQ accordion toggle

**Code Snippet (main.js lines 91-132):**
```javascript
$('#contact-form').on('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  // Name validation
  const name = $('#name').val().trim();
  if (name.length < 2) {
    showError('#name', 'Please enter your full name');
    isValid = false;
  } else {
    clearError('#name');
  }

  // Email validation
  const email = $('#email').val().trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('#email', 'Please enter a valid email');
    isValid = false;
  } else {
    clearError('#email');
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
```

### 5. Membership Page (membership.html)
**jQuery Features:**
- Billing toggle (Monthly/Annual)
- Dynamic price calculation
- Pricing card hover effects
- Comparison table

---

## CSS Features

### Design System (CSS Variables)
```css
:root {
  --color-crimson: #DC143C;
  --color-black: #1A1A1A;
  --color-white: #FFFFFF;
  --color-gold: #FFB800;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

### Responsive Breakpoints
- **Desktop:** 1920px+
- **Laptop:** 1440px - 1919px
- **Tablet:** 768px - 1439px
- **Mobile:** 320px - 767px

### Key CSS Features
- CSS Grid for layouts
- Flexbox for components
- CSS transitions and animations
- Mobile-first responsive design
- Sticky header on scroll
- Card hover effects

---

## JavaScript & jQuery Features Summary

| Feature | Technology | Location |
|---------|-----------|----------|
| Mobile menu toggle | jQuery | main.js (line 10) |
| Sticky header | jQuery | main.js (line 18) |
| Smooth scroll | jQuery | main.js (line 27) |
| Classes filtering | jQuery | main.js (line 40) |
| Form validation | jQuery | main.js (line 91) |
| Schedule booking | jQuery | main.js (line 134) |
| FAQ accordion | Vanilla JS | contact.html |
| Billing toggle | jQuery | membership.html |

---

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## How to Run

1. Open `index.html` in a web browser
2. Navigate through pages using the menu
3. Test jQuery features:
   - Filter classes on Classes page
   - Book a class on Schedule page
   - Submit contact form
   - Toggle pricing on Membership page

---

## Assignment Requirements Met

✅ **HTML** - Semantic, well-structured markup
✅ **CSS** - Modern styling with brand colors from A1
✅ **JavaScript** - Vanilla JS for form validation and FAQ
✅ **jQuery** - Filtering, form handling, animations
✅ **Responsive Design** - Mobile-friendly layout
✅ **Wireframes** - Based on A1 wireframes
✅ **Branding** - Consistent with A1 branding strategy

---

## Code Quality

- ✅ Clean, commented code
- ✅ Semantic HTML5 elements
- ✅ BEM-inspired class naming
- ✅ DRY principles
- ✅ Accessible markup (ARIA labels, alt text)
- ✅ SEO-friendly meta tags

---

## Future Enhancements

- Backend integration for booking system
- User authentication and member dashboard
- Payment processing integration
- Gallery with image lightbox
- Blog/news section
- Instructor profiles
- Virtual facility tour

---

**End of README**

**Developed by:** Hare Om | **Cohort:** FED-0725 | **Date:** November 28, 2024
