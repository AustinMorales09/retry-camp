"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
describe('constants', () => {
    describe('blocklistedUsernames', () => {
        it('should not contain duplicate values', () => {
            const uniqueValues = new Set(constants_1.blocklistedUsernames);
            expect(constants_1.blocklistedUsernames.length).toEqual(uniqueValues.size);
        });
        it('should contain all the letters in the latin alphabet', () => {
            const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
            expect(constants_1.blocklistedUsernames).toEqual(expect.arrayContaining(alphabet));
        });
    });
});
