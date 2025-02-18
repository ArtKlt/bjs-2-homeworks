class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		const isExistingAlarm = this.alarmCollection.some(alarm => alarm.time === time);
		if (isExistingAlarm) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		const currentDate = new Date();
		return currentDate.toTimeString().slice(0, 5);
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}