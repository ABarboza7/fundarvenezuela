import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Quiénes Somos',
      href: getPermalink('/#quienes-somos'),
    },
    {
      text: 'Galería',
      href: getPermalink('/#galeria'),
    },
    {
      text: 'Cursos',
      href: getPermalink('/#cursos'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Donar',
      href: getPermalink('/#donar'),
    },
  ],
  actions: [{ text: 'Donar', href: getPermalink('/#donar'), variant: 'primary' as const }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'Correo', icon: 'tabler:mail', href: 'mailto:correo@fundarvenezuela.org' },
  ],
  footNote: `
    Fundar Venezuela · Todos los derechos reservados.
  `,
};
