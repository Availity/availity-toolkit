var testsContext = require.context('../../project/app', true, /-spec$/);
testsContext.keys().forEach(testsContext);
