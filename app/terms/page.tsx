import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Les conditions générales d'utilisation du site kashapp.tech et de l'application mobile Kash.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Conditions générales d'utilisation | Kash",
    description:
      "Les règles d'utilisation du site et de l'application mobile Kash.",
  },
};

// Texte officiel : docs/Conditions_Generales_Utilisation_KASH_V2_0_17_09_2026.pdf.
// Recopié à l'identique — toute modification doit partir du document source et
// être reportée aussi dans kash-mobile (app/terms.tsx).
export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Conditions Générales d’Utilisation"
      intro="Les présentes Conditions Générales d’Utilisation, ci-après les « CGU », encadrent l’accès et l’utilisation de l’application mobile KASH, du site kashapp.tech et des services numériques associés. En créant un compte KASH, l’utilisateur accepte les présentes CGU et reconnaît avoir pris connaissance de la Politique de confidentialité."
      lastUpdated="17 septembre 2026"
      version="2.0"
      publisher={
        <>
          <p>
            <strong>KONGO ANALYTICS &amp; SHOPPER HABITS SARLU</strong> — En sigle : K.A.S.H SARLU
          </p>
          <p>20 A, Nouvelles Galeries Présidentielles, Commune de la Gombe, Kinshasa, RDC</p>
          <p>
            <a href="mailto:contact@kashapp.tech">contact@kashapp.tech</a>
          </p>
        </>
      }
      sections={[
        {
          title: "1. Objet de KASH",
          body: (
            <>
              <p>KASH est une plateforme numérique destinée à faciliter la découverte et la mise en relation entre utilisateurs, commerces et prestataires.</p>
              <p>L’application permet notamment de rechercher et consulter des commerces, produits et services, consulter des prix, promotions et informations pratiques, contacter directement des commerces, constituer un panier, demander des proformas, publier des avis, transmettre des tickets ou factures et, pour les professionnels, référencer et gérer un commerce, ses produits, services, promotions et informations commerciales.</p>
              <p>KASH peut également proposer aux professionnels des services de visibilité ou fonctionnalités Premium.</p>
            </>
          ),
        },
        {
          title: "2. Rôle de KASH",
          body: (
            <>
              <p>KASH agit principalement comme plateforme de mise en relation et de visibilité.</p>
              <p>Sauf lorsqu’un service KASH particulier l’indique expressément, KASH ne vend pas directement les produits ou services proposés par les commerces référencés, n’est pas partie au contrat de vente conclu entre le client et le commerçant, ne garantit pas les stocks du commerçant, ne fixe pas ses prix, n’assure pas sa prestation et n’organise pas sa livraison.</p>
              <p>La commande finale, le paiement du produit ou service, la livraison éventuelle et l’exécution de la prestation sont conclus directement entre l’utilisateur et le commerce ou prestataire concerné.</p>
              <p>Les services Premium achetés directement auprès de KASH par les commerçants constituent toutefois une relation distincte entre KASH et le professionnel concerné.</p>
            </>
          ),
        },
        {
          title: "3. Création d’un compte",
          body: (
            <>
              <p>Dans la version actuelle de l’application, l’utilisation de KASH nécessite la création d’un compte.</p>
              <p>L’utilisateur s’engage à fournir des informations exactes, actuelles et complètes.</p>
              <p>Il est responsable de la confidentialité de ses identifiants, de son mot de passe, de son téléphone et de tout autre moyen permettant d’accéder à son compte.</p>
              <p>L’utilisateur ne doit pas permettre à une personne non autorisée d’utiliser son compte.</p>
              <p>En cas de perte, de suspicion d’accès frauduleux ou d’utilisation non autorisée, il doit contacter KASH dès que possible.</p>
            </>
          ),
        },
        {
          title: "4. Acceptation des CGU et Politique de confidentialité",
          body: (
            <>
              <p>Lors de l’inscription, l’utilisateur doit effectuer une action volontaire permettant de confirmer : « J’accepte les Conditions d’utilisation et je reconnais avoir pris connaissance de la Politique de confidentialité. »</p>
              <p>La création du compte n’est possible que lorsque cette acceptation a été effectuée.</p>
              <p>La Politique de confidentialité est distincte des présentes CGU et décrit les traitements de données personnelles réalisés par KASH.</p>
            </>
          ),
        },
        {
          title: "5. Recherche et consultation des offres",
          body: (
            <>
              <p>KASH permet de consulter des informations relatives aux commerces, produits et services disponibles dans l’application.</p>
              <p>Ces informations peuvent comprendre notamment des prix, descriptions, photographies, disponibilités, promotions, horaires, contacts, zones de livraison et autres informations commerciales.</p>
              <p>KASH s’efforce de présenter des informations fiables et actualisées, mais certaines données peuvent être modifiées par le commerce sans que KASH en soit immédiatement informée.</p>
              <p>L’utilisateur est donc invité à confirmer auprès du commerce les informations déterminantes avant de se déplacer, commander ou effectuer un paiement.</p>
            </>
          ),
        },
        {
          title: "6. Commerces et offres visibles sur KASH",
          body: (
            <>
              <p>KASH a vocation à afficher publiquement les offres provenant de commerces ou prestataires référencés et validés sur la plateforme, ou les offres ajoutées par KASH avec l’accord du commerce concerné.</p>
              <p>Le simple traitement d’une facture, d’un ticket ou d’une donnée commerciale ne confère pas automatiquement au commerce concerné le statut de commerce référencé et n’entraîne pas nécessairement la publication publique de son catalogue.</p>
              <p>KASH peut soumettre certaines offres ou informations à une validation préalable avant leur publication.</p>
            </>
          ),
        },
        {
          title: "7. Prix et disponibilité",
          body: (
            <>
              <p>Les prix visibles dans KASH sont fournis à titre informatif ou commercial selon leur source.</p>
              <p>Ils peuvent être modifiés à tout moment par le commerce.</p>
              <p>KASH ne garantit pas qu’un produit ou service soit encore disponible au moment où l’utilisateur contacte le commerce.</p>
              <p>Lorsqu’une offre est indiquée « Sur devis », aucun prix définitif n’est présumé avant la réponse du professionnel concerné.</p>
              <p>L’utilisateur doit confirmer directement auprès du commerce tout prix, stock, promotion ou condition particulière avant de conclure une transaction.</p>
            </>
          ),
        },
        {
          title: "8. Panier",
          body: (
            <>
              <p>Le panier permet à l’utilisateur de regrouper des produits ou services qu’il souhaite consulter ou communiquer au commerce.</p>
              <p>Le fait d’ajouter un article ou un service au panier ne constitue ni une réservation, ni une commande ferme, ni une garantie de disponibilité.</p>
              <p>Lorsque le panier est utilisé pour contacter un commerce, l’échange commercial se poursuit directement entre l’utilisateur et le professionnel.</p>
              <p>Les informations du panier peuvent être mises à jour lorsque le prix, la disponibilité ou la promotion d’une offre est modifié.</p>
            </>
          ),
        },
        {
          title: "9. Demandes de proforma",
          body: (
            <>
              <p>KASH permet à l’utilisateur d’adresser une demande de proforma à un commerce.</p>
              <p>Une demande peut porter sur un ou plusieurs produits ou services et préciser des quantités ou informations supplémentaires.</p>
              <p>Le commerce reste seul responsable de sa réponse, notamment concernant la disponibilité, le prix proposé et les conditions commerciales.</p>
              <p>La réponse à une proforma ne constitue pas un engagement de KASH.</p>
              <p>Sauf indication contraire du commerçant, une proforma constitue une proposition commerciale ou informative et ne vaut pas nécessairement commande définitive.</p>
              <p>Toute transaction éventuelle est conclue directement entre l’utilisateur et le professionnel concerné.</p>
            </>
          ),
        },
        {
          title: "10. Contacts directs avec les commerces",
          body: (
            <>
              <p>KASH peut permettre à l’utilisateur de contacter un commerce par téléphone, WhatsApp, carte/localisation ou autre service externe.</p>
              <p>Lorsque l’utilisateur quitte KASH pour poursuivre l’échange dans un service tiers, les règles et conditions de ce service peuvent également s’appliquer.</p>
              <p>KASH n’a pas accès au contenu d’une conversation WhatsApp ou d’un appel téléphonique effectué en dehors de la plateforme, sauf lorsqu’une information est volontairement communiquée à KASH.</p>
            </>
          ),
        },
        {
          title: "11. Livraison",
          body: (
            <>
              <p>Certains commerces peuvent indiquer qu’ils proposent une livraison.</p>
              <p>Les zones desservies, frais, délais et conditions de livraison sont définis par le commerce concerné.</p>
              <p>Sauf lorsqu’un service spécifique KASH indique explicitement le contraire, KASH ne réalise pas elle-même la livraison et n’est pas responsable d’un retard, d’une annulation, d’une perte ou d’un incident lié à une livraison organisée directement par un commerce ou un tiers.</p>
            </>
          ),
        },
        {
          title: "12. Référencement d’un commerce",
          body: (
            <>
              <p>Un utilisateur peut demander le référencement d’un ou plusieurs commerces dont il est autorisé à assurer la représentation ou la gestion.</p>
              <p>KASH peut demander certaines informations nécessaires à la vérification du commerce.</p>
              <p>Une demande peut être acceptée, rejetée ou retournée pour correction.</p>
              <p>KASH se réserve le droit de demander des renseignements supplémentaires lorsqu’ils sont nécessaires pour vérifier l’identité, l’existence ou la légitimité du commerce.</p>
              <p>Un même propriétaire peut, sous réserve des contrôles de KASH, gérer plusieurs commerces.</p>
              <p>La validation d’un commerce ne constitue pas une certification générale de sa solvabilité, de tous ses produits ou de toutes ses pratiques commerciales.</p>
            </>
          ),
        },
        {
          title: "13. Obligations des commerçants et prestataires",
          body: (
            <>
              <p>Le professionnel utilisant KASH s’engage à communiquer des informations sincères et à jour.</p>
              <p>Il est notamment responsable des informations publiées concernant son commerce, ses coordonnées, ses produits et services, prix, promotions, disponibilités, photos, horaires et conditions de livraison.</p>
              <p>Le professionnel doit disposer des autorisations nécessaires pour publier les contenus, marques, images et informations qu’il fournit.</p>
              <p>Il lui appartient de respecter les obligations légales, fiscales, commerciales, professionnelles ou réglementaires applicables à son activité.</p>
              <p>KASH peut suspendre ou retirer une offre ou un commerce en cas d’informations manifestement fausses, illicites, trompeuses ou contraires aux présentes CGU.</p>
            </>
          ),
        },
        {
          title: "14. Produits et services soumis à validation",
          body: (
            <>
              <p>KASH peut soumettre les produits et services créés par un professionnel à une procédure de validation avant leur publication.</p>
              <p>KASH peut refuser ou retirer notamment une offre illicite, frauduleuse, trompeuse, dangereuse, contrefaisante, inappropriée ou incompatible avec les règles de la plateforme.</p>
              <p>La validation technique ou éditoriale par KASH ne transfère pas à KASH la responsabilité du professionnel concernant l’offre concernée.</p>
            </>
          ),
        },
        {
          title: "15. Promotions",
          body: (
            <>
              <p>Les professionnels peuvent proposer des promotions sur certaines offres.</p>
              <p>Ils sont responsables de l’exactitude de la réduction, du prix initial, du prix promotionnel, de la durée et des conditions applicables.</p>
              <p>KASH peut afficher ces promotions dans différentes sections de l’application et envoyer des notifications lorsqu’une fonctionnalité correspondante est activée.</p>
              <p>La présence d’une promotion sur KASH ne constitue aucune garantie de stock ni de disponibilité.</p>
            </>
          ),
        },
        {
          title: "16. Avis clients",
          body: (
            <>
              <p>Les utilisateurs peuvent publier des notes et commentaires sur les commerces.</p>
              <p>Un avis doit correspondre à une expérience réelle ou à une opinion sincère et ne doit pas contenir de propos illicites, diffamatoires, menaçants, discriminatoires, frauduleux ou portant atteinte aux droits d’un tiers.</p>
              <p>Un utilisateur peut être autorisé à modifier son avis existant.</p>
              <p>Un propriétaire ou gestionnaire ne doit pas utiliser son compte pour noter son propre commerce.</p>
              <p>KASH peut modérer, masquer ou supprimer des avis en cas de fraude, conflit d’intérêts, manipulation de note, contenu illicite ou violation des présentes CGU.</p>
              <p>KASH peut également prendre des mesures contre un compte cherchant à manipuler artificiellement la réputation d’un commerce.</p>
            </>
          ),
        },
        {
          title: "17. Factures et tickets transmis par les utilisateurs",
          body: (
            <>
              <p>KASH permet aux utilisateurs de scanner ou importer des factures, tickets ou documents commerciaux.</p>
              <p>L’utilisateur s’engage à ne transmettre que des documents obtenus légalement et qu’il est autorisé à communiquer.</p>
              <p>Les documents peuvent être analysés automatiquement afin d’extraire certaines informations commerciales.</p>
              <p>L’utilisateur est invité à masquer les données personnelles qui ne sont pas nécessaires au traitement.</p>
              <p>KASH peut corriger, vérifier ou rejeter un document illisible, incohérent, frauduleux ou ne répondant pas aux critères applicables.</p>
              <p>Les modalités précises de traitement des données issues de ces documents sont détaillées dans la <Link href="/privacy">Politique de confidentialité</Link>.</p>
            </>
          ),
        },
        {
          title: "18. Intelligence artificielle et OCR",
          body: (
            <>
              <p>Certaines fonctions de traitement de documents peuvent utiliser des technologies automatisées de reconnaissance de texte et de structuration.</p>
              <p>Ces outils peuvent commettre des erreurs.</p>
              <p>KASH peut donc prévoir une vérification administrative ou une correction manuelle des informations extraites.</p>
              <p>L’utilisateur ne doit pas considérer une information issue automatiquement d’un document comme garantie tant qu’elle n’a pas été validée lorsque cette validation est nécessaire.</p>
            </>
          ),
        },
        {
          title: "19. Services Premium",
          body: (
            <>
              <p>KASH peut proposer aux commerçants des fonctionnalités Premium payantes destinées notamment à améliorer la visibilité de leur commerce ou de certaines offres.</p>
              <p>Avant tout paiement, KASH affiche les principales caractéristiques de l’offre concernée, notamment son prix et sa durée lorsqu’elles sont applicables.</p>
              <p>Les fonctionnalités exactes, durées, modalités de renouvellement éventuel et autres conditions particulières affichées au moment de l’achat complètent les présentes CGU.</p>
              <p>Un service Premium améliore les possibilités de visibilité disponibles dans KASH mais ne garantit pas un nombre de vues, de contacts, de clients, de ventes ou de revenus.</p>
            </>
          ),
        },
        {
          title: "20. Paiements Premium",
          body: (
            <>
              <p>Les paiements Premium sont traités par GeniusPay.</p>
              <p>Selon les options disponibles, ils peuvent notamment être effectués par Mobile Money ou carte bancaire.</p>
              <p>Le professionnel est responsable de l’exactitude des informations communiquées au moment du paiement.</p>
              <p>KASH ne stocke pas le numéro complet des cartes bancaires.</p>
              <p>Les éventuels remboursements, annulations ou litiges relatifs à un paiement sont traités conformément aux conditions affichées au moment de l’achat, aux règles du prestataire de paiement et aux dispositions légales applicables.</p>
            </>
          ),
        },
        {
          title: "21. Notifications",
          body: (
            <>
              <p>KASH peut envoyer des notifications relatives notamment aux proformas, promotions, demandes de référencement, factures, avis, sécurité du compte ou fonctionnement du service.</p>
              <p>L’utilisateur peut gérer les autorisations de notification depuis son appareil.</p>
              <p>KASH ne garantit pas la réception immédiate de toutes les notifications, celle-ci pouvant dépendre du système d’exploitation, de la connexion internet ou de services techniques tiers.</p>
            </>
          ),
        },
        {
          title: "22. Comportements interdits",
          body: (
            <>
              <p>Il est interdit d’utiliser KASH pour frauder ou tromper, usurper une identité, transmettre de faux documents, publier de fausses informations, manipuler les avis, contourner les mécanismes de sécurité, accéder sans autorisation à un compte ou à une donnée, publier des contenus illicites, copier ou extraire massivement les données de KASH sans autorisation, utiliser des robots ou outils de scraping non autorisés, perturber l’application, distribuer des logiciels malveillants ou utiliser KASH d’une manière contraire à la loi ou aux droits d’un tiers.</p>
              <p>KASH peut suspendre ou fermer un compte en cas de comportement contraire aux présentes CGU.</p>
            </>
          ),
        },
        {
          title: "23. Contenus transmis par les utilisateurs",
          body: (
            <>
              <p>L’utilisateur reste responsable des contenus qu’il transmet ou publie.</p>
              <p>Il garantit qu’il dispose des droits et autorisations nécessaires pour transmettre ces contenus.</p>
              <p>En transmettant un contenu destiné à être publié ou utilisé dans le fonctionnement de KASH, l’utilisateur accorde à KASH une autorisation non exclusive d’utiliser, héberger, reproduire, adapter techniquement et afficher ce contenu dans la mesure nécessaire au fonctionnement, à la promotion et à l’administration du service.</p>
              <p>Cette autorisation cesse lorsque le contenu est supprimé, sauf lorsqu’une conservation est nécessaire en vertu de la loi, d’une preuve ou d’un traitement anonymisé conformément à la Politique de confidentialité.</p>
            </>
          ),
        },
        {
          title: "24. Propriété intellectuelle de KASH",
          body: (
            <>
              <p>Le nom KASH, son identité visuelle, l’application, ses interfaces, textes, organisation, logiciels, bases structurées, fonctionnalités et autres éléments développés par K.A.S.H SARLU sont protégés par les droits applicables.</p>
              <p>Toute reproduction, extraction, réutilisation, copie, revente ou exploitation non autorisée est interdite.</p>
              <p>Aucune disposition des présentes CGU ne transfère à l’utilisateur un droit de propriété sur KASH ou ses éléments protégés.</p>
            </>
          ),
        },
        {
          title: "25. Données et confidentialité",
          body: (
            <>
              <p>Le traitement des données personnelles est régi par la <Link href="/privacy">Politique de confidentialité KASH</Link>, accessible dans l’application et sur kashapp.tech.</p>
              <p>Cette Politique fait partie du cadre contractuel applicable à l’utilisation du service.</p>
            </>
          ),
        },
        {
          title: "26. Services tiers",
          body: (
            <>
              <p>KASH utilise ou peut permettre l’accès à différents services tiers nécessaires au fonctionnement de certaines fonctionnalités, notamment pour les paiements, notifications, emails, SMS, cartographie, messagerie ou traitement automatisé de documents.</p>
              <p>L’utilisation d’un service tiers peut également être soumise aux conditions propres de son fournisseur.</p>
              <p>KASH ne contrôle pas les services externes indépendants et ne peut être tenue responsable de leurs interruptions ou modifications qui ne lui sont pas imputables.</p>
            </>
          ),
        },
        {
          title: "27. Disponibilité du service",
          body: (
            <>
              <p>KASH s’efforce d’assurer une disponibilité raisonnable de l’application.</p>
              <p>Des interruptions peuvent toutefois survenir notamment pour maintenance, mise à jour, problème réseau, panne, sécurité, incident chez un prestataire ou événement de force majeure.</p>
              <p>KASH peut modifier temporairement ou définitivement certaines fonctionnalités pour des raisons techniques, commerciales, réglementaires ou de sécurité.</p>
            </>
          ),
        },
        {
          title: "28. Suspension et suppression d’un compte",
          body: (
            <>
              <p>KASH peut suspendre, limiter ou supprimer un compte notamment en cas de fraude, violation des CGU, utilisation abusive, atteinte à la sécurité, manipulation de données, contenu interdit ou comportement susceptible de nuire à KASH ou à d’autres utilisateurs.</p>
              <p>Lorsque cela est raisonnablement possible, KASH peut demander à l’utilisateur de corriger la situation avant une suspension définitive.</p>
              <p>En cas d’urgence, de fraude, de sécurité ou d’obligation légale, une suspension immédiate peut être appliquée.</p>
            </>
          ),
        },
        {
          title: "29. Suppression volontaire du compte",
          body: (
            <>
              <p>L’utilisateur peut supprimer son compte depuis l’application via : Profil → Modifier mon profil → Supprimer mon compte.</p>
              <p>Une possibilité de demande de suppression est également mise à disposition sur <Link href="/data-deletion">kashapp.tech</Link>.</p>
              <p>Les conséquences de la suppression sur les données personnelles et commerciales sont détaillées dans la Politique de confidentialité.</p>
              <p>Pour un propriétaire de commerce, la suppression du compte peut entraîner la perte de l’accès à la gestion de ses commerces et éventuellement leur désactivation lorsque KASH ne dispose plus d’un gestionnaire autorisé.</p>
            </>
          ),
        },
        {
          title: "30. Responsabilité concernant les transactions",
          body: (
            <>
              <p>KASH n’est pas responsable de l’exécution d’une transaction conclue directement entre un utilisateur et un commerce.</p>
              <p>Sont notamment placés sous la responsabilité des parties concernées : qualité du produit, conformité du service, paiement au commerce, livraison, garantie, remboursement d’une commande, conditions de vente, service après-vente et tout autre engagement pris directement entre elles.</p>
              <p>Cette limitation ne prive pas l’utilisateur des droits impératifs dont il pourrait bénéficier en vertu de la loi.</p>
            </>
          ),
        },
        {
          title: "31. Limitation de responsabilité",
          body: (
            <>
              <p>KASH s’efforce de fournir un service fiable mais ne garantit pas l’absence totale d’erreurs, de bugs ou d’interruptions.</p>
              <p>Dans les limites autorisées par la loi, KASH ne pourra être tenue responsable d’un dommage résultant exclusivement d’informations incorrectes fournies par un commerce ou un utilisateur, d’une transaction conclue hors de KASH, d’une indisponibilité temporaire indépendante de sa volonté, d’une mauvaise utilisation de l’application ou d’un service tiers hors de son contrôle.</p>
              <p>Aucune disposition des présentes CGU n’a pour objet d’exclure une responsabilité qui ne pourrait légalement être exclue.</p>
            </>
          ),
        },
        {
          title: "32. Modification des CGU",
          body: (
            <>
              <p>KASH peut modifier les présentes CGU afin de les adapter à l’évolution du service, de la réglementation ou de ses activités.</p>
              <p>La date de dernière mise à jour est indiquée en tête du document.</p>
              <p>Lorsqu’une modification substantielle le justifie, KASH pourra informer les utilisateurs par l’application, notification, email ou autre moyen approprié.</p>
              <p>Si la réglementation exige une nouvelle acceptation, KASH pourra demander à l’utilisateur d’accepter la nouvelle version avant de continuer à utiliser certaines fonctionnalités.</p>
            </>
          ),
        },
        {
          title: "33. Droit applicable et règlement des différends",
          body: (
            <>
              <p>Les présentes CGU sont soumises au droit applicable en République Démocratique du Congo.</p>
              <p>En cas de difficulté, l’utilisateur et KASH sont invités à rechercher en priorité une solution amiable.</p>
              <p>Pour contacter KASH : <a href="mailto:contact@kashapp.tech">contact@kashapp.tech</a></p>
              <p>À défaut de solution amiable, tout litige sera traité par les juridictions compétentes conformément aux règles de droit applicables, sous réserve de toute règle impérative protégeant l’utilisateur.</p>
            </>
          ),
        },
        {
          title: "34. Contact",
          body: (
            <>
              <p>Pour toute question concernant KASH ou les présentes Conditions :</p>
              <p>
                <strong>KONGO ANALYTICS &amp; SHOPPER HABITS SARLU — K.A.S.H SARLU</strong>
                <br />
                20 A, Nouvelles Galeries Présidentielles, Commune de la Gombe, Kinshasa, République Démocratique du Congo
                <br />
                Email : <a href="mailto:contact@kashapp.tech">contact@kashapp.tech</a>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
