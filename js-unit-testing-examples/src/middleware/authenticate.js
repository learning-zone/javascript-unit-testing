function authenticate(request, response, next) {
    // TODO: Authenticate request and redirect to login if not authenticated
    console.log('verify authentication or redirect');
    next();
}

export default authenticate;
