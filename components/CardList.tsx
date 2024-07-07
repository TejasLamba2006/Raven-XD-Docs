import type React from 'react';
import { Card } from 'nextra-theme-docs';

interface CardInfo {
  title: string;
  href: string;
}

interface CardListProps {
  cards: CardInfo[]; // Accept cards data directly via props
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
// biome-ignore lint/correctness/noChildrenProp: <explanation>
<Card title={card.name} href={card.href} children={''} icon={''} />
      ))}
    </>
  );
};

export default CardList;