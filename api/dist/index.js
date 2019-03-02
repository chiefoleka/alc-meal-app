"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mealsRoute = _interopRequireDefault(require("./routes/mealsRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var app = (0, _express.default)();
app.use('/api/v1/meals', _mealsRoute.default);
var PORT = process.env.PORT || 8080;
app.listen(PORT);