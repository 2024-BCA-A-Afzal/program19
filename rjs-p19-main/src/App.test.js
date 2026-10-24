
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Home page is displayed initially", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /home/i })
  ).toBeInTheDocument();
});

test("Home page displays a student image", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("img", { name: /student/i })
  ).toBeInTheDocument();
});

test("About page opens using navigation", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  fireEvent.click(
    screen.getByRole("link", { name: /about/i })
  );

  expect(
    screen.getByRole("heading", { name: /about me/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /projects/i })
  ).toBeInTheDocument();
});

test("Both navigation links are displayed", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("link", { name: /home/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", { name: /about/i })
  ).toBeInTheDocument();
});
