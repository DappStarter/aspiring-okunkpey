require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember uniform install infant swing slender'; 
let testAccounts = [
"0xf11d8705491875d9505019b7638ef3af739ab10aa84c245461ae7bec629f80b2",
"0x9beee3fd9679e742c1d931a7ab22a32ed0d9096e2f45d257abfa48a5302ae22e",
"0xc9ea80a6d693e00792077464296286cde1d9b55891fb938b96edb44cfdd103b8",
"0x7d07fc91c64267b21ed273fc4689042742d52fe1f7808e22be3a986dc64f7079",
"0x66c546531d40131af47c0ca9fa9db6f2465a309dc2e91b2102f2635c9f1de8c8",
"0x0e9af53de4402d9565822909f9ec1dd7229841f79ac30754c6d2398da2ab46f4",
"0xa107b884b98d3c2b3f580f872781eacd7c5650d83b385eebbdad7344061ed26f",
"0x236fcdeff1bb5e0f55df9e2aa827673270c48e74c83e3947f07ec474b42f413f",
"0x0a28638626c8efe37f012ebe2d15dd3b11a632b87191c1738267e1fac4ba467e",
"0xff1e7e083af54a75803d377f89a961147885b94caf7c67dddcc2fd2126004e6f"
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
            version: '^0.5.11'
        }
    }
};
