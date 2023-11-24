const {
  expect,
} = require('chai');
const request = require('request');

describe('IndexPage', () => {
  it('checking for the correct status code', () => {
    request('http://localhost:7865', (_error, response, _body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('checking for the correct result', () => {
    request('http://localhost:7865', (_err, _res, body) => {
      expect(body).to.contain('Welcome to the payment system');
    });
  });

  it('checking for correct content type', () => {
    request('http://localhost:7865', (_err, res, _body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('checking for correct content length', () => {
    request('http://localhost:7865', (_err, res, _body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });

});

describe('CartPage', () => {
  it('checking correct status code with number id parameter', () => {
    request('http://localhost:7865/cart/12', (_error, response, _body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('checking correct result with number id parameter', () => {
    request('http://localhost:7865/cart/12', (_err, _res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
    });
  });

  it('checking correct status with non number id parameter', () => {
    request('http://localhost:7865/cart/1bc', (_error, response, _body) => {
      expect(response.statusCode).to.equal(404);
    });
  });

  it('checking body content with non number id parameter', () => {
    request('http://localhost:7865/cart/1bc', (_error, _response, body) => {
      expect(body).to.contain('Cannot GET /cart/1bc');
    });
  });
  it('checking correct content type', () => {
    request('http://localhost:7865/cart/12', (_err, res, _body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });
  it('checking correct content length', () => {
    request('http://localhost:7865/cart/12', (_err, res, _body) => {
      expect(res.headers['content-length']).to.equal('27');
    });
  });

});
