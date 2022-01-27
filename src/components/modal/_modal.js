function set_modal() {
	let modal_body = document.querySelector(
		'.modal .modal-dialog .modal-content .modal-body',
	);
	if (
		event.srcElement.id == 'btn_mrv_insticional' ||
		event.srcElement.id == 'btn_mrv_insticional_img'
	) {
		modal_body.innerHTML = `
		<div class="body-content">
			<h3> Instituto MRV:</h3>
			<p>O Instituto MRV, braço social da companhia, abraça, desde 2014, a causa da educação e já ajudou a mudar a vida de mais de 325 mil pessoas. São 1.900 voluntários compartilhando essa missão e 15.5 milhões investidos em novas oportunidades .</p>
		</div>


		`;
	}
	if (
		event.srcElement.id == 'btn_mrv' ||
		event.srcElement.id == 'btn_mrv_img'
	) {
		modal_body.innerHTML = `
		<div class="body-content">
			<h3>MRV:</h3>
			<p>A Maior Construtora da América Latina é a principal frente de atuação do MRV&CO. Com o propósito de construir sonhos que transformam o mundo, a MRV abre as portas para que milhares de brasileiros possam conquistar um novo lar, com mais benefícios e facilidades.</p>
		</div>
		`;
	}
	if (event.srcElement.id == 'btn_buscar') {
		let select_distrito = document.getElementById('qual_cidade_quer_trabalhar');
		let select_atuacao = document.getElementById('qual_sua_area_de_atuacao');
		let input_tipo_vaga = document.getElementById(
			'e_qual_tipo_de_vaga_voce_procura',
		);

		modal_body.innerHTML = `
		<div class="body-content">
			<h3>Resultados da busca:</h3>
			<p>A vaga na cidade <strong>${select_distrito.value}</strong>, na área de atuação <strong>${select_atuacao.value}</strong> e, com o tipo de vaga <strong>${input_tipo_vaga.value}</strong> não esta disponivel no momento!</p>
		</div>
		`;
	}
}
