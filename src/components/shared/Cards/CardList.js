import Card from './Card';
import { Grid } from '../Grid';
import { Container } from '../Container';

function CardList({ cards }) {
  const renderCards = (cards) => {
    if (!cards) {
      return 'Loading...';
    }
    return cards.map((card) => {
      return (
        <Card
          key={card.title}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      );
    });
  };
  return (
    <Container>
      <Grid>{renderCards(cards)}</Grid>
    </Container>
  );
}
export default CardList;
