import NextLink, {LinkProps} from 'next/link';
import React from 'react';

export interface CustomLinkProps {
  href: string;
  component: React.ElementType;
  linkProps?: LinkProps;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  component: Component = 'a',
  linkProps,
  ...props
}: CustomLinkProps) => (
  <NextLink href={href} passHref {...linkProps}>
    <Component {...props} />
  </NextLink>
);
