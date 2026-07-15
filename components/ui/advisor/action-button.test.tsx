import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ActionButton } from "./action-button";

describe("ActionButton", () => {
  describe("Call button", () => {
    it("renders 'Call Now' when enabled", () => {
      render(<ActionButton type="call" enabled />);

      const button = screen.getByRole("button", {
        name: /call advisor/i,
      });

      expect(button).toBeInTheDocument();
      expect(button).toBeEnabled();
      expect(button).toHaveTextContent("Call Now");
    });

    it("renders 'Call Later' when disabled", () => {
      render(<ActionButton type="call" enabled={false} />);

      const button = screen.getByRole("button", {
        name: /call advisor \(unavailable\)/i,
      });

      expect(button).toBeDisabled();
      expect(button).toHaveTextContent("Call Later");
    });
  });

  describe("Chat button", () => {
    it("renders 'Chat Now' when enabled", () => {
      render(<ActionButton type="chat" enabled />);

      const button = screen.getByRole("button", {
        name: /chat advisor/i,
      });

      expect(button).toBeEnabled();
      expect(button).toHaveTextContent("Chat Now");
    });

    it("renders 'Chat Later' when disabled", () => {
      render(<ActionButton type="chat" enabled={false} />);

      const button = screen.getByRole("button", {
        name: /chat advisor \(unavailable\)/i,
      });

      expect(button).toBeDisabled();
      expect(button).toHaveTextContent("Chat Later");
    });
  });

  it("applies the default variant when enabled", () => {
    render(<ActionButton type="call" enabled />);

    const button = screen.getByRole("button", {
      name: /call advisor/i,
    });

    expect(button).not.toHaveAttribute("disabled");
  });

  it("applies the disabled state when unavailable", () => {
    render(<ActionButton type="chat" enabled={false} />);

    expect(
      screen.getByRole("button", {
        name: /chat advisor \(unavailable\)/i,
      }),
    ).toBeDisabled();
  });
});
