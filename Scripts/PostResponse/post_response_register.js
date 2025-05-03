// Variável que irá receber o status code do response.
const statusCode = pm.response.code;

// Validar se o JSON é válido.
let resposnseJson
try {
    resposnseJson = pm.response.json();
}
catch (e) {
    pm.test(`N - O response não é um JSON válido.`, () => {});
}

switch (statusCode) {
    case 200:

        break;
}