import { checkbuySelectors } from "../selectors";

export class CheckArticle {
    checkArticle() {
        cy.get(checkbuySelectors.checkArticle).should('be.visible');
    }
    // hoverButtonMen() {
    //     cy.get(buttonMen).trigger('mouseover');
    // }

};

export const checkArticle = new CheckArticle();
