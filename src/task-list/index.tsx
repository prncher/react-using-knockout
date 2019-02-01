import * as React from 'react';

/*
// test.tsx
import * as React from 'react';

let Something = React.createClass({
    render: function() {
        return (<div><heyo>foo</heyo></div>);
    }
})

// test.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        heyo: any
    }
}
tsc --jsx react --module "amd" --target es2017 test.tsx test.d.ts
*/

export interface MyProps {
    username: string;
}

export interface MyState {
    user: string;
}

export class TestComp extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Testing {this.props.username}
                <form action="">
                    <p>You have asked for <span data-bind="text: gifts().length">&nbsp;</span> gift(s)</p>
                    <table data-bind="visible: gifts().length > 0">
                        <thead>
                            <tr>
                                <th>Gift name</th>
                                <th>Price</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody data-bind="foreach: gifts">
                            <tr>
                                <td><input required={true} data-bind="value: name, uniqueName: true" /></td>
                                <td><input required={true} type="number" 
                                data-bind="value: price, uniqueName: true" /></td>
                                <td><a href="#" data-bind="click: $root.removeGift">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>

                    <button data-bind="click: addGift">Add Gift</button>
                    <button data-bind="enable: gifts().length > 0" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
