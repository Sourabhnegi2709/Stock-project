import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

// Suite
describe("Hero component", () => {
    test("renders Hero image", () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>);

        // Use getByAltText (not getAllByAltText) if there is only one image
        const heroImage = screen.getByAltText("Hero Image");

        // Ensure the image exists
        expect(heroImage).toBeInTheDocument();

        // Check the correct image source
        expect(heroImage).toHaveAttribute("src", "/assets/homeHero.png");
    });
});