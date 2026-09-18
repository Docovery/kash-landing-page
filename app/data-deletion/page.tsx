import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Suppression de compte et de données",
  description:
    "Comment demander la suppression de votre compte Kash et de vos données personnelles.",
  alternates: {
    canonical: "/data-deletion",
  },
  openGraph: {
    title: "Suppression de compte et de données | Kash",
    description:
      "La procédure pour demander la suppression de votre compte Kash et de vos données.",
  },
};

export default function DataDeletionPage() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Suppression de compte et de données"
      intro="Vous pouvez demander la suppression de votre compte Kash et des données associées à tout moment, que vous ayez créé votre compte par e-mail ou par numéro de téléphone."
      lastUpdated="18 septembre 2026"
      sections={[
        {
          title: "1. Comment demander la suppression",
          body: (
            <>
              <p>
                Depuis l&apos;application Kash : <strong>Profil → Modifier mon profil → Supprimer mon compte</strong>.
              </p>
              <p>
                Si vous n&apos;avez plus accès à l&apos;application, envoyez une demande de suppression à <a href="mailto:contact@kashapp.tech?subject=Suppression%20de%20compte">contact@kashapp.tech</a> depuis l&apos;adresse e-mail associée à votre compte (ou en précisant le numéro de téléphone utilisé pour vous connecter), avec pour objet « Suppression de compte ». Vous pouvez aussi passer par notre <a href="/contact">page de contact</a>.
              </p>
              <p>
                Merci d&apos;indiquer dans votre message le nom, l&apos;e-mail ou le numéro de téléphone associé au compte, afin que nous puissions le retrouver et l&apos;identifier avec certitude.
              </p>
            </>
          ),
        },
        {
          title: "2. Ce qui est supprimé",
          body: (
            <>
              <ul>
                <li>Vos informations de compte : e-mail, numéro de téléphone, mot de passe, nom d&apos;utilisateur, photo de profil, ville et commune ;</li>
                <li>Vos favoris, alertes de prix, sessions de connexion et jeton de notification ;</li>
                <li>Vos avis, notes, demandes de devis et demandes de référencement liés à votre identité.</li>
              </ul>
              <p>
                Pour un propriétaire de commerce, la suppression du compte peut entraîner la perte de l’accès à la gestion de ses commerces et éventuellement leur désactivation lorsque KASH ne dispose plus d’un gestionnaire autorisé.
              </p>
            </>
          ),
        },
        {
          title: "3. Ce qui peut être conservé",
          body: (
            <p>
              Les données extraites des tickets de caisse déjà soumis (prix, produits, commerce concerné) peuvent être conservées sous forme anonymisée, sans lien avec votre identité, car elles alimentent notre base de prix collective. Certaines informations peuvent également être conservées lorsque cela est nécessaire pour une obligation légale, la sécurité, la prévention de la fraude ou l’établissement d’une preuve, pour une durée strictement limitée à cette finalité.
            </p>
          ),
        },
        {
          title: "4. Délai de traitement",
          body: (
            <p>
              Votre demande est traitée sous 30 jours maximum. Vous recevrez une confirmation par e-mail une fois la suppression effectuée.
            </p>
          ),
        },
        {
          title: "5. Différence avec la désinstallation de l'application",
          body: (
            <p>
              Désinstaller l&apos;application Kash de votre téléphone supprime uniquement les données stockées localement sur l&apos;appareil (préférences, cache). Votre compte et vos données restent sur nos serveurs tant que vous n&apos;avez pas explicitement demandé leur suppression selon la procédure ci-dessus.
            </p>
          ),
        },
        {
          title: "6. En savoir plus",
          body: (
            <p>
              Pour le détail des données que nous collectons et de leur utilisation, consultez notre <a href="/privacy">politique de confidentialité</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
