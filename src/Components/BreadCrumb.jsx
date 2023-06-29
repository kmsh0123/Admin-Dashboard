import { Anchor, Breadcrumbs } from '@mantine/core';
import React from 'react'

const items = [
  { title: 'Template', href: '/' },
  { title: 'Tables', href: '/table' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const BreadCrumb = () => {
  return (
    <Breadcrumbs className='pt-3'>{items}</Breadcrumbs>
  )
}

export default BreadCrumb