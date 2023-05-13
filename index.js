// MODULES
import axios from 'axios';

// CONFIG
import config from './lib/config.js';

// SERVICES
import services from './lib/services.js';

// UTILS
import utils from './lib/utils.js';

class Safubase {
  constructor({ chainId = 56 }) {
    this.config = {
      ERC20_ABI: config.ERC20_ABI,
      chainId: chainId,
    };

    this.utils = {
      displayFloat: utils.displayFloat,
      connectWallet: utils.connectWallet,
      addDots: utils.addDots,
    };
  }
}

// Service binds

export default Safubase;
