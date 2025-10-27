declare module 'react-anchor-link-smooth-scroll' {
  import { ComponentType, AnchorHTMLAttributes } from 'react';

  export interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    offset?: number | string | (() => number);
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }

  const AnchorLink: ComponentType<AnchorLinkProps>;
  export default AnchorLink;
}

