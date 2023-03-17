describe('Sample', () => {
    it('Sample', async() => {
        await driver.pause(5000);

        await $('//*[@resource-id="com.androidsample.generalstore:id/spinnerCountry"]').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Austria"))').click();
       // await driver.pause(5000);
        await $('//*[@text="Enter name here"]').addValue('Urushi')
       // await driver.pause(5000)
       await $('//*[@text="Female"]').click()
       await $("//*[@resource-id='com.androidsample.generalstore:id/btnLetsShop']").click()
       await driver.pause(5000);
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("PG 3"))')
       //bounds: [540,1153][1002,1191]
       await $('//*[@bounds="[540,1153][1002,1191]"]').click() 
       //bounds : [540,1968][1002,2006]
       await $('//*[@bounds="[540,1968][1002,2006]"]').click() 
       await driver.pause(3000)
       //resource-id:   com.androidsample.generalstore:id/appbar_btn_cart
       await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click()    
       await driver.pause(3000)
       await $('//*[@resource-id="com.androidsample.generalstore:id/btnProceed"]').click()
       await driver.pause(3000)
});
});