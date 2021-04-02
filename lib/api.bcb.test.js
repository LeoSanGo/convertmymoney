const api = require('./api.bcb');
const axios = require('axios');

jest.mock('axios');


test('getCotacaoAPI', () => {
    const res = {
        data: {
            value: [
                { cotacaoVenda: 3.90 }
            ]
        }
    };
    axios.get.mockResolvedValue(res);
    api.getCotacaoAPI('04-04-2019').then( resp => {
        expect(resp).toEqual(res);
    })
});