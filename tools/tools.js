// navbar tools
import ReseauxSociaux from "../public/reseauxsociaux.png";
import Marketing from "../public/marketing.png";
import CreationSite from "../public/creationsite.png";
import AnnonceGoogle from "../public/annoncegoogle.png";
import Redactionweb from "../public/redactionweb.png";
// import ReseauxSociaux from "../public/reseauxsociaux.png"

export const navigation = [
  { id: 1, href: "/", name: "Accueil" },
  { id: 2, href: "/propos", name: "A propos" },
  { id: 3, href: "/clients", name: "Mes clients" },
  { id: 4, href: "/contact", name: "Contact" },
];

export const services = [
  {
    id: 1,
    picture: AnnonceGoogle,
    title: "Annonces Google",
    info: "Tu souhaites booster ton activité et le traffic de ton site par des leviers payants ?",
  },
  {
    id: 2,
    picture: Redactionweb,
    title: "Rédaction de contenu web",
    info: "Tu as un site internet. Mais voilà, ton référencement ou ta visibilité reste à désirer ?",
  },
  {
    id: 3,
    picture: ReseauxSociaux,
    title: "Gestion des reseaux sociaux",
    info: "Tu as besoin de construire une stratégie marketing solide sur Facebook ou Instagram ?",
  },
  {
    id: 4,
    picture: CreationSite,
    title: "Création de site internet",
    info: "Tu souhaites développer ton activité (produits,services...) en ligne et sur internet ?",
  },
  {
    id: 5,
    picture: Marketing,
    title: "Conseil en stratégie marketing",
    info: "Tu souhaites des conseils sur le développement de ton actité sur le net ?",
  },
  {
    id: 6,
    picture: ReseauxSociaux,
    title: "Formation marketing digital",
    info: "Tu aimerais devenir autonome sur la gestion des outils digitaux ?",
  },
];

export const parcours = [
  { date: "10/01/2002", info: "Bac+5 Ecole de commerce" },
  { date: "10/01/2002", info: "Spécialisation Marketing Digital" },
  { date: "10/01/2002", info: "Certifications Google" },
  { date: "10/01/2002", info: "10 ans d'expertises E-commerce et e-business" },
  { date: "10/01/2002", info: "Industries du luxe,mode,voyage..." },
];

export const steps = [
  {
    info: "étape",
    stage: 1,
    illustraction: "",
    text: "On echange sur ton projet",
  },
  {
    info: "étape",
    stage: 2,
    illustraction: "",
    text: "J'evalue la faisabilite de ton projet et propose 3 approches",
  },
  {
    info: "étape",
    stage: 3,
    illustraction: "",
    text: "Je developpe ta strategie marketing (que l'on peut revoir jusqu'a 3 fois)",
  },
  {
    info: "étape",
    stage: 4,
    illustraction: "",
    text: "Je t'accompagne dans l'execution du projet",
  },
  {
    info: "Success",
    illustraction: "",
    text: "Je soumets un rapport de fin de mission",
  },
];
