const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CertModule", (m) => {
  const Cert = m.contract("Cert");
  return { Cert };
});
