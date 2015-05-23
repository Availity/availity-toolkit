var testsContext = require.context('../../app/src', true, /-spec$/);
testsContext.keys().forEach(testsContext);
