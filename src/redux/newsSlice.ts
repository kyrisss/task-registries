import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import img1 from '../assets/img/news1.png'
import img2 from '../assets/img/news2.png'
import img3 from '../assets/img/news3.png'
import img4 from '../assets/img/news4.png'
import img5 from '../assets/img/news5.png'
import img6 from '../assets/img/news6.png'

export interface News {
    img: string,
    title: string,
    date: string,
    description: string,
}

export interface NewsState {
    news: News[]
}

const initialState: NewsState = {
    news: [
        {
            img: img1,
            title: "Технические работы 30.05.2022",
            date: "30.05.2022",
            description: "В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...",
        },
        {
            img: img2,
            title: "Изменение справочника",
            date: "28.05.2022",
            description: "Обращаем внимание, что с 28.05.2022 внесены изменения в справочник 'Дей...",
        },
        {
            img: img3,
            title: "Технические работы 26.05.2022",
            date: "26.05.2022",
            description: "В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...",
        },
        {
            img: img4,
            title: "Лицензирование в Беларуси",
            date: "25.05.2022",
            description: "Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...",
        },
        {
            img: img5,
            title: "Тестирование системы новостей Ед...",
            date: "20.05.2022",
            description: "Тестирование системы новостей ЕРЛ.",
        },
        {
            img: img6,
            title: "Обновление версии реестра ПО",
            date: "18.05.2022",
            description: "В новой версии доступны новые функции, которые упрощают использование сервис...",
        },
    ]

}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        // setTotalCount: (state, action: PayloadAction<number>) => {
        //     state.totalCount = action.payload
        // }
        // // increment: (state) => {
        // //   state.value += 1
        // // },
        // // decrement: (state) => {
        // //   state.value -= 1
        // // },
        // // fetching: (state, action: PayloadAction<number>) => {
        // //   state.value += action.payload
        // // },
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = registrySlice.actions
export const {} = newsSlice.actions

export default newsSlice.reducer