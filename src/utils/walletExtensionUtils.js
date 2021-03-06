import Web3 from 'web3';
import window from 'global'
import chainId from '../contracts/chainId';
import erc20Abi from '../contracts/erc20.abi';
import idoDFYAbi from '../contracts/idoDFY.abi';
import {buyIdoContractState, extensionName} from './constants';
import { BigNumber } from 'bignumber.js';

export default class WalletExtensionUtils {
    constructor(extension) {
        this.web3 = null
        this.idoSmartcontract = process.env.VUE_APP_IDO_DFY_SMART_CONTRACT_ADDRESS
        const self = this
        if(extension === extensionName.binanceExtension) {
            if(window.BinanceChain) {
                this.extension = window.BinanceChain
                this.web3 = new Web3(window.BinanceChain)
                window.BinanceChain.enable().then(async () => {
                    const addresses = await this.web3.eth.getAccounts()
                    this.address = addresses[0]

                    this.buyIdoContract = new this.web3.eth.Contract(idoDFYAbi, self.idoSmartcontract, {
                        transactionConfirmationBlocks: 1
                    })
                }).catch(error => {
                    console.error(error.message)
                    this.web3 = null
                })
            } else alert('You need to have Binance Extension first') //TODO
        } else if (extension === extensionName.metamask || extension === extensionName.trustWallet) {
            if(window.ethereum) {
                if (
                    // window.ethereum.chainId === Web3.utils.numberToHex(chainId.bscMainnet)
                    window.ethereum.chainId === Web3.utils.numberToHex(chainId.bscTestnet)
                    // || window.ethereum.chainId == chainId.bscMainnet
                    || window.ethereum.chainId == chainId.bscTestnet
                    // || window.ethereum.networkVersion == chainId.bscMainnet
                    || window.ethereum.networkVersion == chainId.bscTestnet
                ) {
                    this.extension = window.ethereum
                    this.web3 = new Web3(window.ethereum)
                    window.ethereum.enable().then(async () => {
                        const addresses = await this.web3.eth.getAccounts()
                        this.address = addresses[0]

                        this.buyIdoContract = new this.web3.eth.Contract(idoDFYAbi, self.idoSmartcontract, {
                            transactionConfirmationBlocks: 1
                        })
                    }).catch(error => {
                        console.error(error.message)
                        this.web3 = null
                    })
                } else {
                    alert('You need to switch to Binance network first!') //TODO
                }
            } else alert('You need to have Wallet first') // TODO
        }
    }

    accountsChanged(callback) {
        const self = this
        this.extension.on('accountsChanged', function (accounts) {
            self.address = accounts[0]
            callback(accounts[0])
        });
    }

    isConnected() {
        return this.web3 !== null
    }

    getCurrentAddress() {
        return this.address
    }

    async getStartTime() {
        return this.buyIdoContract.methods.start().call()
    }

    async getEndTime() {
        return this.buyIdoContract.methods.end().call()
    }

    async getMaxBuyAmount() {
        return this.buyIdoContract.methods.buyMaximum().call()
    }

    async getMaxPersonRef() {
        return this.buyIdoContract.methods.maxPersonRef().call()
    }

    async getReferralRewardPercent() {
        return this.buyIdoContract.methods.refRewardPercent().call()
    }

    async isPauseStatus() {
        return this.buyIdoContract.methods.state().call()
    }

    async getCurrentReferralAmount() {
        return this.buyIdoContract.methods.referralRewardTotal(this.address).call()
    }

    async getBoughtAmount() {
        return this.buyIdoContract.methods.boughtAmountTotals(this.address).call()
    }

    async getRemainDFY() {
        const dfyContract = new this.web3.eth.Contract(erc20Abi, process.env.VUE_APP_DFY_SMART_CONTRACT_ADDRESS)
        return dfyContract.methods.balanceOf(this.idoSmartcontract).call()
    }

    async getSupportTokenAndBalance() {
        let supportTokenAndBalance = []
        const tokenAddresses = await this.buyIdoContract.methods.getTokenSupport().call()
        for(const tokenAddress of tokenAddresses) {
            const exchangeValue = await this.buyIdoContract.methods.exchangePairs(tokenAddress).call()
            const tokenContract = new this.web3.eth.Contract(erc20Abi, tokenAddress)
            const userBalance = await tokenContract.methods.balanceOf(this.address).call()
            if(userBalance.toString() !== '0') {
                const tokenSymbol = await tokenContract.methods.symbol().call()
                supportTokenAndBalance.push({
                    tokenAddress: tokenAddress,
                    tokenSymbol: tokenSymbol,
                    outputDFYNumber: exchangeValue.output,
                    inputTokenNumber: exchangeValue.input,
                    balance: userBalance
                })
            }
        }
        return supportTokenAndBalance
    }

    async buyIdoContractCall(tokenAddress, amount, refAddress, callback) {
        const tokenContract = new this.web3.eth.Contract(erc20Abi, tokenAddress)
        try {
            callback(buyIdoContractState.approving)
            const allowanceNumber = await tokenContract.methods.allowance(this.address, this.idoSmartcontract).call()
            if(!BigNumber(allowanceNumber).isGreaterThanOrEqualTo(BigNumber(amount))) {
                await tokenContract.methods.approve(this.idoSmartcontract, amount)
                    .send({from: this.address})
            }
            callback(buyIdoContractState.approved)
        } catch (e) {
            callback(buyIdoContractState.approveFailed)
            return e.message
        }
        try {
            callback(buyIdoContractState.buying)
            const boughtResult = await this.buyIdoContract.methods.buyIdo(tokenAddress, amount, refAddress)
                .send({from: this.address})
            callback(buyIdoContractState.bought)
            return boughtResult
        } catch (e) {
            callback(buyIdoContractState.buyFailed)
            return e.message
        }
    }
}

