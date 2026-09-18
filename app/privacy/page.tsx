import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Découvrez comment Kash collecte, utilise et protège vos données personnelles sur le site et l'application mobile.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Politique de confidentialité | Kash",
    description:
      "Comment Kash collecte, utilise et protège vos données personnelles.",
  },
};

const PROVIDERS: [string, string][] = [
  ["Hostinger", "Serveur, base de données et infrastructure principale"],
  ["Cloudinary", "Stockage d’images"],
  ["Google Gemini", "OCR et structuration de factures"],
  ["Wavescom", "SMS de vérification"],
  ["Google/Gmail", "Envoi d’emails"],
  ["Expo", "Acheminement des notifications push"],
  ["Firebase Cloud Messaging", "Notifications Android"],
  ["Apple", "Notifications iOS"],
  ["GeniusPay", "Paiements Premium"],
];

// Texte officiel : docs/Politique_Confidentialite_KASH_V2_0_17_09_2026.pdf.
// Recopié à l'identique — toute modification doit partir du document source et
// être reportée aussi dans kash-mobile (app/privacy.tsx).
export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Politique de confidentialité"
      intro="La présente Politique de confidentialité explique comment les données personnelles sont collectées, utilisées, transmises, conservées et protégées dans le cadre de l’utilisation de l’application et des services KASH. Elle s’applique à l’application mobile KASH, au site kashapp.tech et aux services numériques associés exploités par K.A.S.H SARLU."
      lastUpdated="17 septembre 2026"
      version="2.0"
      publisher={
        <>
          <p>République Démocratique du Congo</p>
          <p>
            Exploitant : <strong>KONGO ANALYTICS &amp; SHOPPER HABITS SARLU (K.A.S.H SARLU)</strong>
          </p>
          <p>20 A, Nouvelles Galeries Présidentielles, Commune de la Gombe, Kinshasa, RDC</p>
          <p>
            <a href="mailto:contact@kashapp.tech">contact@kashapp.tech</a> | <a href="https://kashapp.tech">https://kashapp.tech</a>
          </p>
        </>
      }
      sections={[
        {
          title: "1. Accès à KASH et création d’un compte",
          body: (
            <>
              <p>Dans la version actuelle de KASH, la création d’un compte est nécessaire pour utiliser l’application. Lors de l’inscription, KASH peut demander certaines informations nécessaires à la création, à la sécurisation et à la gestion du compte.</p>
              <p>L’utilisateur doit fournir des informations exactes et maintenir ses données à jour. Lors de la création du compte, il est invité à accepter les <Link href="/terms">Conditions d’utilisation</Link> et à reconnaître avoir pris connaissance de la présente Politique de confidentialité.</p>
            </>
          ),
        },
        {
          title: "2. Données pouvant être collectées",
          body: (
            <>
              <h3>Données liées au compte</h3>
              <ul>
                <li>nom ou nom d’affichage ;</li>
                <li>numéro de téléphone ;</li>
                <li>adresse email lorsqu’elle est renseignée ;</li>
                <li>ville ;</li>
                <li>commune ;</li>
                <li>informations nécessaires à l’authentification ;</li>
                <li>informations nécessaires à la sécurité et à la gestion du compte.</li>
              </ul>
              <h3>Données d’utilisation</h3>
              <ul>
                <li>recherches effectuées ;</li>
                <li>produits, services, commerces et catégories consultés ;</li>
                <li>clics vers WhatsApp, appels ou localisation/cartes ;</li>
                <li>offres ajoutées au panier ;</li>
                <li>demandes de proforma, consultations et réponses ;</li>
                <li>autres interactions utiles au fonctionnement et à l’amélioration du service.</li>
              </ul>
              <h3>Données publiées volontairement</h3>
              <ul>
                <li>avis, notes et commentaires ;</li>
                <li>informations communiquées dans une demande de référencement ;</li>
                <li>informations d’un commerce ou prestataire ;</li>
                <li>produits, services, promotions, photographies et logos.</li>
              </ul>
              <h3>Factures et tickets</h3>
              <ul>
                <li>image du ticket ou de la facture ;</li>
                <li>nom du commerce ;</li>
                <li>date ;</li>
                <li>produits ou services ;</li>
                <li>quantités ;</li>
                <li>prix ;</li>
                <li>montant total ;</li>
                <li>autres informations commerciales présentes sur le document.</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Finalités du traitement",
          body: (
            <>
              <p>Les informations collectées peuvent notamment être utilisées afin de :</p>
              <ul>
                <li>créer et gérer le compte ;</li>
                <li>authentifier l’utilisateur et sécuriser l’application ;</li>
                <li>fournir les fonctionnalités KASH ;</li>
                <li>afficher et rechercher les produits, services et commerces ;</li>
                <li>gérer le panier et les demandes de proforma ;</li>
                <li>permettre aux commerces de répondre aux utilisateurs ;</li>
                <li>gérer les avis, demandes de référencement et promotions ;</li>
                <li>permettre aux commerçants de gérer leurs offres ;</li>
                <li>envoyer des notifications ;</li>
                <li>traiter les factures et tickets ;</li>
                <li>administrer les services Premium ;</li>
                <li>fournir une assistance ;</li>
                <li>prévenir les fraudes et abus ;</li>
                <li>corriger des erreurs techniques et améliorer KASH ;</li>
                <li>produire des statistiques et analyses agrégées.</li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Analytics interne KASH",
          body: (
            <>
              <p>KASH utilise un système Analytics développé en interne. KASH n’utilise actuellement pas Google Analytics, Firebase Analytics ni un autre outil Analytics tiers pour ce suivi d’activité.</p>
              <p>Les événements Analytics peuvent notamment concerner les recherches, vues de produits, services ou commerces, clics WhatsApp, appels, localisation, demandes de proforma et autres interactions utiles au fonctionnement du service.</p>
              <p>Ces informations sont enregistrées dans l’infrastructure KASH afin d’analyser l’utilisation des fonctionnalités, d’identifier des problèmes, d’améliorer l’expérience et de produire des statistiques.</p>
            </>
          ),
        },
        {
          title: "5. Hébergement principal - Hostinger",
          body: (
            <p>L’infrastructure principale de KASH est hébergée auprès de Hostinger, sur un serveur situé en Allemagne, dans l’Union européenne. La base de données PostgreSQL et le système de cache Redis fonctionnent sur cette même infrastructure. Une partie des données personnelles des utilisateurs peut donc être hébergée en Allemagne.</p>
          ),
        },
        {
          title: "6. Stockage des images - Cloudinary",
          body: (
            <>
              <p>KASH utilise Cloudinary pour stocker certaines images nécessaires au fonctionnement du service, notamment des photos de profil, logos et photos de commerces, images de produits et services, ainsi que certaines images de tickets ou factures.</p>
              <p>Dans la configuration actuellement utilisée par KASH, les données hébergées auprès de Cloudinary sont stockées sur des infrastructures situées aux États-Unis.</p>
            </>
          ),
        },
        {
          title: "7. Factures, tickets et traitement OCR",
          body: (
            <>
              <p>KASH permet aux utilisateurs de scanner, photographier ou importer volontairement des tickets et factures. Ces documents peuvent être analysés automatiquement afin d’extraire notamment le nom du commerce, la date, les produits ou services, les quantités, les prix et le montant total.</p>
              <h3>Google Gemini</h3>
              <p>KASH utilise principalement Google Gemini afin d’effectuer la reconnaissance des informations contenues dans l’image et de structurer les données extraites. Selon la configuration technique utilisée par KASH, les images ou données nécessaires à cette analyse peuvent transiter par des infrastructures de Google situées aux États-Unis pendant le traitement.</p>
              <p>Selon les informations techniques communiquées à KASH, les données traitées via cette configuration ne sont pas destinées à être conservées de manière permanente par Gemini pour ce traitement. KASH n’utilise pas Gemini comme système de stockage permanent de ses factures.</p>
              <h3>Tesseract</h3>
              <p>En solution de secours, KASH peut utiliser Tesseract, un logiciel OCR open source. Tesseract est installé et exécuté directement sur le serveur Hostinger utilisé par KASH en Allemagne. Son utilisation n’entraîne donc pas l’envoi de l’image à un prestataire tiers supplémentaire. Tesseract extrait du texte brut et n’est pas un modèle de langage génératif.</p>
              <h3>Mistral AI</h3>
              <p>Mistral AI n’est pas utilisé dans l’environnement de production KASH. Il avait été utilisé uniquement dans le cadre de tests techniques antérieurs.</p>
            </>
          ),
        },
        {
          title: "8. Précautions concernant les factures",
          body: (
            <>
              <p>L’utilisateur est invité à éviter de transmettre des factures contenant des informations personnelles inutiles et, lorsque cela est possible, à masquer avant l’envoi les noms de personnes, coordonnées personnelles, informations bancaires, numéros de carte, identifiants personnels ou toute information non nécessaire à l’analyse commerciale du document.</p>
              <p>KASH peut permettre à son équipe de vérifier ou corriger les informations extraites automatiquement. Les données commerciales extraites peuvent être conservées après anonymisation ou dissociation de l’utilisateur afin d’améliorer la base commerciale de KASH.</p>
            </>
          ),
        },
        {
          title: "9. Vérification du numéro de téléphone - Wavescom",
          body: (
            <p>KASH peut utiliser Wavescom, prestataire situé en République Démocratique du Congo, afin d’envoyer certains SMS de vérification. Dans ce cadre, le numéro de téléphone de l’utilisateur peut être transmis à Wavescom uniquement dans la mesure nécessaire à l’envoi du message ou du code concerné.</p>
          ),
        },
        {
          title: "10. Emails - Google/Gmail",
          body: (
            <p>KASH utilise des services de messagerie Google/Gmail via SMTP pour l’envoi de certains emails, notamment des codes de vérification, communications de sécurité, notifications, informations liées au compte ou messages d’assistance. L’adresse email et les informations nécessaires à l’envoi du message peuvent être traitées par Google dans ce cadre.</p>
          ),
        },
        {
          title: "11. Notifications push - Expo, Firebase et Apple",
          body: (
            <>
              <p>KASH utilise Expo pour l’acheminement des notifications push. Expo relaie ensuite les notifications via Firebase Cloud Messaging sur Android et via le service de notifications Apple sur iOS.</p>
              <p>Des identifiants techniques, tels que des tokens de notification, ainsi que les informations nécessaires à l’envoi du message peuvent être traités par ces services. KASH n’utilise pas Firebase Analytics pour son système interne d’Analytics. L’utilisateur peut désactiver les notifications KASH depuis les paramètres de son téléphone.</p>
            </>
          ),
        },
        {
          title: "12. Paiements Premium - GeniusPay",
          body: (
            <>
              <p>Les paiements liés aux offres Premium KASH sont traités par GeniusPay, notamment pour Mobile Money et les paiements par carte bancaire. GeniusPay reçoit les informations nécessaires à l’exécution du paiement.</p>
              <p>KASH ne stocke pas le numéro complet de carte bancaire. KASH peut conserver uniquement certaines informations utiles au suivi de la transaction, notamment le montant, l’offre souscrite, le moyen de paiement, une référence de transaction, le statut et, lorsqu’ils sont communiqués à titre de référence, les quatre derniers chiffres de la carte.</p>
              <p>Les données sensibles de paiement sont traitées par GeniusPay selon ses propres obligations de sécurité et de confidentialité.</p>
            </>
          ),
        },
        {
          title: "13. Commerces et prestataires",
          body: (
            <>
              <p>Lorsqu’un utilisateur demande à référencer ou gérer un commerce, KASH peut traiter notamment le nom du commerce, sa catégorie, son adresse, sa ville et commune, ses numéros de téléphone et WhatsApp, les informations relatives au responsable, son logo, ses photos, ses horaires, ses zones de livraison, produits, services, prix, promotions et les informations nécessaires à la validation du référencement.</p>
              <p>Une partie de ces informations est destinée à être rendue publique dans KASH, notamment le nom, le logo, les coordonnées professionnelles, l’adresse, les horaires, les produits et services, les prix, les promotions et certaines modalités de livraison.</p>
            </>
          ),
        },
        {
          title: "14. Proformas",
          body: (
            <>
              <p>Lorsqu’un utilisateur adresse une demande de proforma à un commerce, KASH transmet au commerce les informations nécessaires pour traiter la demande. Cela peut comprendre notamment l’identité ou le nom d’affichage du demandeur, les produits ou services demandés, les quantités, les informations communiquées dans la demande, les coordonnées nécessaires à son traitement et le statut de la demande.</p>
              <p>Le commerce peut ensuite communiquer notamment la disponibilité, le prix proposé, une réponse ou une information complémentaire. Les informations liées aux demandes peuvent être conservées dans le compte du demandeur et dans l’espace du commerce.</p>
            </>
          ),
        },
        {
          title: "15. Avis et commentaires",
          body: (
            <>
              <p>Les avis et notes publiés sur KASH sont destinés à être visibles par les autres utilisateurs. Selon l’affichage de l’application, le nom ou nom d’affichage, la note, le commentaire et la date peuvent être publics.</p>
              <p>L’utilisateur ne doit pas publier de données personnelles sensibles ou d’informations privées concernant un tiers. KASH peut modérer ou supprimer les avis en cas notamment de fraude, abus, contenu illicite ou violation des Conditions d’utilisation.</p>
            </>
          ),
        },
        {
          title: "16. Prestataires pouvant recevoir des données",
          body: (
            <>
              <div className="overflow-x-auto rounded-xl border border-gray-100">
                <table>
                  <thead>
                    <tr>
                      <th>Prestataire</th>
                      <th>Utilisation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROVIDERS.map(([name, usage]) => (
                      <tr key={name}>
                        <td className="font-medium text-gray-900">{name}</td>
                        <td>{usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Tesseract n’est pas un prestataire externe : il est exécuté directement sur l’infrastructure Hostinger de KASH.</p>
            </>
          ),
        },
        {
          title: "17. Services externes ouverts depuis KASH",
          body: (
            <p>Certaines actions peuvent ouvrir une application ou un service tiers, par exemple WhatsApp, le téléphone, une application cartographique, un navigateur internet ou un moyen de paiement. Lorsque l’utilisateur poursuit son action dans un service externe, le traitement réalisé par ce service relève également des propres règles de confidentialité du fournisseur concerné.</p>
          ),
        },
        {
          title: "18. Vente et partage de données",
          body: (
            <>
              <p>KASH ne vend pas les données personnelles permettant d’identifier directement les utilisateurs à des annonceurs.</p>
              <p>KASH peut néanmoins produire ou exploiter des statistiques agrégées ou anonymisées portant par exemple sur les recherches, tendances, catégories, consultations, données commerciales ou comportements d’utilisation agrégés. Ces données peuvent être utilisées à des fins d’analyse, d’amélioration du service ou de collaboration professionnelle lorsqu’elles ne permettent pas raisonnablement d’identifier directement une personne.</p>
            </>
          ),
        },
        {
          title: "19. Transferts internationaux",
          body: (
            <>
              <p>Certaines données KASH peuvent être hébergées ou traitées hors de la République Démocratique du Congo. Cela concerne notamment l’Allemagne pour l’infrastructure principale Hostinger, les États-Unis pour Cloudinary et certains traitements réalisés par Google Gemini, ainsi que d’autres infrastructures techniques pouvant être utilisées par les prestataires de notifications, emails ou paiement.</p>
              <p>KASH veille à limiter les transmissions de données à ce qui est nécessaire au fonctionnement du service et s’efforce de mettre en œuvre les mesures et garanties nécessaires conformément à la réglementation applicable en matière de transferts internationaux de données.</p>
            </>
          ),
        },
        {
          title: "20. Conservation des données",
          body: (
            <>
              <p>KASH conserve les données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées. Les informations nécessaires à l’utilisation du compte peuvent être conservées pendant toute la durée d’existence du compte.</p>
              <p>Certaines données peuvent être conservées plus longtemps lorsque cela est nécessaire pour une obligation légale, une obligation comptable ou fiscale, la sécurité, la prévention de la fraude, le traitement d’un litige, la preuve d’une opération ou la défense des droits de KASH ou d’un tiers.</p>
              <p>Les données commerciales devenues anonymes ou dissociées de l’utilisateur peuvent être conservées pour des analyses statistiques ou pour améliorer le service.</p>
            </>
          ),
        },
        {
          title: "21. Suppression du compte et des données",
          body: (
            <>
              <p>L’utilisateur peut demander la suppression de son compte depuis l’application via : Profil &gt; Modifier mon profil &gt; Supprimer mon compte.</p>
              <p>KASH met également à disposition une ressource web sur <Link href="/data-deletion">kashapp.tech</Link> permettant de demander la suppression du compte et des données associées, notamment pour les utilisateurs qui n’ont plus accès à l’application.</p>
              <p>La suppression du compte entraîne la suppression ou l’anonymisation des données associées, sauf lorsqu’une conservation est nécessaire pour une obligation légale, la sécurité, la prévention de la fraude ou l’établissement d’une preuve.</p>
              <p>Lorsque des données ont été transmises à un prestataire dans le cadre du fonctionnement du service, KASH prend les mesures raisonnables nécessaires afin de gérer la suppression conformément aux règles applicables et aux possibilités techniques du prestataire.</p>
            </>
          ),
        },
        {
          title: "22. Sécurité",
          body: (
            <>
              <p>KASH met en place des mesures techniques et organisationnelles destinées à protéger les données contre notamment l’accès non autorisé, la perte, la modification, la divulgation ou l’utilisation abusive.</p>
              <p>Ces mesures peuvent notamment comprendre l’authentification, le contrôle des accès, la sécurisation des communications, les sauvegardes, la journalisation, la limitation des droits internes et la surveillance technique.</p>
              <p>Aucun système informatique ne pouvant garantir une sécurité absolue, l’utilisateur est également responsable de la protection de son mot de passe, de son téléphone et de ses moyens d’authentification.</p>
            </>
          ),
        },
        {
          title: "23. Droits des utilisateurs",
          body: (
            <>
              <p>Selon les conditions prévues par la réglementation applicable, l’utilisateur peut notamment demander :</p>
              <ul>
                <li>l’accès aux données personnelles le concernant ;</li>
                <li>la rectification d’informations incorrectes ;</li>
                <li>la suppression de ses données ;</li>
                <li>l’opposition à certains traitements lorsque ce droit s’applique ;</li>
                <li>la limitation de certains traitements ;</li>
                <li>le retrait de son consentement lorsqu’un traitement repose sur celui-ci.</li>
              </ul>
              <p>Certaines informations peuvent être modifiées directement dans l’application. Pour toute demande relative aux données personnelles : <a href="mailto:contact@kashapp.tech">contact@kashapp.tech</a>.</p>
              <p>KASH peut demander les éléments raisonnablement nécessaires pour vérifier l’identité de la personne à l’origine de la demande.</p>
            </>
          ),
        },
        {
          title: "24. Données relatives aux mineurs",
          body: (
            <>
              <p>KASH n’est pas spécialement conçue comme un service destiné aux enfants. Lorsque la réglementation impose des conditions particulières au traitement des données d’un mineur, KASH applique les règles correspondantes.</p>
              <p>Un parent ou représentant légal estimant que des données concernant un mineur ont été traitées de manière inappropriée peut écrire à <a href="mailto:contact@kashapp.tech">contact@kashapp.tech</a>.</p>
            </>
          ),
        },
        {
          title: "25. Modifications de la Politique",
          body: (
            <>
              <p>KASH peut mettre à jour la présente Politique afin de tenir compte notamment de nouvelles fonctionnalités, d’un changement de prestataire, d’une évolution technique ou d’une évolution de la réglementation.</p>
              <p>La date de dernière mise à jour figure au début du document. En cas de changement important, KASH pourra informer les utilisateurs par un moyen approprié.</p>
            </>
          ),
        },
        {
          title: "26. Droit applicable",
          body: (
            <>
              <p>KASH est exploitée depuis la République Démocratique du Congo. La présente Politique est soumise aux règles applicables en République Démocratique du Congo concernant notamment les services numériques, la confidentialité et la protection des données personnelles.</p>
              <p>K.A.S.H SARLU entend notamment respecter les dispositions applicables du Code du numérique de la République Démocratique du Congo et ses éventuels textes d’application.</p>
            </>
          ),
        },
        {
          title: "27. Contact",
          body: (
            <>
              <p>Pour toute question concernant la présente Politique, vos données, votre compte, l’exercice de vos droits ou la suppression de vos informations, vous pouvez contacter :</p>
              <p>
                <strong>KONGO ANALYTICS &amp; SHOPPER HABITS SARLU</strong>
                <br />
                K.A.S.H SARLU
                <br />
                20 A, Nouvelles Galeries Présidentielles
                <br />
                Commune de la Gombe
                <br />
                Kinshasa, République Démocratique du Congo
                <br />
                Email : <a href="mailto:contact@kashapp.tech">contact@kashapp.tech</a>
                <br />
                Site : <a href="https://kashapp.tech">https://kashapp.tech</a>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
