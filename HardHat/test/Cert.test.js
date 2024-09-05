const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("PASS TEST", function () {
  async function deployCertFixture() {
    const [admin, other] = await ethers.getSigners();
    const Cert = await ethers.getContractFactory("Cert");
    const cert = await Cert.deploy();
    return { admin, other, cert };
  }
  it("should set the right admin value", async function () {
    const { cert, admin } =await loadFixture(deployCertFixture);
    expect(cert.deploymentTransaction().from).to.equal(admin.address);
  });
  it("Testing Issue", async function () {
    const { cert } = await loadFixture(deployCertFixture);
    await expect(cert.issue(101, 'Anandu', 'EDP', 'S', '12-12-24')).to.emit(cert, 'Issued').withArgs('EDP', 101, 'S')
  });
  it("Reading value", async function () {
    const { cert } = await loadFixture(deployCertFixture);
    await cert.issue(101, 'Anandu', 'EDP', 'S', '12-12-24');
    const certificates = await cert.Certificates(101);
    console.log("data",certificates)
    expect(certificates[0]).to.equal('Anandu');
    expect(certificates[1]).to.equal('EDP');
    expect(certificates[2]).to.equal('S');
    expect(certificates[3]).to.equal('12-12-24');
  });
  // it("Test issue frfom another person", async function () {
  //   const { cert, other } = await loadFixture(deployCertFixture);
  //   await expect(cert.connect(other).issue(101, 'Anandu', 'EDP', 'S', '12-12-24')).to.be.revertedWith('Access Denied');

  // })
});
describe("FAIL TEST", function () {
  async function deployCertFixture() {
    const [admin, other] = await ethers.getSigners();
    const Cert = await ethers.getContractFactory("Cert");
    const cert = await Cert.deploy();
    return { admin, other, cert };
  }
  it("Test issue frfom another person", async function () {
    const { cert, other } = await loadFixture(deployCertFixture);
    await expect(cert.connect(other).issue(101, 'Anandu', 'EDP', 'S', '12-12-24')).to.be.revertedWith('Access Denied');

  })
});