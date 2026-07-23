export interface CardData {
  icon: string;
  title: string;
  description: string;
}

export interface ConceptData {
  eyebrow: string;
  title: string;
  lead: string;
  cards: CardData[];
}
