import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Header from 'components/header';
import ContactAction from 'containers/contact-action';
import styled from 'styled-components';

const Hello = styled.div`
    margin: 18px;
    padding: 18px;
    border-radius: 6px;
    background: rgba(0,0,0,0.1);

    h1 {
        font-size: 54px;
        margin-bottom: 36px;
    }

    h2 {
        margin-bottom: 9px;
    }

    span {
        color: rgba(0,0,0,0.75);
    }

    a, span {
        margin-bottom: 36px;
        display: block;
    }
`;

const Contact = () => (
    <Layout>
        <Header title={`Contact`} secondaryTitle={`Let's get in touch`} />
        <Hello>
            <h1>Hey!</h1>
            <h2>You can contact us at this e-mail address</h2>
            <span>contact@louderminds.studio</span>
            <h2>Or click on this link to open your e-mail application</h2>
            <a href="mailto:contact@louderminds.studio">contact@louderminds.studio</a>
        </Hello>
        {/* <ContactAction /> */}
    </Layout>
);

Contact.propTypes = {
    data: PropTypes.object,
};

export default Contact;
