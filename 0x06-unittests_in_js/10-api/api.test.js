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
  });

  describe('GET /available_payments', () => {
    it('returns correct payment methods', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('returns welcome message with username', (done) => {
      const userName = 'Betty';
      request.post(
        {
          url: `${API_URL}/login`,
          json: { userName },
        },
        (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal(`Welcome ${userName}`);
          done();
        }
      );
    });
  });
});

