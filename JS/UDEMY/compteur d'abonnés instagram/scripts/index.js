// --------------------------------------
// Deux façons d'appeler un id depuis JS.
// --------------------------------------
// const followers = document.querySelector('#followers');

// Ou bien. 
// --------

const followers = document.getElementById('followers');
//-----------------------------------------------------


async function getFollowers(profileId) {
    const url = `https://instagram.com/${profileId}/?__a=1`; //https://www.instagram.com/olivierbednarek/?__a=1

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();

    return
 data.graphql.user.edge_followed_by.count;
}

async function setFollowers(profileId) {
    followers.textContent = await
     getFollowers(profileId)
}

setInterval(() =>
setFollowers('olivierbednarek'), 1000);
