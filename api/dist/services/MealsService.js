"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Meals = _interopRequireDefault(require("../models/Meals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealsService =
/*#__PURE__*/
function () {
  function MealsService() {
    _classCallCheck(this, MealsService);
  }

  _createClass(MealsService, [{
    key: "fetchAllMeals",
    value: function fetchAllMeals() {
      // This is the data we will have in our database
      this.meals = [{
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      }, {
        id: 2,
        name: 'Fried Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      }, {
        id: 3,
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN'
      }]; // When we retrieve the data, it will be of type Means
      // Hence, this simulation here.

      return this.meals.map(function (data) {
        var meal = new _Meals.default();
        meal.id = data.id;
        meal.name = data.name;
        meal.size = data.size;
        meal.price = data.price;
        meal.currency = data.currency;
        return meal;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      // This will be a call to our ORM
      // And some manipulations to make the data presentable.
      return this.fetchAllMeals();
    }
  }, {
    key: "get",
    value: function get(id) {
      // -1 because we have our data in an array which starts at 0
      return this.fetchAllMeals()[id - 1];
    }
  }]);

  return MealsService;
}();

exports.default = MealsService;