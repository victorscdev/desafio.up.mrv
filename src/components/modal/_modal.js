function set_modal() {
	let modal_header = document.querySelector(
		'.modal .modal-dialog .modal-content .modal-header',
	);
	let modal_body = document.querySelector(
		'.modal .modal-dialog .modal-content .modal-body',
	);
	if (
		event.srcElement.id == 'btn_mrv_insticional' ||
		event.srcElement.id == 'btn_mrv_insticional_img'
	) {
		modal_header.innerHTML = `<img src="/public/assets/img/logo-mrv.png" alt="Logotipo" class="img-fluid"/>`;
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
		modal_header.innerHTML = `<img src="/public/assets/img/logo-mrv.png" alt="Logotipo" class="img-fluid"/>`;
		modal_body.innerHTML = `
		<div class="body-content">
			<h3>MRV:</h3>
			<p>A Maior Construtora da América Latina é a principal frente de atuação do MRV&CO. Com o propósito de construir sonhos que transformam o mundo, a MRV abre as portas para que milhares de brasileiros possam conquistar um novo lar, com mais benefícios e facilidades.</p>
		</div>

		`;
	}
}
