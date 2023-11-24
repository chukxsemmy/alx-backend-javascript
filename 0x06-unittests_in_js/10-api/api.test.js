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

describe('LoginPage', () => {
  it('checking correct status code', () => {
    const formData = {
      userName: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: formData,
      json: true,
    }, (_error, res, _body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('checking correct result with form data value', () => {
    const formData = {
      userName: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: formData,
      json: true,
    }, (_err, _res, body) => {
      expect(body).to.contain('Welcome Betty');
    });
  });

  it('checking correct status with invalid get value', () => {
    const formData = {
      username: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: formData,
      json: true,
    }, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

  it('checking correct content type', () => {
    const formData = {
      userName: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: formData,
      json: true,
    }, (_err, res, _body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('checking correct content length', () => {
    const formData = {
      userName: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: formData,
      json: true,
    }, (_err, res, _body) => {
      expect(res.headers['content-length']).to.equal('13');
    });
  });
});

describe('AvailablePayments', () => {
  it('checking correct status code', () => {
    request('http://localhost:7865/available_payments', (_error, res, _body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('checking correct result with form data value', () => {
    request('http://localhost:7865/available_payments', (_error, _res, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
    });
  });

  it('checking correct content type', () => {
    request('http://localhost:7865/available_payments', (_error, res, _body) => {
      expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
    });
  });

  it('checking correct content length', () => {
    request('http://localhost:7865/available_payments', (_error, res, _body) => {
      expect(res.headers['content-length']).to.equal('56');
    });
  });
});
