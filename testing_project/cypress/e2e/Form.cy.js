describe("txtName checker", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.118:5173/");
  });
  //name
  it("check if txtName exists", () => {
    cy.get('input[name="txtName"]').should("exist");
  });

  it("check if txtName value is ali", () => {
    cy.get('input[name="txtName"]').type("ali").should("have.value", "ali");
  });

  //email
  it("check if txtEmail exists", () => {
    cy.get('input[name="txtEmail"]').should("exist");
  });

  it("check if txtEmail value is ali@ali.com", () => {
    cy.get('input[name="txtEmail"]')
      .type("ali@ali.com")
      .should("have.value", "ali@ali.com");
  });

  ////// Password

  it("check if txtPassword exists", () => {
    cy.get('input[name="txtPassword"]').should("exist");
  });

  it("check if txtPassword value is ali", () => {
    cy.get('input[name="txtPassword"]').type("ali").should("have.value", "ali");
  });

  // kullanim kosullari
  it("check if chckBox exists", () => {
    cy.get('input[name="chckBox"]').should("exist");
  });

  it("check if chckBox is checked", () => {
    cy.get('input[name="chckBox"]').check().should("be.checked", true);
  });

  // btn submit
  it("check if btnSubmit exists", () => {
    cy.get('button[name="btnSubmit"]').should("exist");
  });

  it("check if btnSubmit is checked", () => {
    cy.get('button[name="btnSubmit"]').click();
  });
});

describe("form validation", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.118:5173/");
  });
  it("form doldur ve kontrol et", () => {
    //const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    // const txtEmail = emailRegex.test('email@email.com')
    // expect(txtEmail).to.equal(true)
    cy.get('input[name="txtName"]').type("ali").should("have.value", "ali");
    cy.get('input[name="txtEmail"]')
      .type("ali@ali.com")
      .should("have.value", "ali@ali.com");
    cy.get('input[name="txtPassword"]')
      .type("A1234li")
      .should("have.value", "A1234li");
    cy.get('input[name="chckBox"]').click().should("be.checked", true);
  });
});
