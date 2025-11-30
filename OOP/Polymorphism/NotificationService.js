class NotificationService {
    
    constructor(notifier) {
        this.notifier = notifier;

    }
    

    send(message) {
        return this.notifier.notify(message);

    }

}


class EmailNotifier {

    constructor(email) {
        this.email = email;

    }
    

    notify(message) {
        return `Sending email to ${this.email}: ${message}`;

    }

}

class SMSNotifier {

    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;

    }
    

    notify(message) {
        return `Sending SMS to ${this.phoneNumber}: ${message}`;

    }

}

class PushNotifier {

    constructor(deviceId) {
        this.deviceId = deviceId;
    }
    

    notify(message) {
        return `Sending push notification to device ${this.deviceId}: ${message}`;

    }

}


class SlackNotifier {

    constructor(channel) {
        this.channel = channel;

    }
    

    notify(message) {
        return `Posting to Slack channel ${this.channel}: ${message}`;

    }

}

// Same interface, different implementations
const notifiers = [
    new EmailNotifier("user@example.com"),
    new SMSNotifier("+1234567890"),
    new PushNotifier("device_123"),
    new SlackNotifier("#general")
];

const message = "Your order has been shipped!";

notifiers.forEach(notifier => {
    const service = new NotificationService(notifier);
    console.log(service.send(message));
});