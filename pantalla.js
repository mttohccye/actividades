// variable to store our intervalID
	window.onload = function(){
		let currentIntervalIndex = 0;
		let intervalId;
		const oElement = document.getElementById("frame1");
		//const zElement = document.getElementsByTagName("frameset");
		var contador;
		contador = 0;

		const intervals = [
  			{ func: () => imagen1(), time: 5000 },
  			{ func: () => imagen2(), time: 5000 },
  			{ func: () => imagen3(), time: 15000 },
  			{ func: () => imagen4(), time: 15000 },
  			{ func: () => imagen5(), time: 10000 }
		];

		function ejecutarSiguienteIntervalo() {
  			const current = intervals[currentIntervalIndex];
 		 	current.func();
  			currentIntervalIndex = (currentIntervalIndex + 1) % intervals.length; // Bucle
  			intervalId = setTimeout(ejecutarSiguienteIntervalo, current.time);
  			if (contador == 10) {
  				location.reload();
  			}
  			contador = contador + 1;
		}

		function imagen1(){
			oElement.src = "mtto1e31d_archivos/sheet002.htm";
			oElement.style.transform = `scale(${0.998})`;
		}

		function imagen2(){
			oElement.src = "mtto1eayer_archivos/sheet002.htm";
			oElement.style.transform = `scale(${0.998})`;
		}

		function imagen3(){
			oElement.src = "mtto1e31d_archivos/sheet001.htm";
			oElement.style.transform = `scale(${1.14})`;
		}

		function imagen4(){
			oElement.src = "mtto1eayer_archivos/sheet001.htm";
			oElement.style.transform = `scale(${1.14})`;
		}

		function imagen5(){
			oElement.src = "Horarios.htm";
			oElement.style.transform = `scale(${1.7})`;
		}

		// Iniciar la ejecución
		ejecutarSiguienteIntervalo();

		// Para detenerlo:
		// clearTimeout(intervalId);
	}