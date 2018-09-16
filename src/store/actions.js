import { ADD_TOAST_MESSAGE } from 'vuex-toast';
import Imgur from '../utils/imgurApi.class';
import { cowIdToBytes32 } from '../utils/helpers';

/**
 * Get number of votes from contract
 * @param commit
 * @param getters
 * @param dispatch
 * @returns {Promise<void>}
 */
const getTotalVotes = async({ commit, getters, dispatch }) => {
    try {
        const totalVotes = await getters.contract.methods.getTotalVotes().call();
        commit('setTotalVotes', totalVotes);
    } catch (e) {
        dispatch(ADD_TOAST_MESSAGE, {
            text: 'Could not get votes',
            type: 'error',
        });
    }
};

/**
 * Vote on the contract
 * @param commit
 * @param getters
 * @param state
 * @param dispatch
 * @param data
 * @returns {Promise<void>}
 */
const vote = async({
    commit, getters, state, dispatch,
}, data) => {
    try {
        const alreadyVoted = await getters.contract.methods.checkAddress().call({ from: state.address });
        const errorReason = (
            state.votingInProgress ? 'Voting still in progress' :
                !state.address ? 'No Address found' :
                    alreadyVoted ? 'Already voted' :
                        null
        );

        if(errorReason) {
            throw Error(errorReason);
        }

        commit('setVotingInProgress', true);
        dispatch(ADD_TOAST_MESSAGE, {
            text: 'Please check your wallet',
            type: 'info',
        });

        await getters.contract.methods.vote(cowIdToBytes32(state.web3, data.cowId)).send({
            from: state.address,
        });

        commit('setVotingInProgress', false);
        dispatch('getVotesForCows');
        dispatch(ADD_TOAST_MESSAGE, {
            text: 'Voting successful',
            type: 'success',
        });
    } catch (e) {
        const denied = e.message.includes('User denied transaction');

        commit('setVotingInProgress', false);
        dispatch(ADD_TOAST_MESSAGE, {
            text: denied ? 'Transaction stopped' : e.message,
            type: denied ? 'info' : 'danger',
        });
    }
};

/**
 * Get account address
 * @param state
 * @param commit
 * @returns {Promise<void>}
 */
const getAddress = async({ state, commit }) => {
    const errorMessage = 'Could not get Address';
    let account;

    try {
        account = await state.web3.eth.getAccounts();
        commit('setAddress', account[0]);
    } catch (e) {
        commit('setAddress', errorMessage);
    }

    setInterval(async() => {
        try {
            account = await state.web3.eth.getAccounts();
            if(account[0] !== state.address) {
                commit('setAddress', account[0]);
            }
        } catch (e) {
            commit('setAddress', errorMessage);
        }
    }, 500);
};

/**
 * Load cow images in state
 * @param state
 * @param commit
 * @param dispatch
 * @returns {Promise<void>}
 */
const getCowImages = async({ state, commit, dispatch }) => {
    if(state.cowImages.length === 0) {
        try {
            const imgur = new Imgur();
            const response = await imgur.getImages();
            if(response.data.images.length > 0) {
                const images = response.data.images.map(image => Object.assign(image, { votes: 0 }));
                commit('setCowImages', images);
                dispatch('getVotesForCows');
            }
        } catch (e) {
            dispatch(ADD_TOAST_MESSAGE, {
                text: 'Could not load images',
                type: 'error',
            });
        }
    }
};

/**
 * Get votes for each cow
 * @param getters
 * @param state
 * @param commit
 * @param dispatch
 * @returns {Promise<void>}
 */
const getVotesForCows = async({
    getters, state, commit, dispatch,
}) => {
    try {
        state.cowImages.forEach(async(image, index) => {
            const votes = await getters.contract.methods.getVotes(cowIdToBytes32(state.web3, image.id)).call();
            const cowData = { index, votes };
            commit('setCowVotes', cowData);
        });
    } catch (e) {
        dispatch(ADD_TOAST_MESSAGE, {
            text: 'Could not get votes for cows',
            type: 'error',
        });
    }
};

export default {
    getTotalVotes,
    vote,
    getAddress,
    getCowImages,
    getVotesForCows,
};
