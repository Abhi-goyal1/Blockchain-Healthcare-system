import { expect } from "chai";
import { ethers } from "hardhat";

describe("MedicalToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("MedicalToken");

    const initialOwner = (await ethers.getSigners())[0].address;

    const instance = await ContractFactory.deploy(initialOwner);
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("MedicalToken");
  });
});
