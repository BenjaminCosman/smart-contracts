import { BigNumberish } from 'ethers'
import { parseUnits } from '@ethersproject/units'

export const toTrustToken = (amount: BigNumberish) => parseUnits(amount.toString(), 8)

export const preciseTrustToken = (amount: BigNumberish) => parseUnits(amount.toString(), 10)