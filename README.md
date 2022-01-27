# Desafio Up | MRV

Neste desafio, foi desenvolvido uma tela de teste parecida com a tela "Trabalhe conosco" atual da MRV, com estrutura diferenciada.
Abaixo está o setup usado para esse desafio:

## Stack utilizada

**Front-end:** HTML, CSS, SASS, Javascript, Jquery, Bootstrap 4, Slick Slider, NPM, Gulp

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/victorscdev/desafio.up.mrv.git
```

Entre no diretório do projeto

```bash
  cd desafio.up.mrv
```

Instale as dependências

```bash
  npm install
```

Inicie o task runner(Gulp)

```bash
  gulp
```

Inicie o servidor

```bash
  npm start
```

## Documentação da API

#### Retorna todos Distritos

```http
  GET https://servicodados.ibge.gov.br/api/v1/localidades/distritos
```

| Parâmetro | Tipo     | Descrição                                                                                                                                                                                                                                                      |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orderBy` | `string` | Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem.Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro **orderBy** com o valor **nome**                                                                     |
| `view`    | `string` | Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível |
