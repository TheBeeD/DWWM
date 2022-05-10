// let monMap = new Map([
//     ['prenom', 'Mark' ],
//     ['nom', 'Zuckerberg']
// ]);

// monMap.set('poste', 'PDG de farcedebook');
// monMap.delete('poste');
// console.log(monMap);

let utilisateurs = new Map();

utilisateurs.set('Mark Zuckerberg', {
    email: 'mark@farcedebouk.com', 
    poste: 'PDG',  
});

utilisateurs.set('Bill Gates', {
    email: 'bill@gatesnotes.com',
    poste: 'C\'est lui le sauveur^^',
});

console.log(utilisateurs);