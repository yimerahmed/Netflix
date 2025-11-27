import axios from 'axios';
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;


//  QUESTION   
//  Export default kaderegnew lelabota befeleginew variable name import madreg enchilalen   ??? 1 variable bicha new maletnew yeminoren always axios module wist 
                            // // In another file
                            // import axiosInstance from './axios'; // works
                            // // or
                            // import instance from './axios'; // also works