import appConfig from '../config/app.config';

const contract = (state) => {
    if(state.web3 === null) {
        return false;
    }
    return new state.web3.eth.Contract(appConfig.contract.abi, appConfig.contract.address);
};

export default {
    contract,
};
