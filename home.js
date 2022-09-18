sr-only

function spawnNotification(theBody, theIcon, theTitle) {
    const options = {
        body: theBody,
        icon: theIcon
    };

    const n = new Notification(theTitle, options);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            // The tab has become visible so clear the now-stale Notification.
            n.close();
        }
    });
}