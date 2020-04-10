import React from 'react';
import { render } from "@testing-library/react";
import Grid from "./Grid";
import Card from "./Card";
import '@testing-library/jest-dom/extend-expect'


test('Cardrenders without crashing', async  () => {
    

    const data = { "name": "Alex Morgan", "country": "United States", "searches": 100, "id": 0 };

    // //Arrange
    const { getByTestId, getByText } = render(<Card key={data.id} data={data} />);


    const card = getByTestId(/card/);
    const name = getByText(/Alex Morgan/i);


    expect(card).toBeVisible();
    expect(name).toBeVisible();
    
});

