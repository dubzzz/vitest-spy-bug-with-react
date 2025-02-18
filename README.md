No bug in Vitest, the issue is mostly linked to the wrapper `forwardRef`.

Current status:

```txt
 ❯ test/stubs-default-class.spec.jsx (2 tests | 1 failed) 37ms
   × stubs default class (not working) 27ms
     → Cannot add property updater, object is not extensible
   ✓ stubs default class (working)
 ✓ test/stubs-default.spec.jsx (1 test) 22ms
 ✓ test/stubs.spec.jsx (1 test) 31ms
 ✓ test/mocks-with-ref.spec.jsx (1 test) 22ms
 ✓ test/mocks-default.spec.jsx (1 test) 21ms
 ✓ test/mocks.spec.jsx (1 test) 21ms
 ✓ test/no-stubs-no-mocks.spec.jsx (1 test) 33ms
 ❯ test/stubs-with-ref.spec.jsx (1 test | 1 failed) 30ms
  × stubs with ref 29ms
    → impl.apply is not a function
```
