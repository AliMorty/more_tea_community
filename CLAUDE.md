# More Tea Community - Project Instructions

## Workflow

- **Coding**: Claude (this agent) writes all HTML, CSS, and JavaScript for the site.
- **Images**: When a new image is needed, Claude creates a detailed description file inside `Gemini_Photo_Request/`. The user then takes that description to the Gemini website and generates the image by hand. In the future, a Gemini agent may be able to do this automatically.
- **Deployment**: The site is hosted on GitHub Pages at `alimorty.github.io/more_tea_community`. No server or build step is needed - all files are static.

## Folder Structure

- `claude_design/` - design plans and technical specs for Claude and contributors to follow
- `Gemini_Photo_Request/` - image request descriptions for Gemini to generate
- `docs/` - the actual website files (GitHub Pages serves from this folder)

## Rules

- Keep everything simple: plain HTML, CSS, and vanilla JavaScript only.
- No frameworks, no build tools, no npm.
- Every meaningful change should be committed to git.
- When a photo is needed, write a request file in `Gemini_Photo_Request/` before writing any code that depends on it.
