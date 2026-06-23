# Create an API Service

## Context

You are working on the Vue 3 template project. Read `AGENTS.md` first for conventions.

## Task

Create API service for **[DOMAIN/ENTITY]**

### Requirements

- **File**: `src/services/[entity].ts`
- **Pattern**: Function-per-endpoint, typed responses, explicit error handling
- **No Axios** — use native `fetch`

### Endpoints

| Method | Path | Description | Request | Response |
|--------|------|-------------|---------|----------|
| GET | `[path]` | [description] | - | `[type]` |
| POST | `[path]` | [description] | `[type]` | `[type]` |

### Types

Define or import types in `src/types/[entity].ts`

### Verification

- `bun run build` passes
- All endpoints have typed request/response
