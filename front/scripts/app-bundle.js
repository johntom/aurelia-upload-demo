define('app',['exports', 'aurelia-framework', 'aurelia-http-client'], function (exports, _aureliaFramework, _aureliaHttpClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient), _dec(_class = function () {
        function App(http) {
            _classCallCheck(this, App);

            http.configure(function (config) {
                config.withBaseUrl('http://localhost:3000/');
            });
            this.http = http;
        }

        App.prototype.submit = function submit(images) {
            var formData = new FormData();

            for (var i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }

            this.http.fetch('attachments', {
                method: 'POST',
                body: formData
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                return console.log(data.message);
            }).catch(function (error) {
                return console.log(error);
            });
        };

        App.prototype.submitWithHttp = function submitWithHttp(images) {
            var formData = new FormData();

            for (var i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }

            this.http.post('attachments', formData).then(function (data) {
                return console.log(data);
            }).catch(function (error) {
                return console.log(error);
            });
        };

        return App;
    }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <form submit.delegate=\"submitWithHttp(images)\">\n        <input type=\"file\"\n            name=\"images\"\n            files.bind=\"images\"\n            multiple>\n\n        <button type=\"submit\">Send</button>\n    </form>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map