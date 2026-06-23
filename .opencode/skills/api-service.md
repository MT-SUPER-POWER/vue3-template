# API Service Layer Skill

Use this skill when creating **API service functions**.

## Pattern

```ts
// src/services/api/user.ts
import type { User } from '@/types'

const BASE_URL = '/api/v1'

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`)
  if (!response.ok) throw new Error(`Failed to fetch users: ${response.status}`)
  return response.json()
}

export async function createUser(data: Omit<User, 'id'>): Promise<User> {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error(`Failed to create user: ${response.status}`)
  return response.json()
}
```

## Conventions
- **One file per domain resource** (e.g. `user.ts`, `post.ts`, `auth.ts`)
- **Function-per-endpoint** — no monolithic service objects
- **Return typed responses** — always use the project's type definitions
- **Handle HTTP errors explicitly** — check `response.ok`, throw meaningful errors
- Use `fetch` by default — no Axios until the project explicitly adds it

## Do NOT
- Create generic "api.ts" with untyped catch-all methods
- Swallow errors — let them propagate to the caller
- Couple service functions to Vue components (no `ref`/`reactive` in services)

## Verify
- Response types match the endpoint contract
- `bun run build` passes
