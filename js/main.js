// Даны инпуты. В каждый инпут можно ввести число.
// Пусть по нажатию на Enter инпут запоминает введенное число.
// Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.

const inputs = document.querySelectorAll('input');

inputs.forEach(function (input, index) {
  const inputMap = new Map();
  input.addEventListener('keypress', function (e) {
    if (e.code === 'Enter' && input.value.length > 0) {
      inputMap.set(input.value, index);
      input.value = '';

      if(document.querySelector(`[data-map-clean="${index}"]`)) {
        document.querySelector(`[data-map-clean="${index}"]`).remove();
      }

      const cleanMap = document.createElement('input');
      cleanMap.type = 'submit';
      cleanMap.value = 'Clean Map';
      cleanMap.dataset.mapClean = index;
      input.insertAdjacentElement('afterend', cleanMap);
      cleanMap.addEventListener('click', function(e) {
//        e.preventDefault();
        inputMap.clear();
        cleanMap.remove();
      })
    }
  })

  input.addEventListener('blur', function (e) {
    if (inputMap.size > 0) {
      const arr = [];
      for (let value of inputMap.keys()) {
        arr.push(value);
      }
      console.log('index', index, arr)
    }
  })

})