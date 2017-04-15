/**
 * Created by HuangZufu on 4/14/2017.
 */

//init user settings
;define(function () {
    //all user setting get from localStorage ,and give default value if not exist
    var language = localStorage.getItem('lang') || 'en',
        currency = localStorage.getItem('cuurency') || '$',
        encryptEmail = localStorage.getItem('email') || '';

    return {
        language: language,
        currency: currency,
        encryptEmail:encryptEmail
    }
});