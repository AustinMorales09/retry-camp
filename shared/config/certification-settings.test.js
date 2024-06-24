"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const certification_settings_1 = require("./certification-settings");
describe('linkedInCredentialIds', () => {
    it('should contain a value for all certifications', () => {
        const allCertifications = Object.values(certification_settings_1.Certification).sort();
        const linkedInCredentialIdsKeys = Object.keys(certification_settings_1.linkedInCredentialIds).sort();
        expect(linkedInCredentialIdsKeys).toEqual(allCertifications);
    });
});
