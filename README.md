# Certi-Dapp 🖥️

This project is a blockchain-based certificate issuing web application. It allows an admin to issue certificates to students,
with the certificate details and ID securely stored on the blockchain. Students can retrieve and view their certificates by
searching for their unique certificate ID.
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
npm i hardhat
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
This will set up and run your certificate DApp in a Docker container. The app will be accessible on http://localhost:5174.

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

