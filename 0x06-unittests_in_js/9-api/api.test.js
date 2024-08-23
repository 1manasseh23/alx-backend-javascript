const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('GET /cart/:id', () => {
    it('returns correct response for valid cart ID', (done) => {
      request.get(`${API_URL}/cart/12`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('returns 404 for invalid cart ID (non-numeric)', (done) => {
      request.get(`${API_URL}/cart/hello`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });

    it('returns 404 for missing cart ID', (done) => {
      request.get(`${API_URL}/cart/`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});

