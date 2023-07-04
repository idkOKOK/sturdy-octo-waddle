module.exports = {
    once: true,
	run: () => {
        console.warn('Disconnecting, Good bye!');
        process.exit(0);
    }
}