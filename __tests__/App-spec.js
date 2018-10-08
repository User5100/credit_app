import {
    renderWithRouter
} from '../src/test-utils/utils'
import App from '../src/App'
import React from 'react'
import {
    cleanup,
    fireEvent,
    wait,
} from 'react-testing-library'
import * as helpers from '../src/helpers'
import mockCards from '../db.json'

jest.mock('../src/helpers', () => {
    return {
        getCards: jest.fn(() => {
            return Promise.resolve(mockCards.cards)
        })
    }
})

afterEach(cleanup)

test('<Home /> route display form fields', () => {
    const {
        getByText,
    } = renderWithRouter(<App /> , '/')
    const userForm = getByText(/User Form/)
    const annualIncome = getByText(/Annual Income/)
    const employmentStatus = getByText(/Employment Status/)
    

    expect(userForm).toBeTruthy()
    expect(annualIncome).toBeTruthy()
    expect(employmentStatus).toBeTruthy()
    
})

test('<Home /> Ollie Murphee', async () => {
    const {
        container,
        getByText,
    } = renderWithRouter(<App /> , '/results')
    
    const form = container.querySelector('form')
    const {
        title,
        firstName,
        lastName,
        dateOfBirth,
        annualIncome,
        employmentStatus,
        houseNumber,
        postCode,
    } = form.elements

    title.value = 'Mr'
    firstName.value = 'Ollie' 
    lastName.value = 'Murphee'
    dateOfBirth.value = '01/07/1970'
    annualIncome.value = '34000'
    employmentStatus.value = 'Full Time Employed'
    houseNumber.value = '700'
    postCode.value = 'BS14 9PR'

    const submit = getByText(/Submit/)
    const leftClick = {button: 0}
    fireEvent.click(submit, leftClick)

    await wait(() => getByText(/Anywhere Card/))

    const totalCredit = getByText(/Total credit/)
    const anywhere = getByText(/Anywhere Card/)
    const liquid = getByText(/Liquid Card/)

    expect(totalCredit).toBeTruthy()
    expect(anywhere).toBeTruthy()
    expect(liquid).toBeTruthy()
})