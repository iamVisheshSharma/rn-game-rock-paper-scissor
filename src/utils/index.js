import Sound from "react-native-sound";

export const playSound = (filename, callback) => {
	var whoosh = new Sound(filename, Sound.MAIN_BUNDLE, (error) => {
		if (error) {
			console.log('failed to load the sound', error);
			return;
		}
		// loaded successfully
		console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

		// Play the sound with an onEnd callback
		whoosh.play((success) => {
			if (success) {
				console.log('successfully finished playing');
				if (filename == 'tap.mp3') {
					callback()
				}
			} else {
				console.log('playback failed due to audio decoding errors');
			}
		});
	});
}