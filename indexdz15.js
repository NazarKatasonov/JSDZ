const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};


const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};




const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};



const getSortedUniqueSkills = users => {
  return users
    .flatMap(user => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort((a, b) => a.localeCompare(b));
};
