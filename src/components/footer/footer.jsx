 
import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    },
];

const Footer = ({ amount, amountCompleted, activeFilter, filtrationTask }) => (
    <div className="footer">
        <span className="amound">{`${amount}/${amountCompleted} All/active`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({ text, id }) => (
                <button
                    onClick={() => {filtrationTask(id)}} 
                    key={id}
                    className={id === activeFilter ? "filter-btn active": "filter-btn"}>
                    {text}
                </button>
            ))}
        </div>
    </div>  
);

Footer.propTypes = {
    amount: PropTypes.number,
    amountCompleted: PropTypes.number,
    activeFilter: PropTypes.string,
    filtrationTask: PropTypes.func,
}

Footer.defaultProps = {
    amount: 0,
    amountCompleted: 0,
    activeFilter: 'all',
    filtrationTask: () => {},
}

export default Footer;