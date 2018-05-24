pragma solidity ^0.4.13; 

contract OpenSesame {

    uint public lastUpdate; 

    event UserListUpdate(
        address user,
        string permissions
    );
    
    function updateUser(address user,string permissions)public {
        //well have an empty string for permissions for now but that could be an array eventually it's own type of markdown
        UserListUpdate(user, permissions);
	    lastUpdate = block.number;
    }
}
