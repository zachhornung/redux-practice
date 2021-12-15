export const logger = store => next => action => {
    console.group(action.type);
    console.log('dispatching: ', action);
    const result = next(action);
    console.log('next state: ', store.getState());
    console.groupEnd(action.type);
    return result;
};

export const analytics = store => next => action => {
    if (!action || !action.meta || !action.meta.analytics){
        return next(action);
    }

    const { event, data } = action.meta.analytics;

    fakeAnalyticsApi(event, data)
        .then(resp => {
            console.log('Recorded: ', event, data);
        })
        .catch(err => {
            console.error(
                'An error occurred while sending analytics: ',
                err.toString(),
            );
        });
        return next(action);
};

function fakeAnalyticsApi(eventName, data){
    return new Promise((resolve, reject) => {
        resolve('Success!');
    });
}