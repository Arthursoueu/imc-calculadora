function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const imcText = document.getElementById('imcText');
    const imcImage = document.getElementById('imcImage');

    if (isNaN(weight) || isNaN(height)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = weight / (height * height);
    let message = '';
    let imageSrc = '';

    if (imc < 18.5) {
        message = 'Abaixo do peso';
        imageSrc = './img/magro.png';
    } else if (imc >= 18.5 && imc < 24.9) {
        message = 'Peso normal';
        imageSrc = 'img/Normal.png';  // 
    } else if (imc >= 25 && imc < 29.9) {
        message = 'Sobrepeso';
        imageSrc = 'img/Acima-peso.png';
    } else if (imc >= 30 && imc < 34.9) {
        message = 'Obesidade grau 1';
        imageSrc = 'img/ob-1.png';
    } else if (imc >= 35 && imc < 39.9) {
        message = 'Obesidade grau 2';
        imageSrc = 'img/ob-2.png';
    } else {
        message = 'Obesidade grau 3';
        imageSrc = 'img/ob-3.png';
    }

    imcText.innerText = `Seu IMC é ${imc.toFixed(2)}: ${message}`;
    imcImage.src = imageSrc;
    imcImage.style.display = 'block';
}