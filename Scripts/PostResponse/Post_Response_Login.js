// Varíavel recebe o status code do response.
const statusCode = pm.response.code;

// Validar se o JSON é válido.
let resposnseJson;
try {
    resposnseJson = pm.response.json();    
} catch (e) {
    pm.test(`N - O response não é um JSON válido.`, () => {});
}

// Verificar status code e validar a resposta esperada.
switch (statusCode) {
// Status code 200    
    case 200:
        pm.test(`P - Login Bem-Sucedido: Status Code 200 - OK.`, () => {
            pm.response.to.have.status(200);
            pm.expect(resposnseJson).to.have.property("token");
            pm.expect(resposnseJson.token).to.be.a("string");
            pm.expect(resposnseJson.token).to.eqls("QpwL5tke4Pnpja7X4");
        });
        break;
// Status code 400
    case 400:
        if (resposnseJson.error === "Missing password") {
            pm.test(`N - Falha ao Logar (Senha não informada): Status Code 400 - Bad Request`, () => {
                pm.response.to.have.status(400);
                pm.expect(resposnseJson).to.have.property("error");
                pm.expect(resposnseJson.error).to.eql("Missing password");
            });
        }
        else if (resposnseJson.error === "Missing email or username"){
            pm.test(`N - Falha ao Logar (e-mail ou nome de usuário não informado): Status Code 400 - Bad Request.`, () => {
                pm.response.to.have.status(400);
                pm.expect(resposnseJson).to.have.property("error");
                pm.expect(resposnseJson.error).to.eql("Missing email or username");
            });
        }
        else {
            pm.test(`N - Falha ao logar (e-mail ou nome de usuário vazio): Status Code 400 - Bad Request.`, () => {
                pm.response.to.have.status(400);
                pm.expect(resposnseJson).to.have.property("error");
                pm.expect(resposnseJson.error).to.eql("user not found");
            });
        }
        break;
// Status code 404
    case 404:
        pm.test(`N - Endpoint Inválido: Status Code 404 - Not Found.`, () => {
            pm.response.to.have.status(404);
        });
        break;
// Status inesperado retornado
    default:
        pm.test(`Status inesperado retornado.`, () => {
            console.log(`Status inesperado`, statusCode);
        });
}
pm.expect([200, 400, 404]).to.include(statusCode);