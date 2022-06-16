import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Document {
    category: string,
    name: string,
    date: string,
    num: string,
    size: string
}

export interface NewsState {
    docs: Document[]
}

const initialState: NewsState = {
    docs: [
        {
            category: "Общие документы",
            name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
            date: "20.07.2021",
            num: "1226",
            size: "469 Кб"
        },
        {
            category: "Общие документы",
            name: 'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных',
            date: "22.09.2020",
            num: "468",
            size: "10.81 Мб"
        },
        {
            category: "Общие документы",
            name: 'Административный регламент ПРИКАЗ от 21 февраля 2019 года N62',
            date: "21.02.2019",
            num: "62",
            size: "2.25 Мб"
        },
        {
            category: "Общие документы",
            name: 'Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
            date: "20.12.2017",
            num: "1594",
            size: "2.07 Мб"
        },
        {
            category: "Общие документы",
            name: 'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных',
            date: "31.12.2015",
            num: "622",
            size: "4.69 Мб"
        },
        
    ]

}

export const documentsSlice = createSlice({
    name: 'docs',
    initialState,
    reducers: {
    },
})

export const { } = documentsSlice.actions

export default documentsSlice.reducer