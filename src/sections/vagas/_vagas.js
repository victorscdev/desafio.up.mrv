async function distritos_get() {
	await axios
		.get(
			'https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome',
		)
		.then(function (response) {
			response.data.map((select, index) => {
				let select_distrito = document.getElementById(
					'qual_cidade_quer_trabalhar',
				);
				let option = document.createElement('option');
				option.id = index + 1;
				option.value = select.nome;
				option.text = select.nome;

				select_distrito.add(option);
			});
		});
}
function disabled_btn_buscar() {
	let select_distrito = document.getElementById('qual_cidade_quer_trabalhar');
	let select_atuacao = document.getElementById('qual_sua_area_de_atuacao');
	let input_tipo_vaga = document.getElementById(
		'e_qual_tipo_de_vaga_voce_procura',
	);

	if (
		select_distrito.value == 'Selecionar um tipo' ||
		select_atuacao.value == 'Selecionar área' ||
		input_tipo_vaga.value == ''
	) {
		document.getElementById('btn_buscar').setAttribute('disabled', 'disabled');
	} else {
		document
			.getElementById('btn_buscar')
			.removeAttribute('disabled', 'disabled');
	}
}
setTimeout(() => {
	distritos_get();
	disabled_btn_buscar();
}, 1000);
