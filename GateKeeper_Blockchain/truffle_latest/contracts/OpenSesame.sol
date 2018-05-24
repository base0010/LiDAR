pragma solidity ^0.4.11; 

contract OpenSesame {
    event UserListUpdate(
        address user,
        string permissions
    );
    
    function updateUser(address user,string permissions) {
        //well have an empty string for permissions for now but that could be an array eventually it's own type of markdown
        UserListUpdate(user, permissions);
    }
}