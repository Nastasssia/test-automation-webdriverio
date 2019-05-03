import assert from 'assert';

describe('Login', function () {


    it('login', function () {
        browser.url('/');
        $('#email').setValue('nastassia.luksha@gmail.com');
        $('#pass').setValue('122507395');
        $('#login').click();
        let newBug =  $('#new_bug');
        newBug.waitForDisplayed(2000);
        newBug.isDisplayed();
        assert.equal(newBug.isDisplayed(), true);
    })





});

