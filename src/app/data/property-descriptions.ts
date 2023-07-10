import { DataProperty } from './interfaces';

export const Properties: DataProperty[] = [
  {
    name: 'Period',
    unit: '',
    description: ['A period is a row of elements in the periodic table. There are currently 7 confirmed periods. All elements in a period have the same number of electron shells in their atoms.']
  },
  {
    name: 'Group',
    unit: '',
    description: ['A group is a column of elements in the periodic table. There are 18 numbered groups. The elements in a group have similar physical or chemical properties.']
  },
  {
    name: 'Year of discovery',
    unit: '',
    description: ['The year in which either the first known sample of the element was created or the existence of the element was confirmed experimentally.']
  },
  {
    name: 'Standard atomic weight',
    unit: `Da`,
    description: [
      'Isotopes are atoms of the same element with different numbers of neutrons in the nucleus, thus having different masses.',
      'The standard atomic weight is the weighted average of the masses of all isotopes of the element, weighted by each isotope\'s abundance on Earth.',
      'The unit of 1 dalton (Da) is defined as 1⁄12 of the mass of a free carbon-12 atom at rest in its ground state.']
  },
  {
    name: 'Density',
    unit: `kg/m<sup>3</sup>`,
    description: [
      'The mass of the pure element per unit volume.',
      'For some elements this value is only known from theoretical calculations.'
    ]
  },
  {
    name: 'Melting temperature',
    unit: `&deg;C`,
    description: [
      'The temperature at which the element changes its state from solid to liquid at standard pressure.',
      'For some elements this value is only known from theoretical calculations.'
    ]
  },
  {
    name: 'Boiling temperature',
    unit: `&deg;C`,
    description: [
      'The temperature at which the element changes its state from liquid to gas at standard pressure.',
      'For some elements this value is only known from theoretical calculations.'
    ]
  },
]
