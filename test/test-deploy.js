const { ethers } = require('hardhat')
const { expect, assert } = require("chai") 

describe("SimpleStorage", function () {
    let SimpleStorageFactory, simpleStorage
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory.deploy()
    })
})