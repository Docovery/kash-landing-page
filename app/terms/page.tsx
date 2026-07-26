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

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Conditions générales d'utilisation"
      intro="Les présentes conditions régissent l'utilisation du site kashapp.tech et de l'application mobile Kash. En créant un compte ou en utilisant le service, vous acceptez ces conditions."
      lastUpdated="26 juillet 2026"
      sections={[
        {
          title: "1. Objet",
          body: (
            <p>
              Kash est un catalogue digital qui référence les commerces locaux en République Démocratique du Congo. Le service permet de rechercher des produits et commerces, de comparer les prix, de sauvegarder des favoris, de demander des devis aux commerçants et de contribuer à la base de prix en soumettant des tickets de caisse.
            </p>
          ),
        },
        {
          title: "2. Compte utilisateur",
          body: (
            <>
              <p>
                Pour accéder à certaines fonctionnalités, vous devez créer un compte avec des informations exactes et à jour. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité effectuée depuis votre compte.
              </p>
              <p>
                Le service est destiné aux personnes âgées de 16 ans ou plus.
              </p>
            </>
          ),
        },
        {
          title: "3. Contenu soumis par l'utilisateur",
          body: (
            <p>
              Lorsque vous soumettez un ticket de caisse, un avis, une note ou toute autre contribution, vous garantissez qu&apos;il s&apos;agit d&apos;un contenu exact et licite, et vous accordez à Kash le droit de l&apos;utiliser pour exploiter et améliorer le service (par exemple, enrichir la base de prix). Kash peut modérer, refuser ou retirer tout contenu non conforme à ces conditions.
            </p>
          ),
        },
        {
          title: "4. Commerces référencés",
          body: (
            <p>
              Les informations sur les commerces (prix, disponibilité, horaires, coordonnées) proviennent des commerçants eux-mêmes ou de contributions d&apos;utilisateurs, et sont fournies à titre indicatif. Kash s&apos;efforce d&apos;assurer leur fiabilité mais ne garantit pas leur exactitude à tout instant ; nous vous invitons à vérifier les informations importantes directement auprès du commerçant.
            </p>
          ),
        },
        {
          title: "5. Abonnements Premium des commerçants",
          body: (
            <p>
              Les commerçants peuvent souscrire à une offre Premium payante pour bénéficier de fonctionnalités additionnelles. Le paiement, la durée et le renouvellement sont précisés au moment de la souscription. Sauf disposition légale contraire, les sommes versées ne sont pas remboursables. Un abonnement peut être résilié à tout moment ; il reste actif jusqu&apos;à la fin de la période déjà payée.
            </p>
          ),
        },
        {
          title: "6. Utilisation autorisée",
          body: (
            <>
              <p>En utilisant Kash, vous vous engagez à ne pas :</p>
              <ul>
                <li>Fournir des informations fausses ou trompeuses (compte, avis, tickets, fiche commerce) ;</li>
                <li>Tenter de contourner les mesures de sécurité ou d&apos;accéder à des données qui ne vous appartiennent pas ;</li>
                <li>Utiliser le service à des fins illicites, frauduleuses ou portant atteinte aux droits de tiers ;</li>
                <li>Perturber le fonctionnement du service (spam, surcharge automatisée, ingénierie inverse).</li>
              </ul>
            </>
          ),
        },
        {
          title: "7. Propriété intellectuelle",
          body: (
            <p>
              La marque Kash, son logo et les contenus du site et de l&apos;application (hors contenu soumis par les utilisateurs) sont la propriété de Kash et protégés par le droit de la propriété intellectuelle. Vous conservez la propriété du contenu que vous soumettez, sous réserve de la licence d&apos;utilisation décrite à l&apos;article 3.
            </p>
          ),
        },
        {
          title: "8. Limitation de responsabilité",
          body: (
            <p>
              Kash agit comme intermédiaire d&apos;information entre clients et commerçants. Dans les limites permises par la loi, Kash ne saurait être tenu responsable des transactions, litiges ou dommages résultant de la relation entre un utilisateur et un commerçant référencé, ni de l&apos;indisponibilité temporaire du service.
            </p>
          ),
        },
        {
          title: "9. Suspension et résiliation",
          body: (
            <p>
              Nous pouvons suspendre ou clôturer un compte en cas de violation de ces conditions. Vous pouvez supprimer votre compte à tout moment ; voir notre page <Link href="/data-deletion">Suppression de compte et de données</Link>.
            </p>
          ),
        },
        {
          title: "10. Droit applicable",
          body: (
            <p>
              Les présentes conditions sont régies par le droit de la République Démocratique du Congo. Tout litige sera soumis, à défaut de résolution amiable, aux juridictions compétentes.
            </p>
          ),
        },
        {
          title: "11. Modification des conditions",
          body: (
            <p>
              Nous pouvons modifier ces conditions pour refléter l&apos;évolution du service ou de la réglementation. La date de dernière mise à jour figure en haut de cette page.
            </p>
          ),
        },
        {
          title: "12. Nous contacter",
          body: (
            <p>
              Pour toute question relative à ces conditions : <a href="mailto:kash.observatoire@gmail.com">kash.observatoire@gmail.com</a> — +243 892 312 042 — Kinshasa, RD Congo.
            </p>
          ),
        },
      ]}
    />
  );
}
