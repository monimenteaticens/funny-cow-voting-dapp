import Web3 from 'web3';

const getWeb3 = () => {
    if(typeof window.web3 === 'undefined') {
        return new Web3();
    }

    return new Web3(window.web3.currentProvider);
};

export default getWeb3();
