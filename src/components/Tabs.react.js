const { map } = require('lodash');
const React = require('react');
const classnames = require('classnames');

const Batman = require('./tabs/Batman.react');
const Superman = require('./tabs/Superman.react');
const Ming = require('./tabs/Ming.react');

const superheroTabs = [
    {
        label: 'Batman',
        component: Batman
    },
    {
        label: 'Superman',
        component: Superman
    },
    {
        label: 'Ming',
        component: Ming
    }
]

module.exports = React.createClass({
    displayName: 'Tabs',

    getInitialState() {
        return ({
            activeTabIndex: 0
        });
    },

    render() {
        const { activeTabIndex } = this.state;
        let tabContent;

        const tabs = map(superheroTabs, (tab, index) => {
            const active = index === activeTabIndex;
            if (active) {
                tabContent = (<tab.component />);
            }
            return (
                <li key={index} className={classnames({ active: active })}>
                    <a href="#" onClick={(evnt) => this.setState({ activeTabIndex: index })}>
                        {tab.label}
                    </a>
                </li>
            );
        });

        return (
            <div className="container">
                <h2>Simple tab demo</h2>
                <ul className="nav nav-tabs">{tabs}</ul>

                <div className="row top10">
                    <div className="col-md-12">
                        <div className="well">{tabContent}</div>
                    </div>
                </div>
            </div>
        );
    }
});
