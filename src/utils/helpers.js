const cowIdToBytes32 = (web3, _cowId) => web3.utils.padRight(web3.utils.fromAscii(_cowId), 34);

export { cowIdToBytes32 };
