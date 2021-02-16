/**
 * MIDI
 * @param type 144=press 128=loosen
 * @param key MIDI  notes of key
 */
var MIDI_activeNotes = new Array();
var onMidiInput = function (type, key, volencity) {
	// console.log("Array:",MIDI_activeNotes);
  let webKeyNum = key - 20
  //find DOM of key
  let keyboardGroup = getKeyboardGroup(webKeyNum);
  //get group of DOM
  // console.log("keyboardGroup:",keyboardGroup);
  var freq = 440*Math.pow(2,(webKeyNum - 37)/12);
  var keyNum = getKeyName(webKeyNum,keyboardGroup);
  //press 
  if(type == 144){
	  // console.log("Frequency:",freq);
	  // activeNotes[keyNotes[keyNum]] = newOsc(freq);
	  // MIDI_activeNotes.push(newOsc(freq));
	  MIDI_activeNotes[webKeyNum] = newOsc(freq);
	  addPressed(keyNum);
	  // console.log("When press ",keyNotes[keyNum]);
	  // console.log("keyNum :",keyNum);
	  // console.log("pressIndex :",pressIndex);
	  
  }
  //loosen
  if(type == 128){
	  // console.log("----------------");
	  // console.log("When loosen ",keyNotes[keyNum]);
	  // console.log("webKeyNum :",webKeyNum);
	  // console.log("pressIndex :",pressIndex);
	  // console.log("================");
	  stopOsc(MIDI_activeNotes[webKeyNum]);
	  delete MIDI_activeNotes[webKeyNum];
	  // stopOsc(MIDI_activeNotes.pop());
	  // activeNotes[keyNotes[keyNum]] = stopOsc(activeNotes[keyNotes[keyNum]]);//stop sound in stopOcs(note)
	  removePressed(keyNum);
  }
}

var onMidiSuccess = function (inputDeviceList) {
  $('#midi_device_label').text(inputDeviceList[0])
}