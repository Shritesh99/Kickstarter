import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const  instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb7131b2B17Ce518D799AcAC4DCc1e016B424642A'
);
export default instance;