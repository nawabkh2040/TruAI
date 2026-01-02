# TruAI

AI-Powered Deepfake Detection & Media Authenticity Verification.

A small project that provides a React + Vite front-end for detecting deepfakes and verifying media authenticity.

**Repository structure**

- `Front-end/`: React + Vite web client (UI, pages, assets, API wrappers)
  - `src/`: React source
  - `public/`: static assets
  - `package.json`: Front-end scripts and dependencies

**Quick start (Front-end)**

1. Enter the front-end folder:

```
cd Front-end
```

2. Install dependencies:

```
npm install
```

3. Start the dev server:

```
npm run dev
```

4. Build for production:

# TruAI

AI-Powered Deepfake Detection & Media Authenticity Verification.

A small project consisting of a React + Vite front-end and a separate back-end repository for media authenticity detection.

**Repository structure**

- `Front-end/`: React + Vite web client (UI, pages, assets, API wrappers)
  - `src/`: React source
  - `public/`: static assets
  - `package.json`: Front-end scripts and dependencies

**Quick start (Front-end)**

1. Enter the front-end folder:

```bash
cd Front-end
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

**Back-end**

- Repository: https://github.com/nawabkh2040/TruAI-Back-End

Quick example to get the back-end locally (see the back-end README for exact instructions):

```bash
git clone https://github.com/nawabkh2040/TruAI-Back-End.git backend
cd backend
# Follow the instructions in backend/README.md to install dependencies and run the service
```

Depending on the back-end stack you may run one of:

```bash

# or Python example
pip install -r requirements.txt
python app.py
```

**Tech stack**

- Front-end: React, Vite
- Linting: ESLint

**Notes**

- The front-end includes example API wrappers in `src/api/` (`axios.js`, `detection.js`) intended to connect to the back-end detection service.
- Update any environment variables or API endpoints in `src/api/axios.js` before connecting to a live back-end.

**License**

See `LICENSE` in the repository root.

**Contact**

Project maintained by the repository owner. For questions or contributions, open an issue or pull request on the repository.


