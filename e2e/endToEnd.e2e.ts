describe("E2E", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });
  it("should have welcome screen", async () => {
    await device.takeScreenshot("SCREENSHOTTEST");
    await expect(element(by.text("Hello World!!!"))).toBeVisible();
  });
});
export {};
