import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AdvisorCard } from "./advisor-card";
import type { Advisor } from "@/types/advisor";

const advisor: Advisor = {
  id: 1,
  name: "Sarah Johnson",
  avatar: "https://example.com/avatar.jpg",
  price: 3,
  callAvailable: true,
  chatAvailable: false,
};

describe("AdvisorCard", () => {
  it("renders the advisor name", () => {
    render(<AdvisorCard advisor={advisor} />);

    expect(screen.getByText("Sarah Johnson")).toBeInTheDocument();
  });

  it("renders the advisor price", () => {
    render(<AdvisorCard advisor={advisor} />);

    expect(screen.getByText("$3/min")).toBeInTheDocument();
  });

  it("renders call and chat buttons", () => {
    render(<AdvisorCard advisor={advisor} />);

    expect(screen.getByRole("button", { name: /call/i })).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /chat/i })).toBeInTheDocument();
  });

  it("enables the call button when callAvailable is true", () => {
    render(<AdvisorCard advisor={advisor} />);

    expect(screen.getByRole("button", { name: /call/i })).toBeEnabled();
  });

  it("disables the chat button when chatAvailable is false", () => {
    render(<AdvisorCard advisor={advisor} />);

    expect(screen.getByRole("button", { name: /chat/i })).toBeDisabled();
  });

  it("renders the advisor avatar image", () => {
    render(<AdvisorCard advisor={advisor} />);

    expect(screen.getByText("S")).toBeInTheDocument();
  });
});
