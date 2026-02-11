# Specification

## Summary
**Goal:** Update the landing site branding to ElectroBeez by adding the provided logo across key sections, switching to a professional blue-and-white theme, adding company contact details, and documenting how to connect a custom domain to the deployed Internet Computer canister.

**Planned changes:**
- Add the ElectroBeez logo (from uploaded assets) as the brand mark in the header navigation, and also display it in the hero and footer as responsive static frontend assets.
- Replace the existing monochrome styling with a consistent blue-and-white palette by updating global theme tokens (light and dark mode) and refactoring landing page component classes to remove hard-coded monochrome utilities.
- Add contact details (electrobeezindia@gmail.com, +918638493216) to the landing page (at minimum in the footer) with clickable `mailto:` and `tel:` links and styling that matches the new theme.
- Add a documentation file describing how to set up a custom domain for an IC-hosted site, including DNS records and boundary node/custom domain configuration, with placeholders for `DOMAIN` and `CANISTER_ID`.

**User-visible outcome:** The site shows the ElectroBeez logo in the header/hero/footer, uses a blue-and-white professional look in both light and dark modes, displays clickable email/phone contact info (at least in the footer), and includes a clear guide for pointing a custom domain at the deployed canister.
