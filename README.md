No bug in Vitest, the issue is mostly linked to the wrapper `forwardRef`.

Current status:

```txt
 ✓ test/mocks-default.spec.jsx (1)
 ✓ test/mocks-with-ref.spec.jsx (1)
 ✓ test/mocks.spec.jsx (1)
 ✓ test/no-stubs-no-mocks.spec.jsx (1)
 ❯ test/stubs-default-class.spec.jsx (2)
   × stubs default class (not working)
   ✓ stubs default class (working)
 ✓ test/stubs-default.spec.jsx (1)
 ❯ test/stubs-with-ref.spec.jsx (1)
   × stubs with ref
 ✓ test/stubs.spec.jsx (1)
```
