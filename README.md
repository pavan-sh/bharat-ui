# bharat-ui

A small set of India-first UI components.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS

## Components

- [`AadhaarInput`](./docs/components/aadhaar-input.md) — Aadhaar number (12 digits) and OTP (6 digits) input (inspired by shadcn/ui `InputOTP`).

## CLI (experimental, v1)

This repo includes a minimal **shadcn-like** CLI to copy components into another project.

```bash
# from your target project directory
npx /path/to/bharat-ui add input-otp
npx /path/to/bharat-ui add aadhaar-input

# options
npx /path/to/bharat-ui add input-otp --components-path src/components --lib-path src/lib --yes
```

Commands:
- `bharat-ui list` — list available components
- `bharat-ui add <component...>` — copy files + install dependencies

## Dev

```bash
npm install
npm run dev
```

## Docs (VitePress)

Local docs:

```bash
npm run docs:dev
```

Build (also builds embedded demos):

```bash
npm run docs:build
npm run docs:preview
```
