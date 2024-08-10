/**
 * Calcula o IMC (Índice de Massa Corporal) e exibe o resultado.
 */
function calcularIMC() {
    // Obtém os valores de peso e altura dos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    // Verifica se os valores inseridos são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);
    let categoria;

    // Determina a categoria do IMC
    if (imc < 18.5) {
        categoria = "Magreza";
    } else if (imc < 24.9) {
        categoria = "Normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    // Exibe o resultado do IMC e a categoria
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} kg/m²<br>Classificação: ${categoria}`;
}

