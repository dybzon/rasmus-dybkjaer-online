import React from 'react';
import { Wish } from '../components';
import renderer from 'react-test-renderer';

test('Test snapshot of wish with price, without link', () => {
  const tree = renderer.create(
    <Wish name='Bits-sæt' category='Værktøj og teknik' price={70} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Test snapshot of wish with price, with link', () => {
  const tree = renderer.create(
    <Wish name='Grimme puder' category='Til hjemmet' price={500} salesLink='http://puder.dk' />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Test snapshot of wish without any price or link', () => {
  const tree = renderer.create(
    <Wish name='Sofabord' category='Til hjemmet' />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});