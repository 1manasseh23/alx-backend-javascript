const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  // Set up the spy before each test
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Clean up the spy after each test
  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" and be called once when passed 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1);
  });

  it('should log "The total is: 20" and be called once when passed 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1);
  });
});

