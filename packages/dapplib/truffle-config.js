require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rifle spider uncle imitate private food search'; 
let testAccounts = [
"0x08a253cceb60ddc781487eb67e9dbdd04f2caf0661260959a0a375dd008b885e",
"0x0d5792d0466174fac97b6c973fa0ea1b953d98d2f152473c0ebd9a1522caf2ba",
"0x5d272e59373127a4251d8b780f90b65a5618c4adf0830550936a79752017bb58",
"0xa9d1b988e0624a6267082c1452c67ec448917a6b8269c502ff91bbda65b84212",
"0x9bda779a2c44ce35a3f65310bdfb74c347826282aaf5093ae79944e66510eec5",
"0x415e8e535b2b151ec15eb55cffbb18af60ae3e4c0a4f638ecc5f6932af22abe3",
"0xd10fd04885bc87d0f05080a3ef5c00a731a5b37f76cffb443f1bf8926477ec8a",
"0xb68f8e925fc75ac12c3caa823152f118a15a9081cda37b3872fd2f3dc76e7e56",
"0x019f3802c3051e80781aa2b7424d1707e0b7ee5b578c00c714e22b38f7128919",
"0x4e227a406f4ac2eea1d0d7f5370835fb3d558c19ad0b438c25ff564ea84a5da9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

