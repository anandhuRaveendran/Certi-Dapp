# Certi-Dapp 🖥️

This project is a blockchain-based certificate issuing web application. It allows an admin to issue certificates to students,
with the certificate details and ID securely stored on the blockchain. Students can retrieve and view their certificates by
searching for their unique certificate ID.
# Demo
<a href="https://youtu.be/RUkfEyufHmU?si=KhFn3F4xolUqwCl4"><img src="https://github.com/anandhuRaveendran/Certi-Dapp/blob/main/UI/src/assets/thumb.png" width="250px" height="150px">

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes
### Prerequisites

NodeJs v20+
[Node](https://nodejs.org/en/download/package-manager)

### Installing
First clone the Project and change into the directory


```
git clone https://github.com/anandhuRaveendran/Certi-Dapp.git
cd Certi-Dapp
```
Open the Code in VSC


```
code .
```
# ⛑️ Initalize Hardhat
open another terminal and copy the code and execute for get contract hash

```
cd HardHat
npm i
```
for getting the contract hash you have to paste your sepolia infura url and private key
below code line
https://github.com/anandhuRaveendran/Certi-Dapp/blob/2e1812a83a14e89ed88d15f9358dae2c02453402/HardHat/hardhat.config.js#L11
https://github.com/anandhuRaveendran/Certi-Dapp/blob/b9814d953dd86f3563c8d17394afb3d2b0edb1bf/HardHat/hardhat.config.js#L12

```
npx hardhat ignition deploy ignition/modules/Cert.js
```
Then replace the contract hash here
https://github.com/anandhuRaveendran/Certi-Dapp/blob/9fa6d170ff148b7b07e4396547b305018a8977fa/UI/src/scdata/deployed_addresses.json#L2
```
npx hardhat compile
```
then run the hardhat node
```
npx hardhat node
```

## 🐳  Run the Application with Docker
```
docker compose build
```
```
docker compose up
```
This will set up and run your certificate DApp in a Docker container. The app will be accessible on http://localhost:3000.

To stop the running containers, use

```
docker compose down
```

## 🔩 Built With

* JavaScript
* NodeJs
* MongoDB
* Docker
* Solidity
* Hardhat




## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

