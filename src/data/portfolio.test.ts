import { describe, expect, it } from "vitest";
import { demoMetrics, projects, validateContact } from "./portfolio";

describe("Portfolio accuracy and contact preparation", () => {
  it("includes only the four supplied completed projects", () => {
    expect(projects.map((project) => project.fullTitle)).toEqual([
      "AI-Assisted End-to-End Architecture for Detecting Persistent Attacks in Enterprise",
      "Personality-Aware Product Recommendation System",
      "Excel Sales Dashboard",
      "E-Commerce Business Intelligence Dashboard",
    ]);
  });
  it("requires all contact fields", () => {
    expect(validateContact("", "visitor@example.com", "Opportunity", "Hello")).toBe(
      "Please complete all fields.",
    );
    expect(validateContact("Visitor", "visitor@example.com", "", "Hello")).toBe(
      "Please complete all fields.",
    );
    expect(validateContact("Visitor", "visitor@example.com", "Opportunity", "  ")).toBe(
      "Please complete all fields.",
    );
  });
  it("rejects invalid email addresses", () => {
    expect(validateContact("Visitor", "invalid-email", "Opportunity", "Hello")).toBe(
      "Please enter a valid email address.",
    );
  });
  it("allows a valid draft without asserting delivery", () => {
    expect(validateContact("Visitor", "visitor@example.com", "Opportunity", "Hello")).toBeNull();
  });
  it("updates demo values when the region changes", () => {
    expect(demoMetrics("All regions").revenue).toBe(124580);
    expect(demoMetrics("North").revenue).toBe(47340);
    expect(demoMetrics("South").orders).toBe(626);
    expect(demoMetrics("West").customers).toBe(354);
  });
});
