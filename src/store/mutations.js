const setTotalVotes = (state, data) => {
    Object.assign(state, { totalVotes: data });
};

const setAddress = (state, data) => {
    Object.assign(state, { address: data });
};

const setVotingInProgress = (state, bool) => {
    Object.assign(state, { votingInProgress: bool });
};

const setCowImages = (state, images) => {
    state.cowImages.push(...images);
};

const setCowVotes = (state, data) => {
    Object.assign(state.cowImages[data.index], { votes: data.votes ? parseInt(data.votes, 10) : 0 });
};

export default {
    setTotalVotes,
    setAddress,
    setVotingInProgress,
    setCowImages,
    setCowVotes,
};
