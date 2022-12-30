/* eslint-disable */
describe("Navigation", () => {
  it("passes", () => {
    //Starts with the index page
    cy.visit("http://localhost:3000/");

    //Find a link with an hfre attribute cotaining "about" and clicks on it
    cy.get('a[href*="/work/abyiber.com').click();

    // New Url should include a '/work/'
    cy.url().should("include", "/work/");

    //The page should contain an h1 with "Hi I am Aby"
    cy.get("h1").contains("abyiber.com");

    //The page has an image that is visible
    cy.get("img").should("be.visible");

    //Returns back home
    cy.get('a[href="/').click({ multiple: true });

    // // New Url should include a '/'
    cy.url().should("not.include", "work");

    cy.get("#themeChanger").click({ multiple: true });

    cy.get("h1").should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("#themeChanger").click({ multiple: true });

    cy.get("h1").should("have.css", "color", "rgb(39, 39, 42)");
  });
});
