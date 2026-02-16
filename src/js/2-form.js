const formData = {
  email: '',
  message: '',
};

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

const fillFeedbackFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFromLS === null) {
    return;
  }

  const formDataFromLSKeys = Object.keys(formDataFromLS);

  formDataFromLSKeys.forEach(key => {
    formData[key] = formDataFromLS[key];
    refs.feedbackForm.elements[key].value = formDataFromLS[key];
  });
};

fillFeedbackFormFields();

const onfeedBackFormInput = ({ target: formField }) => {
  const formFieldValue = formField.value.trim();
  const formFieldName = formField.name;

  formData[formFieldName] = formFieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  event.currentTarget.reset();
};
refs.feedbackForm.addEventListener('input', onfeedBackFormInput);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
