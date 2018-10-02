import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import factory from "../ethereum/factory";
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';


class ContributeForm extends Component{
    state = {
        value: '',
        errorMsg: '',
        loading: false
    };
    onSubmit =async event => {
        event.preventDefault();
        this.setState({ loading: true, errorMsg: '' });
        const campaign = Campaign(this.props.address);
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
               from: accounts[0],
               value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        }catch (e) {
           this.setState({ errorMsg: e.message });
        }
        this.setState({ loading: false, value: '' });
    };
    render() {
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                        label="ether"
                        labelPosition="right"
                        placeholder='Enter Amount...'
                    />
                </Form.Field>
                <Message error header="Opps!" content={this.state.errorMsg}/>
                <Button primary loading={this.state.loading}>Contribute!</Button>
            </Form>
        );
    }
}
export default ContributeForm;