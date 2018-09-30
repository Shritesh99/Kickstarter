import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';
const  instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8c2F855e9eB04aeB55ab5f90c9cCfE27020FD414'
);
export default instance;