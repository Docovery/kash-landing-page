import { useEffect } from "react";

const CLARITY_PROJECT_ID = "xmzoqmct76";

// Microsoft Clarity, en production et sur kashapp.tech uniquement (pas en
// `npm run preview` local). Import dynamique : le script reste hors du bundle
// principal et n'est jamais évalué au pré-rendu.
export default function ClarityInit() {
  useEffect(() => {
    if (!import.meta.env.PROD || !/(^|\.)kashapp\.tech$/.test(window.location.hostname)) return;
    import("@microsoft/clarity").then(({ default: Clarity }) => Clarity.init(CLARITY_PROJECT_ID));
  }, []);

  return null;
}
