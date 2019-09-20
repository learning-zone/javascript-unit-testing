import * as events from '../../services/events';

const eventsGetAll = (request, response) => {
    const renderJsonResponse = (dataObject, success = true) => {
        const jsonResponse = Object.assign(
            dataObject,
            {success}
        );
        response.json(jsonResponse);
    };

    return events.getAll()
        .then((data) => {
            renderJsonResponse({
                data
            });
        })
        .catch((error) => {
            renderJsonResponse({
                message: error.name
            }, false);
        });
};

export default eventsGetAll;
