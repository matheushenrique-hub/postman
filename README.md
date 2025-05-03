# AUTOMAÇÃO POSTMAN - REQRES

Automação de testes da API REQRES, que simula cenários de aplicações reais, ideal para iniciar um pequeno projeto de autenticação.

## 🚀 Começando

* Estas instruções permitirão que você obtenha uma cópia funcional do projeto na sua máquina local para testes.
* Consulte **[REQRES](https://reqres.in/)** para ter acesso à documentação da API. Ou acesse o **[SWAGGER](https://reqres.in/api-docs/)**.
* Executaremos os testes automatizados utilizando o Collection Runner no Postman, com um arquivo JSON, para validar todos os cenários analisados.

### 📋 Pré-requisitos

* É necessário possuir o Postman instalado no computador e acesso à API de teste.
* Para possuir acesso à API que será utilizada neste teste, basta acessar o link acima.

## ⚙️ Executando os testes

* Nessa API, serão validados todos os endpoints com os cenários positivos e os cenários negativos.

### 🔩 Analise os testes de ponta a ponta

```
Endpoint: Registrar Login

P - Login Bem-Sucedido: Status Code 200;
N - Falha ao Logar (Senha não informada): Status Code 400 - Bad Request;
N - Falha ao Logar (e-mail ou nome de usuário não informado): Status Code 400 - Bad Request;
N - O response não é um JSON válido
N - Endpoint Inválido: Status Code 404 - Not Found.
```

```
Endpoint: Login

P - Login Bem-Sucedido: Status Code 200;
N - Falha ao Logar (Senha não informada): Status Code 400 - Bad Request;
N - Falha ao Logar (e-mail ou nome de usuário não informado): Status Code 400 - Bad Request;
N - Falha ao logar (e-mail ou nome de usuário vazio ou não definidos): Status Code 400 - Bad Request;
N - O response não é um JSON válido;
N - Endpoint Inválido: Status Code 404 - Not Found.
```

## ✒️ Autores

* **Análista de Qualidade de Software** - **18/04/2025** - Matheus H. L. Fernandes.