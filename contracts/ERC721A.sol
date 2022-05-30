// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract LilMutantApeClub is ERC721A, Ownable, ReentrancyGuard {
    using Address for address; 
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 private mintPrice = 0.1 ether; 
    uint256 private maxSupply = 5000;
    uint256 private mintLimit = 5;
    bool private isMintEnabled = true;
    string private baseTokenUri="ipfs:///";
    bool private revealed = false;
    string private unRevealUrl= "https://images1.mypinata.cloud/ipfs/QmWCZdZj4wyQK54GrepKPkdcWKerevdg3mmoUMh9yTBmiV/notRevealed.json";
    bool public isPublicSaleAvailable = false; 
    bool public isPreSaleActive = false; 

    address private beneficiaryOne;
    address private beneficiaryTwo;
    address private beneficiaryThree;

    constructor(
        address beneficiaryOne_,
        address beneficiaryTwo_,
        address beneficiaryThree_
    ) ERC721A (
        "LilMutantApeClub",
         "LMAC"
    ) {
        beneficiaryOne = beneficiaryOne_; 
        beneficiaryTwo = beneficiaryTwo_;
        beneficiaryThree = beneficiaryThree_;    
    } 

    function setbaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

        function setUnRevealUrl(string calldata revealUri_) external onlyOwner {
        unRevealUrl = revealUri_;
    }

    function tokenURI(uint256 tokenId_) public view override(ERC721A) returns (string memory ) {
     require(_exists(tokenId_), "Token does not exist!");
     
       if (revealed == true) {
            return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
       } else {
           return unRevealUrl;
       }
    }


   function withdrawAll() public onlyOwner {
        uint256 balance = address(this).balance;

        payable(beneficiaryOne).transfer((balance * 33) / 100);
        payable(beneficiaryTwo).transfer((balance * 33) / 100);
        payable(beneficiaryThree).transfer((balance * 34) / 100);
    }

    function revealCollection() public onlyOwner{
        revealed = true;
    }

    function setIsMintEnabled(bool isMintEnabled_) public onlyOwner {
        isMintEnabled = isMintEnabled_;
    }

    function getIsMintEnabled() public view returns(bool) {
        return isMintEnabled;
    }

    function setMaxSupply(uint256 supply) public onlyOwner {
        maxSupply = supply;
    }

    function getMaxSupply() public view returns(uint256) {
        return maxSupply;
    }

    function setMintLimit(uint256 limit) public onlyOwner {
        mintLimit = limit;
    }

    function getMintLimit() public view returns(uint256) {
        return mintLimit;
    }

    function setMintPrice(uint256 price) public onlyOwner {
        mintPrice = price;
    }

    function getMintPrice() public view returns(uint256) {
        return mintPrice;
    }

    function setBeneficiaryOne(address beneficiaryOne_) public onlyOwner {
        beneficiaryOne = beneficiaryOne_;
    }

    function getBeneficiaryOne() public view returns(address) {
        return beneficiaryOne;
    }

    function setBeneficiaryTwo(address beneficiaryTwo_) public onlyOwner {
        beneficiaryTwo = beneficiaryTwo_;
    }

    function getBeneficiaryTwo() public view returns(address) {
        return beneficiaryTwo;
    }

    function setBeneficiaryThree(address beneficiaryThree_) public onlyOwner {
        beneficiaryThree = beneficiaryThree_;
    }

    function getBeneficiaryThree() public view returns(address) {
        return beneficiaryThree;
    }

    function mint(
        uint256 quantity
    ) external payable nonReentrant {
        require(
            !Address.isContract(msg.sender),
            "Contracts are not allowed to mint the NFTs."
        );
        require(
            quantity <= mintLimit,
            "You can only mint 5 at a time"
        );
        require(
            _tokenIds.current() + quantity <= maxSupply,
            "Amount should not exceed max supply of NFT DOGZ."
        );
        require(
            isMintEnabled == true,
            "mint is off."
        );
        require(
            msg.value >= mintPrice * quantity,
            "Ether value sent is incorrect."
        );

        for (uint256 i = 0; i < quantity; i++) {
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _safeMint(msg.sender, quantity);
        }
    }

    function airDrop(address[] memory recipients, uint256[] memory numberOfTokensPerWallet, uint256 numberOfTokensToAirdrop) public onlyOwner {
        require(
            recipients.length == numberOfTokensPerWallet.length,
            "Different array sizes"
        );

        require(
            _tokenIds.current() + numberOfTokensToAirdrop <= maxSupply,
            "Exceeded max supply"
        );

        for (uint256 i=0; i<recipients.length; i++) {
            address recipient = recipients[i];

            for (uint256 j=0; j<numberOfTokensPerWallet[i]; j++) {
                _tokenIds.increment();
                uint256 newItemId = _tokenIds.current();
                _safeMint(recipient, newItemId);
            }
        }
    }
 }


    
