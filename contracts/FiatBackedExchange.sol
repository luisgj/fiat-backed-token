/**
 * Copyright (c) 2018-2020 CENTRE SECZ
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
 
 pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./Ownable.sol";

contract FiatBackedExchangeV0 is OwnableV0 {
    using SafeMath for uint256;

    string public name;
    string public symbol;
    uint8 public decimals;
    bool internal initialized;


    event Exchange(address indexed toAddress, uint256 amount, uint256 rate);

    function initialize(
        string memory tokenName,
        string memory tokenSymbol,
        uint8 tokenDecimals,
        address newOwner
    ) public {
        require(!initialized, "FiatBackedExchange: contract is already initialized");
        require(
            newOwner != address(0),
            "FiatBacked: new owner is the zero address"
        );

        name = tokenName;
        symbol = tokenSymbol;
        decimals = tokenDecimals;
        setOwner(newOwner);
        initialized = true;
    }

    function exchange (
        address toAddress,
        uint256 amount,
        uint256 rate
    ) public {
        emit Exchange(toAddress, amount, rate);
    }
}