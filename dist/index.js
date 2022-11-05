"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _quickback = _interopRequireDefault(require("./quickback"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Quickback from 'quickback';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//       <h1>Hello</h1>
//       <Quickback url="https://quickback-api-stg.onrender.com/f/tw4rqh6xrzzt" />
//     </div>
// );
var _default = _quickback.default;
exports.default = _default;