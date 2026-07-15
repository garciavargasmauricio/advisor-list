import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { AdvisorList } from "./advisor-list";
import { useAvailabilityPolling } from "@/hooks/use-availability-polling";
import type { Advisor } from "@/types/advisor";

vi.mock("@/hooks/use-availability-polling");
vi.mock("./advisor-card", () => ({
  AdvisorCard: ({ advisor }: { advisor: Advisor }) => (
    <div data-testid="advisor-card">{advisor.name}</div>
  ),
}));

const mockedUseAvailabilityPolling = vi.mocked(useAvailabilityPolling);

const advisors: Advisor[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/avatar1.jpg",
    price: 3,
    callAvailable: true,
    chatAvailable: false,
  },
  {
    id: 2,
    name: "John Smith",
    avatar: "/avatar2.jpg",
    price: 5,
    callAvailable: false,
    chatAvailable: true,
  },
];

describe("AdvisorList", () => {
  it("renders the page title", () => {
    mockedUseAvailabilityPolling.mockReturnValue({
      data: advisors,
    } as ReturnType<typeof useAvailabilityPolling>);

    render(<AdvisorList advisors={advisors} />);

    expect(
      screen.getByRole("heading", {
        name: /advisor availability/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders one AdvisorCard for each advisor", () => {
    mockedUseAvailabilityPolling.mockReturnValue({
      data: advisors,
    } as ReturnType<typeof useAvailabilityPolling>);

    render(<AdvisorList advisors={advisors} />);

    expect(screen.getAllByTestId("advisor-card")).toHaveLength(2);
  });

  it("passes the advisor names to AdvisorCard", () => {
    mockedUseAvailabilityPolling.mockReturnValue({
      data: advisors,
    } as ReturnType<typeof useAvailabilityPolling>);

    render(<AdvisorList advisors={advisors} />);

    expect(screen.getByText("Sarah Johnson")).toBeInTheDocument();
    expect(screen.getByText("John Smith")).toBeInTheDocument();
  });
});
