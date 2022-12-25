export type PageButton = {
  label: string,
  href: string,
  blank: boolean,
}

export const buttons: PageButton[] = [
  { label: "Home", href: "/", blank: false },
  { label: "Projects", href: "/projects", blank: false },
  { label: "Work", href: "/work", blank: false },
  { label: "Education", href: "/education", blank: false },
  { label: "Contact", href: "mailto:andrej@kenda.one", blank: false },
  { label: "Github", href: "https://github.com/kndndrj", blank: true },
  { label: "kenda.one", href: "https://kenda.one", blank: true },
];
