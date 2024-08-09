document.getElementById("startAnimation").addEventListener("click", function() {
    const canvas = document.getElementById("pitagorasCanvas");
    const ctx = canvas.getContext("2d");

    // Configuración inicial del canvas
    canvas.width = 400;
    canvas.height = 400;

    const catetoA = 3;
    const catetoB = 4;
    const hipotenusa = 5;

    const unit = 50;  // Escala para la animación

    // Función para dibujar el cuadrado de un cateto
    function drawSquare(x, y, size, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size * unit, size * unit);
    }

    // Función para iniciar la animación
    function startAnimation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibuja los cuadrados de los catetos
        drawSquare(50, 50, catetoA, "red");
        drawSquare(50, 50 + catetoA * unit, catetoB, "blue");

        // Animación de los cuadrados moviéndose hacia la hipotenusa
        let step = 0;
        const interval = setInterval(() => {
            ctx.clearRect(150, 50, 200, 300);
            drawSquare(150 + step, 50 + step, catetoA, "red");
            drawSquare(150 + step, 50 + step + catetoA * unit, catetoB, "blue");

            if (step >= hipotenusa * unit - catetoA * unit) {
                clearInterval(interval);

                // Dibuja el cuadrado de la hipotenusa
                drawSquare(150 + step, 50 + step, hipotenusa, "green");
            }

            step += 2;
        }, 30);
    }

    // Inicia la animación
    startAnimation();
});
