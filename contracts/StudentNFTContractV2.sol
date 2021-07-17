// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
This contract uses a counter stored inside the contract as tokenId for minting
 */

contract StudentNFTContract is ERC721 {

    mapping (uint256 => string) private _tokenURIs;
    uint256 tokenID = 0;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();

        return bytes(_tokenURI).length > 0 
        ? string(abi.encodePacked(base, _tokenURI))
        : "";
    }

    function _setTokenURI(uint256 _tokenId, string memory _tokenURI) internal virtual {
        _tokenURIs[_tokenId] = _tokenURI;
    }

    function mint(
        address _to,
        string memory tokenURI_
    ) external {
        tokenID += 1;
        _mint(_to, tokenID);
        _setTokenURI(tokenID, tokenURI_);
    }
}