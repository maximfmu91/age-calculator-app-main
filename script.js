

let calcForm = document.querySelector('.calc-form');

let dayInput = document.querySelector('.day-input');
let dayError = document.querySelector('.day-error');
let monthInput = document.querySelector('.month-input');
let monthError = document.querySelector('.month-error');
let yearInput = document.querySelector('.year-input');
let yearError = document.querySelector('.year-error');

let dateCells = document.querySelectorAll('.date-cell');
let ageNumberCell = document.querySelectorAll('.age-number-cell');


let yearsResult = document.querySelector('.years-result');
let monthsResult = document.querySelector('.months-result');
let daysResult = document.querySelector('.days-result');

if (window.innerWidth > 681) {
  for (let elem of ageNumberCell) {
    if (elem.textContent === '--') {
      elem.style.letterSpacing = '1.5rem';
      elem.style.marginRight = '-7px';
    } 
  }
}
calcForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let hasErrors = false;

    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    let currentDay = now.getDate();
    let userBirthYear = +yearInput.value;
    let userBirthMonth = +monthInput.value;
    let userBirthDay = +dayInput.value;
    let maxDayInMonth = new Date(userBirthYear, userBirthMonth, 0).getDate();
    
    let years = currentYear - userBirthYear;
    let months = currentMonth - userBirthMonth;
    let days = currentDay - userBirthDay;


    if (yearInput.value === '') {
      yearError.style.display = 'inline-block';
      yearError.textContent = 'This field is required';
      yearInput.style.borderColor = 'red';
      hasErrors = true;
    } else if (userBirthYear > currentYear || (userBirthYear == currentYear && userBirthMonth > currentMonth) || (userBirthYear == currentYear && currentMonth == userBirthMonth && currentDay < userBirthDay)) {
      yearError.style.display = 'inline-block';
      yearError.textContent = 'Must be in the past';
      yearInput.style.borderColor = 'red';
      hasErrors = true;
    } else {
      yearError.style.display = 'none';
      yearInput.style.borderColor = 'hsl(0, 0%, 86%)';
  }

  if (monthInput.value === '') {
    monthError.style.display = 'inline-block';
    monthError.textContent = 'This field is required';
    monthInput.style.borderColor = 'red';
    hasErrors = true;
  } else if (userBirthMonth > 12 || userBirthMonth < 1) {
    monthError.style.display = 'inline-block';
    monthError.textContent = 'Must be a valid month';
    monthInput.style.borderColor = 'red';
    hasErrors = true;
  }  else {
    monthError.style.display = 'none';
    monthInput.style.borderColor = 'hsl(0, 0%, 86%)';
  }

  if (dayInput.value === '') {
    dayError.style.display = 'inline-block';
    dayError.textContent = 'This field is required';
    dayInput.style.borderColor = 'red';
    hasErrors = true;
  } else if ((userBirthDay > maxDayInMonth && userBirthDay < 32) || userBirthDay < 1) {
    dayError.style.display = 'inline-block';
    dayError.textContent = 'Must be a valid date';
    dayInput.style.borderColor = 'red';
    hasErrors = true;
  } else {
    dayError.style.display = 'none';
    dayInput.style.borderColor = 'hsl(0, 0%, 86%)';
  }

  if (userBirthDay > 31) {
    dayError.style.display = 'inline-block';
    dayError.textContent = 'Must be a valid day';
    dayInput.style.borderColor = 'red';
    hasErrors = true;
    }

    if (hasErrors) {
      return;
    } 

    if (currentDay < userBirthDay) {
      months--;
      days += maxDayInMonth;
    }   

if(currentMonth < userBirthMonth || (currentMonth == userBirthMonth && currentDay < userBirthDay)) {
    years--;
    months += 12;
  }

  yearsResult.textContent = years;  
  monthsResult.textContent = months;
  daysResult.textContent = days;

  for (let elem of ageNumberCell) {
    elem.style.letterSpacing = '0rem';
    elem.style.marginRight = '0px';
  }

});

























































