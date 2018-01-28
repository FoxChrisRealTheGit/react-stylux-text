'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var P4 = function (_Component) {
    _inherits(P4, _Component);

    function P4(props) {
        _classCallCheck(this, P4);

        var _this = _possibleConstructorReturn(this, (P4.__proto__ || Object.getPrototypeOf(P4)).call(this, props));

        _this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.6em',
            lineHeight: props.lineHeight || '1.8em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            textShadow: props.shadow,
            border: props.border,
            bLEft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        return _this;
    }

    _createClass(P4, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            return this.setState({ childs: CHILDS });
        }
    }, {
        key: 'render',
        value: function render() {
            var PARAGRAPH = _nestingstyles2.default.create({
                paragraph: {
                    width: this.state.width,
                    height: this.state.height,
                    color: this.state.color,
                    textShadow: this.state.textShadow,
                    borderLeft: this.state.bLeft,
                    borderRight: this.state.bRight,
                    borderTop: this.state.bTop,
                    borderBottom: this.state.bBottom,
                    border: this.state.border,
                    fontFamily: this.state.fontFamily,
                    fontSize: this.state.fontSize,
                    lineHeight: this.state.lineHeight,
                    fontWeight: this.state.fontWeight,
                    display: this.state.display,
                    flexDirection: 'column',
                    alignItems: this.state.align,
                    textAlign: this.state.textAlign,
                    padding: this.state.padding,
                    margin: this.state.margin,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration
                },
                '@media screen and (max-width: 440px)': {
                    paragraph: {
                        display: this.state.smDis,
                        color: this.state.color,
                        fontSize: '1.1em'
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                    paragraph: {
                        display: this.state.mdDis,
                        color: this.state.color,
                        fontSize: '0.9em'
                    }
                }
            });
            return _react2.default.createElement(
                'p',
                { style: PARAGRAPH.paragraph, id: this.state.id, className: this.state.className },
                this.state.childs[0]
            );
        }
    }]);

    return P4;
}(_react.Component);

exports.default = P4;