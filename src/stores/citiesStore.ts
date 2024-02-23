import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCitiesStore = defineStore('cities', () => {
  const cities = ref([
    'Kyiv',
    'Kharkiv',
    'Odesa',
    'Dnipro',
    'Lviv',
    'Zaporizhia',
    'Kryvyi Rih',
    'Mykolaiv',
    'Mariupol',
    'Luhansk',
    'Vinnytsia',
    'Poltava',
    'Chernihiv',
    'Cherkasy',
    'Kherson',
    'Khmelnytskyi',
    'Rivne',
    'Ivano-Frankivsk',
    'Ternopil',
    'Zhytomyr',
    'Sumy',
    'Kropyvnytskyi',
    'Kremenchuk',
    'Bila Tserkva',
    'Melitopol',
    'Uzhhorod',
    'Enerhodar',
    'Sloviansk',
    'Pavlohrad',
    'Berdiansk',
    'Kamianske',
    'Mukachevo',
    'Simferopol',
    'Sevastopol',
    'Yalta',
    'Kerch',
    'Feodosia',
    'Berdyansk',
    'Alchevsk',
    'Kramatorsk',
    'Nizhyn',
    'Lysychansk',
    'Drohobych'
  ]);

  return { cities };
});
