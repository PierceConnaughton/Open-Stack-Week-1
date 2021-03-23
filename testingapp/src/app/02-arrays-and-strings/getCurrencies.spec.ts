import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
    it('should return USD, GDP and Eur', () => {
        expect(getCurrencies()).toEqual(['USD', 'GDP', 'EUR']);
    });
});