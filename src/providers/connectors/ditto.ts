import { IAbstractConnectorOptions, getChainId } from "../../helpers";

export interface IDittoConnectorOptions extends IAbstractConnectorOptions {
  appId: string;
  network: string;
	baseUrl?: string;
	infuraId?: string;
  alchemyId?: string;
}

const ConnectToDitto = async (Ditto: any, opts: IDittoConnectorOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      const chainId = getChainId(opts.network)

      const provider = new Ditto.EthereumProvider({
				appId: opts.appId,
				chainId,
				baseUrl: opts.baseUrl,
				infuraId: opts.infuraId,
				alchemyId: opts.alchemyId
      });

			return resolve(provider);
    } catch (err) {
      reject(err);
    }
  });
};

export default ConnectToDitto;
