import * as React from 'react';
import { FoldableContainer } from '../components';
import { Wish } from '../components';

// Define my wishes h00ray!
const wishes = [
  { name: 'Bits-sæt', category: 'Værktøj', price: 70, salesLink: 'https://www.bauhaus.dk/makita-bitsaet-med-31-dele.html' },
  { name: 'Kapgeringsav', category: 'Værktøj', price: 1400, salesLink: 'http://127.0.0.1' },
  { name: 'Computerskærm (den dér vilde 35" wide-screen)', category: 'Teknik', price: 7000, salesLink: 'http://127.0.0.1'},
  { name: 'Skærmholder til skrivebord', category: 'Teknik', price: 1, salesLink: 'http://127.0.0.1'},
  { name: 'Håndstøvsuger', category: 'Til konen', price: 1, salesLink: 'http://127.0.0.1'},
  { name: 'Tørretumbler', category: 'Til konen', price: 1, salesLink: 'http://127.0.0.1'},
  { name: 'Sonos Play:1-højtalere', category: 'Til hjemmet', price: 1, salesLink: 'http://127.0.0.1'},
  { name: 'Vægbeslag til ophæng af Sonos Play:1-højtalere', category: 'Til hjemmet', price: 1, salesLink: 'http://127.0.0.1'},
  { name: 'Skrivebord til hjemmekontor', category: 'Til hjemmet', price: 1, salesLink: 'http://127.0.0.1'},
  { name: 'Løbevogn som man kan have en baby i', category: 'Sport', price: 1500, salesLink: 'http://127.0.0.1'},  
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

