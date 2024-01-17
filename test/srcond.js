const {
  Builder,
  Browser,
  By,
  until,
  assert,
} = require("selenium-webdriver");
describe("timeouts", function () {
  this.timeout(0);
  let driver;
  this.beforeEach(async function(){
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  })
  it("implicit wait", async function () {
    await driver.get("https://www.amazon.in");
    const ele = await driver.findElement(By.xpath("//a[text()='Mobiles'] "));
    assert.ok(ele.isDisplayed());
  });

  it.only("explicit wait", async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://www.amazon.in");
    await driver.wait(until.elementLocated(By.xpath("//a[text ()='Sell'] ")), 10000); 
  });
  this.afterEach(async function () {
    await driver.quit();
  });
});
