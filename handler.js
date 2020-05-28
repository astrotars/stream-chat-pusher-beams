import { PushNotifications } from "@pusher/push-notifications-server";

const pusherBeamsClient = new PushNotifications({
    instanceId: 'YOUR_INSTANCE_ID_HERE',
    secretKey: 'YOUR_SECRET_KEY_HERE'
});

exports.signin = async event => {
    const data = JSON.parse(event.body);

    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 'OK',
            }),
        };
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: 'ERROR',
                error: error.stack,
            }),
        };
    }
};