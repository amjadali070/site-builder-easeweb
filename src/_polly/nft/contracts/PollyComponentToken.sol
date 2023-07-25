// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract PollyComponentToken is
  Initializable,
  ERC721Upgradeable,
  ERC721EnumerableUpgradeable,
  ERC721URIStorageUpgradeable,
  ERC721BurnableUpgradeable,
  OwnableUpgradeable
{
  using Counters for Counters.Counter;

  struct TokenURI {
    uint256 id;
    string uri;
  }

  Counters.Counter private _tokenIdCounter;

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() initializer {}

  function initialize() initializer public {
    __ERC721_init("PollyComponentToken", "PLC");
    __ERC721Enumerable_init();
    __ERC721URIStorage_init();
    __ERC721Burnable_init();
    __Ownable_init();
  }

  function safeMint(address to, string memory uri) public {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    _safeMint(to, tokenId);
    _setTokenURI(tokenId, uri);
  }

  function listLatestTokens(address owner, uint256 offset, uint256 limit) public view returns (TokenURI[] memory) {
    uint256 count = balanceOf(owner);
    if (offset >= count || limit <= 0) return new TokenURI[](0);

    uint256 len = Math.min(Math.min(limit, 20), count - offset);
    TokenURI[] memory result = new TokenURI[](len);

    for (uint256 i = 0; i < len; i++) {
      uint256 index = (count - 1 - offset) - i;
      uint256 tokenId = tokenOfOwnerByIndex(owner, index);
      result[i] = TokenURI(tokenId, tokenURI(tokenId));
    }
    return result;
  }

  // The following functions are overrides required by Solidity.

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
  {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  function _burn(uint256 tokenId)
    internal
    override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
  {
    super._burn(tokenId);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
    returns (string memory)
  {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
