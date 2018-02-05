import React, {Component} from 'react';
import '../../css/reset.css';
import '../../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class H45 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            stroke: props.stroke || '3px',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '3.489em',
            smFontSize: props.smSize || '2.5em',
            mdFontSize: props.mdSize || '3em',
            fontWeight: props.weight || '100',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
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
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            hoverColor: props.hovColor,
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = StyleSheet.create({
            heading: {
                width: this.state.width,
                height: this.state.height,
                textShadow: this.state.textShadow,
                borderLeft: this.state.bLeft,
                borderRight: this.state.bRight,
                borderTop: this.state.bTop,
                borderBottom: this.state.bBottom,
                border: this.state.border,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.align,
                textAlign: this.state.textAlign,
                padding: this.state.padding,
                margin: this.state.margin,
                overflowX: 'hidden',
                overflowY: 'hidden',
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
                WebkitTextFillColor: 'transparent',
                WebkitTextStrokeColor: this.state.color,
                WebkitTextStrokeWidth: this.state.stroke,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                heading: {
                    display: this.state.smDis,
                    color: this.state.color,
                    fontSize: this.state.smFontSize
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                heading: {
                    display: this.state.mdDis,
                    color: this.state.color,
                    fontSize: this.state.mdFontSize
                }
            },
        })
        return (
            <h4 style={HEADING.heading} id={this.state.id} className={this.state.className}
                onMouseEnter={() => this.setState({ color: HEADING.hoverStyle.color })}
                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{this.state.childs[0]}</h4>
        )
    }
}