import Role from "./Role.js";
import Utilisateur from "./Utilisateurs.js";

//relation Utilisateur Role

Role.hasMany(Utilisateur)

Utilisateur.belongsTo(Role)

export {Role,Utilisateur}
