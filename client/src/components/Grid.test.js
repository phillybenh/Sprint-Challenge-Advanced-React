import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Grid from "./Grid";
// import Card from "./Card";
import '@testing-library/jest-dom/extend-expect'




test('Grid renders without crashing',  () => {


    const data = [{ "name": "Alex Morgan", "country": "United States", "searches": 100, "id": 0 }, { "name": "Megan Rapinoe", "country": "United States", "searches": 99, "id": 1 }, { "name": "Marta", "country": "Brazil", "searches": 18, "id": 2 }, { "name": "Rose Lavelle", "country": "United States", "searches": 11, "id": 3 }];

    // //Arrange
    const { getByTestId } = render(<Grid playerData={data}/>);


    const grid = getByTestId(/grid/);

     expect(grid).toBeVisible();

});

test('Button is visible and changes background', async () => {


    const data = [{ "name": "Alex Morgan", "country": "United States", "searches": 100, "id": 0 }, { "name": "Megan Rapinoe", "country": "United States", "searches": 99, "id": 1 }, { "name": "Marta", "country": "Brazil", "searches": 18, "id": 2 }, { "name": "Rose Lavelle", "country": "United States", "searches": 11, "id": 3 }];


    const { getByTestId } = render(<Grid playerData={data} />);


    const button = getByTestId(/darkBTN/);

    fireEvent.click(button); //let's see if the button clicks


    expect(button).toBeVisible();

    //checking for dark mode function

    // const darkMode = await findByTestId("pre")

    // expect(darkmode).toBeInTheDocument();
    await expect(document.querySelector("body")).toHaveClass("dark-mode");




});


// test("Testing if user can submit information and submit renders info", async () => {
//     //Arrange
//     const { getByTestId, findByTestId } = render(<ContactForm />);

//     const firstNameInput = getByTestId(/fNameInput/);

//     const lastNameInput = getByTestId(/lNameInput/);

//     const emailInput = getByTestId(/emailInput/);

//     const messageInput = getByTestId(/textArea/);

//     //Act
//     fireEvent.change(firstNameInput, { target: { value: 'Bob' } });
//     fireEvent.change(lastNameInput, { target: { value: 'Heyburn' } });
//     fireEvent.change(emailInput, { target: { value: 'bob.heyburn@navy.mil' } });
//     fireEvent.change(messageInput, { target: { value: 'Stuff adn thingssss' } });

//     //Assert
//     expect(firstNameInput.value).toBe('Bob');
//     expect(lastNameInput.value).toBe('Heyburn');
//     expect(emailInput.value).toBe('bob.heyburn@navy.mil');
//     expect(messageInput.value).toBe('Stuff adn thingssss');
//     const submitButton = getByTestId("submitBtn");

//     fireEvent.click(submitButton);

//     // document.querySelector("body").classList.add("dark-mode")

//     // const formData = await findByTestId("pre")

//     await expect(document.querySelector("body")).toHaveClass("dark-mode");

// })