import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Header from 'components/header';
import ContactAction from 'containers/contact-action';

const Contact = () => (
    <Layout>
        <Header title={`Contact`} secondaryTitle={`Let's get in touch`} />
        <ContactAction />
    </Layout>
);

Contact.propTypes = {
    data: PropTypes.object,
};

export default Contact;
