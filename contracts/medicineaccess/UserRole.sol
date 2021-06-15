pragma solidity ^0.5.16;

// Import the library 'Roles'
import "./Roles.sol";
//import "openzeppelin-solidity/contracts/access/Roles.sol";

// Define a contract 'UserRole' to manage this role - add, remove, check
contract UserRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event UserAdded(address indexed account);
  event UserRemoved(address indexed account);

  // Define a struct 'User' by inheriting from 'Roles' library, struct Role
  Roles.Role private User;

  // In the constructor make the address that deploys this contract the 1st patient
  constructor() public {
    _addUser(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyUser() {
    require(isUser(msg.sender));
    _;
  }

  // Define a function 'isUser' to check this role
  function isUser(address account) public view returns (bool) {
    return Roles.has(User, account);
  }

  // Define a function 'addUser' that adds this role
  function addUser(address account) public onlyUser {
    _addUser(account);
  }

  // Define a function 'renounceUser' to renounce this role
  function renounceUser() public {
    _removeUser(msg.sender);
  }

  // Define an internal function '_addUser' to add this role, called by 'addUser'
  function _addUser(address account) internal {
    Roles.add(User, account);
    emit UserAdded(account);
  }

  // Define an internal function '_removeUser' to remove this role, called by 'removeUser'
  function _removeUser(address account) internal {
    Roles.remove(User, account);
    emit UserRemoved(account);
  }
}