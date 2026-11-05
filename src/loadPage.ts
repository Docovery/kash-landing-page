import type { ComponentType } from "react";
import type { PageMeta } from "./site";

type PageModule = { default: ComponentType };

// Une page = un chunk JS chargé à la demande côté navigateur.
const lazyPages = import.meta.glob<PageModule>("./pages/*.tsx");

export function loadPage(meta: PageMeta): Promise<PageModule> {
  return lazyPages[`./pages/${meta.module}.tsx`]();
}
