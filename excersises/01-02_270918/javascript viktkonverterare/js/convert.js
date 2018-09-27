let output      = document.querySelector('#output'),
    input       = document.querySelector('#lbsInput'),
    gramsOutput = document.querySelector('#gramsOutput'),
    kgOutput    = document.querySelector('#kgOutput'),
    ozOutput    = document.querySelector('#ozOutput');

const lbsToGrams = lbs => {
  return lbs / 0.0022046;
};

const lbsToKg = lbs => {
  return lbs / 2.2046;
};

const lbsToOz = lbs => {
  return lbs * 16;
};

const toggleOutput = (visible) => {
  if (visible) {
    output.style.visibility = 'visible';
  } else {
    output.style.visibility = 'hidden';
  }
};

toggleOutput(false);

// Inputet 'event' som parameter så vi kan använda den
const inputEvent = event => {
  // 'event' är input-eventet
  // 'target': Elementet där eventet anropades ifrån
  // 'value': värdet det elementet har om det är ett input element
  let lbs = event.target.value;
  console.log(lbs);

  // Göm fältet om det är tomt
  if (event.target.value === '') {
    toggleOutput(false);
    return;
  } else {
    toggleOutput(true);
  }

  let grams = Math.round(lbsToGrams(lbs)),
      kg    = lbsToKg(lbs),
      oz    = lbsToOz(lbs);

  // Updatera fälten
  gramsOutput.textContent = grams.toString();
  kgOutput.textContent    = kg.toString();
  ozOutput.textContent    = oz.toString();
};

input.addEventListener('input', inputEvent);
