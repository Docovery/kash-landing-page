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

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Politique de confidentialité"
      intro="Cette politique explique quelles données Kash collecte, pourquoi, et comment vous pouvez les contrôler, que ce soit sur le site kashapp.tech ou l'application mobile Kash."
      lastUpdated="26 juillet 2026"
      sections={[
        {
          title: "1. Qui sommes-nous",
          body: (
            <>
              <p>
                Kash référence les commerces locaux en République Démocratique du Congo et permet aux clients de trouver, comparer et suivre les produits et prix près de chez eux. Cette politique s&apos;applique au site <strong>kashapp.tech</strong> ainsi qu&apos;à l&apos;application mobile Kash (Android et iOS).
              </p>
              <p>
                Pour toute question, l&apos;équipe Kash est joignable à <a href="mailto:kash.observatoire@gmail.com">kash.observatoire@gmail.com</a>.
              </p>
            </>
          ),
        },
        {
          title: "2. Données que nous collectons",
          body: (
            <>
              <p>Selon votre utilisation de Kash, nous pouvons collecter :</p>
              <ul>
                <li><strong>Informations de compte</strong> : e-mail et/ou numéro de téléphone, mot de passe (stocké chiffré), nom d&apos;utilisateur, photo de profil, ville et commune.</li>
                <li><strong>Contenu que vous fournissez</strong> : favoris, avis et notes sur les commerces, alertes de prix, demandes de devis, demandes de référencement de commerce, photos de tickets de caisse ou factures soumises pour enrichir notre base de prix.</li>
                <li><strong>Localisation</strong> : la ville et la commune que vous renseignez dans votre profil, utilisées pour vous afficher les commerces à proximité. Si une future fonctionnalité nécessite votre position GPS, votre autorisation vous sera demandée au préalable.</li>
                <li><strong>Caméra et micro</strong> : utilisés uniquement lorsque vous scannez un document (ticket, facture, code) ou capturez un contenu média dans l&apos;application ; rien n&apos;est collecté en dehors de ces actions explicites.</li>
                <li><strong>Informations techniques</strong> : identifiant de session, jeton de notification push, type d&apos;appareil et version du système.</li>
                <li><strong>Paiement</strong> : si un commerçant souscrit à une offre Premium, le paiement est traité par notre prestataire de paiement partenaire ; Kash ne stocke pas les numéros de carte bancaire.</li>
                <li><strong>Navigation web</strong> : sur kashapp.tech, des statistiques d&apos;usage anonymisées via Microsoft Clarity (voir section Cookies).</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Comment nous utilisons vos données",
          body: (
            <ul>
              <li>Créer, sécuriser et authentifier votre compte ;</li>
              <li>Vous permettre de rechercher, comparer, sauvegarder et suivre des produits et commerces ;</li>
              <li>Enrichir notre base de prix à partir des tickets soumis, après modération — aucune donnée personnelle n&apos;est extraite des factures ;</li>
              <li>Vous envoyer des notifications utiles (alertes de prix, réponses à vos demandes) ;</li>
              <li>Gérer les abonnements Premium des commerçants ;</li>
              <li>Améliorer le service, corriger les bugs et prévenir la fraude ou les abus.</li>
            </ul>
          ),
        },
        {
          title: "4. Partage des données",
          body: (
            <p>
              Kash ne vend pas vos données personnelles. Nous les partageons uniquement avec des prestataires nécessaires au fonctionnement du service (hébergement, envoi de notifications push, traitement des paiements Premium), tenus par des obligations de confidentialité, ou si la loi l&apos;exige. Les commerçants ne voient que les avis publics laissés sur leur fiche, jamais vos données de compte.
            </p>
          ),
        },
        {
          title: "5. Conservation des données",
          body: (
            <p>
              Vos données sont conservées tant que votre compte est actif. En cas de suppression de compte, elles sont supprimées ou anonymisées sous 30 jours, sauf obligation légale de conservation plus longue (comptabilité, prévention de la fraude). Voir notre page <Link href="/data-deletion">Suppression de compte et de données</Link>.
            </p>
          ),
        },
        {
          title: "6. Sécurité",
          body: (
            <p>
              Les mots de passe sont chiffrés (bcrypt). Les sessions utilisent des jetons à durée de vie courte, renouvelés automatiquement, stockés dans un espace sécurisé sur votre appareil. Les échanges entre l&apos;application/le site et nos serveurs sont chiffrés (HTTPS/TLS).
            </p>
          ),
        },
        {
          title: "7. Cookies et outils de mesure d'audience",
          body: (
            <p>
              Le site kashapp.tech utilise Microsoft Clarity afin de comprendre comment il est utilisé (navigation, interactions) et d&apos;améliorer l&apos;expérience. Ces données sont agrégées et ne sont ni vendues ni utilisées à des fins publicitaires par Kash.
            </p>
          ),
        },
        {
          title: "8. Vos droits",
          body: (
            <p>
              Vous pouvez à tout moment demander l&apos;accès, la rectification ou la suppression de vos données en nous écrivant à <a href="mailto:kash.observatoire@gmail.com">kash.observatoire@gmail.com</a> ou via notre <Link href="/contact">page de contact</Link>. Voir le détail de la procédure sur notre page <Link href="/data-deletion">Suppression de compte</Link>.
            </p>
          ),
        },
        {
          title: "9. Confidentialité des mineurs",
          body: (
            <p>
              Kash ne s&apos;adresse pas aux enfants et ne collecte pas sciemment de données concernant des personnes de moins de 16 ans. Si vous pensez qu&apos;un mineur nous a communiqué des données, contactez-nous afin que nous puissions les supprimer.
            </p>
          ),
        },
        {
          title: "10. Modifications de cette politique",
          body: (
            <p>
              Nous pouvons mettre à jour cette politique pour refléter l&apos;évolution du service ou de la réglementation. La date de dernière mise à jour figure en haut de cette page ; en cas de changement important, nous vous en informerons via l&apos;application ou le site.
            </p>
          ),
        },
        {
          title: "11. Nous contacter",
          body: (
            <p>
              Pour toute question relative à la confidentialité : <a href="mailto:kash.observatoire@gmail.com">kash.observatoire@gmail.com</a> — +243 892 312 042 — Kinshasa, RD Congo.
            </p>
          ),
        },
      ]}
    />
  );
}
