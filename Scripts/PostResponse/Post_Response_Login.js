// Varíavel recebe o status code do response.
const statusCode = pm.response.code;

// Validar se o JSON é válido.
let resposnseJson;
try {
    resposnseJson = pm.response.json();    
} catch (e) {
// status code 404
    pm.test(`N - O response não é um JSON válido.`, () => {});
}

// Verificar status code e validar a resposta esperada.
switch (statusCode) {
    case 200:
        pm.test(`Validar Status code 200 - OK: Usuário logou com sucesso.`, () => {
            pm.response.to.have.status(200);
            pm.expect(resposnseJson).to.have.property("token");
            pm.expect(resposnseJson.token).to.be.a("string");
            pm.expect(resposnseJson.token).to.eqls("QpwL5tke4Pnpja7X4");
        });
        break;
// Status code 400
    case 400:
        if (resposnseJson.error === "Missing password") {
            pm.test(`N - Validar Status code 400 - Bad Request: Erro esperado quando não informar a senha do usuário.`, () => {
                pm.response.to.have.status(400);
                pm.expect(resposnseJson).to.have.property("error");
                pm.expect(resposnseJson.error).to.eql("Missing password");
            });
        }
        else{
            pm.test(`N - Validar Status code 400 - Bad Request: Erro esperado quando não informar o email ou nome de usuario.`, () => {
                pm.response.to.have.status(400);
                pm.expect(resposnseJson).to.have.property("error");
                pm.expect(resposnseJson.error).to.eql("Missing email or username");
            });
        }
        break;
// status code 404
    case 404:
        pm.test(`N - Validar Status code 404 - Not Found: Endpoint incorreto.`, () => {
            pm.response.to.have.status(404);
        });
        break;

    default:
        pm.test(`Status inesperado retornado.`, () => {
            console.log(`Status inesperado`, statusCode);
        });
}
pm.expect([200, 400, 404]).to.include(statusCode);