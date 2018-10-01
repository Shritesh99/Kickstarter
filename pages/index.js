import React, { Component } from 'react';
import { Card, Button }  from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns =  await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
        return { campaigns };
    }
    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true,
                color: 'red'
            };
        });
        return <Card.Group items={items}/>;
    }
    render(){
        return (
            <Layout>
            <div>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            <h3>Open Campaigns</h3>
            <Button floated="right" content='Create Campaign' icon="add" primary />
            {this.renderCampaigns()}
            </div>
            </Layout>
        );
    }
}

export default CampaignIndex;