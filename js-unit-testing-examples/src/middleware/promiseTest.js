function promiseWrapper(shouldFail) {
    return shouldFail ?
        Promise.reject() :
        Promise.resolve();
}

function promiseTest(request, response) {
    const {fail: shouldFail = false} = request.query;

    return promiseWrapper(shouldFail)
        .then(() => {
            response.json({
                message: 'resolved Promise',
                error: false
            });
        })
        .catch(() => {
            response.json({
                message: 'rejected Promise',
                error: true
            });
        });
}

export default promiseTest;
