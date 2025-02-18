No bug in Vitest, the issue is mostly linked to the wrapper `forwardRef`.

Current status:

```txt
 ❯ test/stubs-default-class.spec.jsx (2 tests | 1 failed) 47ms
   × stubs default class (not working) 31ms
     → Cannot add property updater, object is not extensible
   ✓ stubs default class (working)
 ✓ test/stubs-default.spec.jsx (1 test) 22ms
 ✓ test/stubs.spec.jsx (1 test) 22ms
 ✓ test/mocks-with-ref.spec.jsx (1 test) 24ms
 ✓ test/mocks-default.spec.jsx (1 test) 20ms
 ✓ test/mocks.spec.jsx (1 test) 21ms
 ✓ test/no-stubs-no-mocks.spec.jsx (1 test) 21ms
 ❯ test/stubs-with-ref.spec.jsx (1 test | 1 failed) 27ms
   × stubs with ref 26ms
     → impl.apply is not a function
```
