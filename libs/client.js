import {createClient} from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: 'sigulogstudy',
    apiKey: process.env.API_KEY,
});