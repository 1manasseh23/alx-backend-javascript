import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) { // Use method shorthand
      return `$${income}`;
    },
    getIncomeInEuros(income) { // Use method shorthand
      return `${income} euros`;
    },
  };

  return fullBudget;
}

