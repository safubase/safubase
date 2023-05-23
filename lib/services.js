'use strict';

// MODULES
import Web3 from 'web3';
import axios from 'axios';

//  CONFIG
import config from './config.js';

export async function getTokenInfo(
  address = '0xefb47f964454ed95e5604600ea68aeb738b3ba72',
  chain_id = '56'
) {
  const url =
    config.api_url +
    '/v1/blockchain/audits/' +
    address +
    '?chain_id=' +
    chain_id;

  try {
    const res = await axios.get(url);

    res.code = undefined;

    return res.data;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'Network error' };
    }

    if (!err.response) {
      return { code: err.code, message: err.name };
    }

    return { ...err.response.data, code: err.code };
  }
}

export default {
  getTokenInfo,
};
