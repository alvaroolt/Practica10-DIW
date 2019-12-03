function cargaContextoCanvas(idcanvas) {
    //Recibimos el elemento canvas
    let canvas = document.getElementById(idcanvas);
    if (canvas && canvas.getContext) {
        //Accede al contexto en 2d de este canvas, necesario para dibujar
        let contexto = canvas.getContext('2d');
        if (contexto) {
            return contexto;
        }
        return false;
    }
}

window.onload = function () {
    let contexto = cargaContextoCanvas("micanvas");
    if (contexto) {

        x = 0;
        y = 50;
        contexto.beginPath();
        contexto.moveTo(50 + x, 50 + y);
        contexto.lineTo(120 + x, 150 + y);
        contexto.lineTo(0 + x, 180 + y);
        contexto.lineTo(120 + x, 210 + y);
        contexto.lineTo(50 + x, 310 + y);
        contexto.lineTo(160 + x, 250 + y);
        contexto.lineTo(190 + x, 370 + y);
        contexto.lineTo(220 + x, 250 + y);
        contexto.lineTo(330 + x, 310 + y);
        contexto.lineTo(260 + x, 210 + y);
        contexto.lineTo(380 + x, 180 + y);
        contexto.lineTo(260 + x, 150 + y);
        contexto.lineTo(330 + x, 50 + y);
        contexto.lineTo(220 + x, 110 + y);
        contexto.lineTo(190 + x, -10 + y);
        contexto.lineTo(160 + x, 110 + y);
        let lineGrad = contexto.createLinearGradient(-100 + x, 200 + y, 400 + x, 200 + y);
        lineGrad.addColorStop(0, '#fff');
        lineGrad.addColorStop(0.05, 'blue');
        lineGrad.addColorStop(0.6, 'green');
        lineGrad.addColorStop(1, 'red');
        contexto.fillStyle = lineGrad;
        contexto.fill();
        contexto.closePath();
    }
}