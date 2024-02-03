import { render, screen, getByAltText, getByText } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("dispays a top level heading witht eh text hi im___", ()=>{
    render(<App/>);
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })

    expect(topLevelHeading).toBeInTheDocument();
})

test("an image with alt text", ()=>{
    const {getByAltText}=render(<App/>);

    const imgElement=getByAltText("sample");
    expect(imgElement).toBeInTheDocument();
})

test("dispays a top level heading with the text About Me", ()=>{
    render(<App/>);
    const topLevelHeading = screen.getByRole("heading", {
        name: /About Me/i,
        exact: false,
        level: 2,
    })

    expect(topLevelHeading).toBeInTheDocument();
})

test("paragraph for my bio", ()=>{
    const {getByText}=render(<App/>);
    const pElement=getByText("my bio");
    expect(pElement).toBeInTheDocument();
})


test("link to page 1", ()=>{
    const {getByRole}=render(<App/>);
    const linkElement1=getByRole("link",{
        name:/link1/i
    });
    expect(linkElement1).toBeInTheDocument();
})

test("link to page 2", ()=>{
    const {getByRole}=render(<App/>);
    const linkElement2=getByRole("link",{
        name:/link2/i
    });
    expect(linkElement2).toBeInTheDocument();
})