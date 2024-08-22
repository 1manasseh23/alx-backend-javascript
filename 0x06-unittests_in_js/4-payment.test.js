const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use the stubbed calculateNumber method of Utils and log the correct message', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1);

    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

