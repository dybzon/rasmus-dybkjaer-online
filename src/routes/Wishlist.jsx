import * as React from 'react';
import { FoldableContainer } from '../components';
import { Wish } from '../components';

// Define my wishes h00ray!
const wishes = [
  { name: 'Bits-sæt', category: 'Værktøj', price: 70, salesLink: 'https://www.bauhaus.dk/makita-bitsaet-med-31-dele.html' },
  { name: 'Kapgeringsav', category: 'Værktøj', price: 1400, salesLink: undefined },
  { name: 'Computerskærm - 35" curved wide-screen. Fås fra forskellige producenter. Ikke til spilbrug, så kravene til frekvens er ikke høje.', category: 'Teknik', price: 7000, salesLink: undefined },
  { name: 'Skærmholder til skrivebord (til ovennævnte skærm)', category: 'Teknik', price: 500, salesLink: undefined },
  { name: 'Håndstøvsuger', category: 'Til konen', price: 1000, salesLink: undefined},
  { name: 'Tørretumbler', category: 'Til konen', price: 5000, salesLink: undefined},
  { name: 'Sonos Play:1-højtalere (hvid)', category: 'Til hjemmet', price: 1299, salesLink: 'https://www.hifiklubben.dk/streaming/sonos/sonos-play1-tradlos-hojtaler/'},
  { name: 'Vægbeslag til ophæng af Sonos Play:1-højtalere (hvid)', category: 'Til hjemmet', price: 299, salesLink: 'https://www.hifiklubben.dk/tilbehor/sonos-tilbehor/flexson-wall-mount-for-sonos-one-vagbeslag-til-sonos/'},
  { name: 'Skrivebord til hjemmekontor', category: 'Til hjemmet', price: 8000, salesLink: undefined},
  { name: 'Løbevogn til baby. Må gerne være brugt.', category: 'Sport', price: 1200, salesLink: 'https://www.dba.dk/soeg/?soeg=l%C3%B8bevogn'},  
]

export const Wishlist = props => 
{
  const categories = [...new Set(wishes.map(wish => wish.category))];
  
  // We'll render each category as a foldable container with a bunch of wishes inside
  return (
    <>
    {categories.map(category => (
      <FoldableContainer header={category} initialOpen key={category}>
        <ul>
        {wishes.filter(wish => wish.category === category).map(wish => <Wish {...wish} key={wish.name}/>)}
        </ul>
      </FoldableContainer>
    ))}
    </>
  );
};

