import React from 'react';
import { Wrapper } from './Containers';
import Style from '../Classes/Style';

export default class Grid extends React.Component {
    render() {

        const MaxWidth = 12;
        const ColCount = this.props.cols ? this.props.cols : 1;
        const ColWidth = Math.floor(MaxWidth / ColCount);

        let RowCount = 0;
        let Rows = [];

        this.props.children.length && this.props.children.length > 0 ? this.props.children.forEach((Item, Index) => {

            let Col = <Wrapper id={"c_" + Index} class={"col-xs-12 col-lg-" + ColWidth + " px-3 my-3"}>{Item}</Wrapper>

            if (Index % ColCount === 0) {
                RowCount++;
                Rows[RowCount] = [];
            }

            Rows[RowCount].push(Col);
        }) : this.props.children ? Rows[0] = [<Wrapper id={"c_0"} class={"col-xs-12 col-lg-" + ColWidth + " px-3 my-3"}>{this.props.children}</Wrapper>] : Rows[0] = [];

        // Combine default styles with user-defined styles
        const Styles = new Style(`
        `, this.props.style);

        // Combine default classes with user-defined classes
        const Classes = `
            py-10
            ${this.props.class ? this.props.class.toString() : ""}
        `;

        return (
            <>
                <Wrapper class={Classes} style={Styles}>
                    {Rows.map((Row, Index) => {
                        return (
                            <Wrapper class="row justify-center" key={Index}>
                                {Row.map((Col, Index) => {
                                    return Col;
                                })}
                            </Wrapper>
                        );
                    })}
                </Wrapper>
            </>
        );
    }
}