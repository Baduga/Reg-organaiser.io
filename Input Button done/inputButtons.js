const inputButtons = document.querySelectorAll(".input_button");
const RageinputButtons = document.querySelectorAll(".range-input_button");
const sliders = document.querySelectorAll('.input_button__range-input');

RageinputButtons.forEach(button => {
  button.addEventListener('click', () => {
    const slider = button.closest('div').querySelector('.input_button__range-input');
    const rootStyles = getComputedStyle(document.documentElement);
    const transition = rootStyles.getPropertyValue('--input-button-transition-time');
    let time = parseFloat(transition);
    
    if (isNaN(time)) {
      console.error('Некорректное значение для CSS переменной --input-button-transition-time');
    } else {
      let delay; 
      if (time >= 60) {
        delay = time; 
      } else {
        delay = time * 300;
      }
      if (slider) {
        setTimeout(() => {
          slider.classList.add('input_button__range-input_active');
        }, delay); 
    }
  }});
});
inputButtons.forEach(button => {
  button.addEventListener('click', () => {

    button.classList.add('input_button_active');
  });
});

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function interpolateColor(color1, color2, factor) {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);
  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(sliders);
sliders.forEach(slider => {
  slider.addEventListener('input', () => {
    const value = slider.value;

    // Slider output
    // let output = document.getElementById('Count');
    // output.textContent = value;

    const factor = (value - slider.min) / (slider.max - slider.min);
    const rootStyles = getComputedStyle(document.documentElement);
    const gradientColor1 = rootStyles.getPropertyValue('--input-button-gradient-color-1').trim();
    const gradientColor2 = rootStyles.getPropertyValue('--input-button-gradient-color-2').trim();

    const thumbColor = interpolateColor(gradientColor1, gradientColor2, factor);
    slider.style.setProperty('--thumb-color', thumbColor);
  });
});