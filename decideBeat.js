
/**
 * A function that takes in a time in seconds, and outputs the beat of
 * a song that it falls on
 * @param {float} noteTime the time of the start or end of a note 
 * @returns the step, given the tempo, time signature, and quantization
 */
    decideBeat = (noteTime) => {
        let beatsInColumn = this.state.selectedQZ/this.state.selectedTS[2]
        let beatsInBar = this.state.selectedTS[0]
        let beatLengthInSeconds = 60/this.state.selectedTP
        let secondsInBar = beatLengthInSeconds * beatsInBar
        let smallestBeatLength = beatLengthInSeconds/beatsInColumn

        return (Math.floor(noteTime/secondsInBar) * (beatsInColumn * beatsInBar)) +
        (noteTime % secondsInBar)/smallestBeatLength
    }