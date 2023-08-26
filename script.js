// Get current hour
$(function () {
    hour = dayjs().format('HH');
});
 
// Color settings
    setColor = () => {
     $('.time-block').each(function() {
        timeBlock = $(this).attr("id").split("-")[1];
 
   // Color settings for past, present, future
       if (timeBlock === hour) {
           $(this).addClass('present');
         } else if (timeBlock > hour) {
           $(this).addClass('future');
         } else {
           $(this).addClass('past');
       }
   });
};

// Display date and time in the header
    headerTime = () => {
       currentDay = $('#currentDay');
       date = dayjs().format('dddd, MMMM D, YYYY');
       time = dayjs().format('hh:mm:ss A');
       currentDay.text(`${date} | ${time}`); 
   }
 
// Save event to local storage
    saveEvent = () => {
     $('.btn').on('click', function () {
        key = $(this).parent().attr('id');
        value = $(this).siblings('textarea').val();
        localStorage.setItem(key, value);
     })
   };
 
// Show saved events
    getEvent = () => {
     $('.time-block').each(function () {
        key = $(this).attr('id');
        value = localStorage.getItem(key);
       $(this).children('textarea').val(value);
     })
   };
   
// Keep colors updated to time
   setInterval(setColor, 1000);
   setInterval(headerTime, 1000);
   saveEvent();
   getEvent();
