# The World Table — Version 7

## What changed
- The inquiry form submits to Formspree with JavaScript `fetch` and stays on this page.
- A branded thank-you confirmation replaces the form **only after Formspree accepts the submission**.
- Sending state prevents duplicate requests; network/server errors show a message without losing the form entries.
- Your Food / Kitchen and Wine / Cellar fields and their prefill behavior remain unchanged.
- The hero text is set to the wording you previously requested: "Bring any country to the table."
- Versioned assets use `styles_v7.css` and `script_v7.js`.

## Important: your Formspree ID
This package cannot contain the endpoint ID from your live GitHub repository (it wasn't supplied to us). **Before deploying**, open `index.html` and replace:

`https://formspree.io/f/YOUR_FORM_ID`

with the *working endpoint URL already configured in your existing website.* Keep the opening `<form>` tag intact.

Check that the endpoint begins `https://formspree.io/f/` and ends in your unique Formspree ID. It is the only configuration required; the script reads it from the form action. **If it remains a placeholder, the form will not send submissions.**

## GitHub Pages
Upload `index.html`, `index_v7.html`, `styles_v7.css`, `script_v7.js`, and `README_v7.md` into the repository root and commit. The live site is `index.html`; `index_v7.html` is the versioned copy. If you edit the endpoint, edit the two copies to match (or at minimum edit the live `index.html`). Old v6 files may remain for reference.

## Test
Open the live website, enter a test event inquiry, then submit. The page should not navigate to Formspree. The inline confirmation should appear and your inquiry should arrive in your Formspree dashboard and email notifications. You can also turn off your connection temporarily to check the retry message. 

The form sends through Formspree, so no backend is required on GitHub Pages. Keep email delivery and notification settings configured in your Formspree dashboard.
