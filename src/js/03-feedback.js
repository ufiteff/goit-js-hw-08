import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'
const userData = {
  'email': '',
  'message':''
}
const refs = {
  form : document.querySelector('.feedback-form'),
  email :  document.querySelector('.feedback-form input'),
  message : document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onSubmitForm);
refs.message.addEventListener('input', throttle(onSetData, 500));
refs.email.addEventListener('input', throttle(onSetData, 500));


onGetData()

function onSetData(e) {
  userData.email =refs.email.value
  userData.message = refs.message.value
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
}

function onSubmitForm(e) {
  e.preventDefault();
  
    console.log(`e-mail: ${refs.email.value}, message: ${refs.message.value}`);

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onGetData() {
  const savedData = localStorage.getItem(STORAGE_KEY)
  const parseData = JSON.parse(savedData)
  
  if (parseData) {
    refs.email.value = parseData.email || ''
    refs.message.value = parseData.message || ''
  }
}
