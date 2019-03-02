"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _MealsService = _interopRequireDefault(require("../services/MealsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealsService = new _MealsService.default();

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.status(200).send(mealsService.getAll());
});
router.get('/:id', function (req, res) {
  res.status(200).send(mealsService.get(req.params.id));
});
var _default = router;
exports.default = _default;