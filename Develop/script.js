
var now = dayjs();
var formattedDate = now.format("dddd MMM DD, YYYY");
var currentHour = now.format("H");
var timeBlocks = document.getElementsByClassName('time-block');

document.getElementById("currentDay").textContent = formattedDate;

Array.from(timeBlocks).forEach(timeBlock => {
  const blockHour = parseInt(timeBlock.id);

  if (blockHour < currentHour) {
    timeBlock.classList.add('past');
  } else if (blockHour == currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }
})

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('saveBtn')) {
    const inputElement = event.target.parentElement.querySelector('.description');
    const inputValue = inputElement.value;
    const key = 'timeBlock-' + inputElement.closest('.time-block').id;
    localStorage.setItem(key, inputValue);
  }
})

window.addEventListener('load', function() {
  document.querySelectorAll('.time-block').forEach(function(timeBlock) {
    const key = 'timeBlock-' + timeBlock.id;
    const savedValue = localStorage.getItem(key);
    timeBlock.querySelector('.description').value = savedValue;
  });
});