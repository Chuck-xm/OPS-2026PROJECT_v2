# OPS Marketplace Frontend

A static frontend prototype for the OPS marketplace. It includes a landing page, multi-step buyer and seller onboarding, and a login page, all styled consistently and responsive across phone and tablet sizes.

## What’s Inside
- Landing page with buyer and seller CTAs
- Buyer onboarding (3-step flow with progress bar)
- Seller onboarding (3-step flow with progress bar)
- Login page (email/phone + password)
- Shared responsive scaling via `media.js`

## Pages
- Landing: `index.html`
- Buyer onboarding: `buyers_onboardingPage/signupPage.html`
- Seller onboarding: `sellers_onboardingPage/signUpPage.html`
- Login: `Login/loginPage.html`

## How To Run
This is a static frontend. Open `index.html` directly in a browser or serve the folder with any static server.

## Project Structure
```
/OPS
  index.html
  landingPage.css
  landingPage.js
  media.js
  documentation.txt
  README.md
  buyers_onboardingPage/
    signupPage.html
    signupPage.css
    signupPage.js
    Images/
  sellers_onboardingPage/
    signUpPage.html
    signupPage.css
    signupPage.js
    Images/
  Login/
    loginPage.html
    loginPage.css
    loginPage.js
    Images/
  fonts/
    MTN/
      MTNBrighterSans-Bold.ttf
  Images/
```

## Responsive Behavior
Responsive behavior is centralized in `media.js`, which adds `data-screen="phone"|"tablet"|"desktop"` to the root element. Each page uses this attribute to adjust layout and typography without mixing responsive logic into page scripts.

## Design Notes
- Primary brand color: `#1e7f4f`
- Rounded inputs and buttons across the UI
- Progress bar uses three separate segments that fill after completing a step
- Login page uses MTN Brighter Sans font across all text

## Status / Next Steps
- Link the landing page Login button to `Login/loginPage.html`
- Hook forms to a backend (Firebase or API)
- Implement real password reset flow
- Add more MTN font weights for true typographic contrast

## More Details
For deep technical notes, validation rules, and asset lists, see `documentation.txt`.
