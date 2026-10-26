import test from 'node:test';
import assert from 'node:assert/strict';
import { validateQuote, createQuoteSummary } from '../src/lib/quote.mjs';
test('requires name, company, valid email and solution', () => {
  assert.deepEqual(
    Object.keys(validateQuote({ name: ' ', company: '', email: 'bad', solution: '' })),
    ['name', 'company', 'email', 'solution'],
  );
});
test('accepts valid quote without a phone number', () => {
  assert.deepEqual(
    validateQuote({
      name: 'Ana',
      company: 'Empresa',
      email: 'ana@example.com',
      solution: 'Telefonía empresarial',
    }),
    {},
  );
});
test('summary is plain text and does not claim a request was sent', () => {
  const s = createQuoteSummary({
    name: ' Ana ',
    company: 'Empresa',
    email: 'ana@example.com',
    solution: 'Telefonía empresarial',
    message: 'Necesito 10 anexos',
  });
  assert.ok(s.includes('10 anexos'));
  assert.ok(s.includes('Nombre: Ana'));
  assert.ok(!s.includes('enviado'));
});
