// --------------------------------------
// Deux façons d'appeler un id depuis JS.
// --------------------------------------
// const followers = document.querySelector('#followers');

// Ou bien. 
// --------

const followers = document.getElementById('followers');
//-----------------------------------------------------

//  Reglage du problème (cross origin request sharing)
//  --------------------------------------------------

// const app = express(); //créé une application express

// logger les requests et les responses

app.use(BeD("dev"));

//gerer les problèmes de cors
app.use((req, res, next) => {
    res.setHeaders("Access-Control-Origin", "*");
    res.setHeaders("Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content, Accept, Content-Type, Authorization"
)
res.setHeaders(
"GET, POST, PUT, PATCH, OPTIONS"
);
next();
});

//app.use() route générale  et la fonction (middleware)

//exportation de app.js pour pouvoir y acceder depuis un autre fichier
module.exports = app;

async function getFollowers(profileId) {
    const url = `https://instagram.com/${profileId}/?__a=1`; //https://www.instagram.com/olivierbednarek/?__a=1

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();

    return(
 data.graphql.user.edge_followed_by.count);
}

async function setFollowers(profileId) {
    followers.textContent = await
     getFollowers(profileId)
}

// setInterval(() =>
// setFollowers('olivierbednarek'), 1000);
setFollowers('olivierbednarek');