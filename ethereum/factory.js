import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const  instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2962a3c281A6C3358d64129C2533F6db9b47Df69'
);
export default instance;