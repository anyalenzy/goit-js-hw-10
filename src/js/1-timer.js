import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]'),
  dataDays = document.querySelector('span[data-days]'),
  dataHours = document.querySelector('span[data-hours]'),
  dataMinutes = document.querySelector('span[data-minutes]'),
  dataSeconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
    } else {
      iziToast.show({
        icon: 'izi-error-icon',
        position: 'topCenter',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        backgroundColor: '#FC5A5A',
        close: false,
        message: 'Please choose a date in the future!',
      });
      startBtn.disabled = true;
    }
  },
};
flatpickr('#datetime-picker', options);
