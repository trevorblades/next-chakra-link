import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import React from 'react';
import {Link as ChakraLink} from '@chakra-ui/react';

export interface LinkProps {
  href: string;
  as?: React.ElementType;
  nextLinkProps?: NextLinkProps;
}

export const Link: React.FC<LinkProps> = ({
  href,
  as: Component = ChakraLink,
  nextLinkProps,
  ...props
}: LinkProps) => (
  <NextLink href={href} passHref {...nextLinkProps}>
    <Component {...props} as="a" />
  </NextLink>
);
