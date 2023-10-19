<meta charset="utf-8">
<script>

function pulalinha() {
	document.write("<br><br>");
	}
	
function mostra(frase) {
	document.write(frase);
	pulalinha()
	}
	
	var vitorias = parseInt(prompt("entre com o n de vitorias"));
	var empates = parseInt(prompt("entre com o n de empates"));
	var derrotas = parseInt(prompt("entre com o n de derrotas"));
	
	var pontos = (vitorias * 3) + empates + derrotas;
	
	mostra("os pontos do Fluzão são " + pontos);
	
	if (pontos > 40) {
	mostra("seu time tá melhor que ano passado");
	}
	
	if (pontos < 40) {
	mostra("seu time tá pior que ano passado");
	}
	
	if (pontos == 40) {
	mostra("seu time tá igual o ano passado");
	}
	
	
</script>
