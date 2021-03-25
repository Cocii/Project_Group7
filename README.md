# Web-Keyboard	

## Virtual keyboards and effects

![WholeKeyboard](screenshot/Whole%20Keyboard.png)

## Introduction

This is the project for the ACTAM course, we are Axel and Jiayan(Group7). Since most people's inspirations are fleeting, we developed a virtual keyboard that makes it easy to record music and allow for simple effects. Our aim is that users can compose their music anytime, anywhere. 

## User Interface

### Keyboard Part

![KeyboardPart](screenshot/Keyboard%20Part.jpg)

1. **MIDI Name:** When you access your MIDI device, it will display the name of your MIDI device on the top area.
2. **Wave Selector:** You can choose the type of wave to make sound. 
3. **Oscilloscope:** You can see the shape of the wave.
4. **Volume Controller:** You can control the volume of the sound you made by it. (Using mouse or press the plus/minus signs on your computer keyboard)
5. **Octave Modifier:** The tones can be higher or lower by using mouse to click or press the greater/less than signs on your computer keyboard)
6. **Keyboard:** It's 12-keys keyboard, you can play it with your computer keyboard, your mouse or your MIDI devices. If you are using a phone or pad you can just use your finger to touch it.

### Filters Part

![Effectorpart](screenshot/Effector%20part.jpg)

1. **Low Shelf with associated detune (LS)**: Low shelf can be applied to the trembly the bass bottom of a sound: good for cuts and boosts on bass, solo acoustic guitar, strings, piano, and anything that needs more low end taming or power.

   **High Shelf with associated detune (HS)**: High shelf can be applied to the trembly high end of sound: here boosts can be used to add crispness to hats, cymbals, shakes and vocals

   - The associated detune sliders can be used to setup/correct the pitch in order to give more character to the sound.
   - Unlike the pass filters, high and low shelf filters can be used for boosting: in shelves, sound signals behind or before a set frequency are lowered or boosted by the same amount

   **High Pass with associated Quality Factor (LP)**: also known as low cut filter, it is used to cut off sounds from the bassy low end of the frequency spectrum by letting only sounds above the cut-off point pass through to the output. A high pass filter gets rid of sounds that fall behind the set frequency in a gradually descending volume slope.

   **Low Pass with associated Quality Factor (HP)**: The low pass filter does the same thing as the high pass, but on the upper part of the frequency spectrum. It is used to filter out the high frequencies allowing only the sounds below the cut off points to pass. Contrary to to high pass, the cut is made from the right side to the left.

   - **Q**: namely Quality factor, this parameter controls how drastic or gradual the shelf transitions from the cut-off frequency to the highest or lowest point of the shelf, depending on if it is a boost or cut. Finely adjusting the can help make the sound more natural.

2. **Stop and Record buttons:** Whenever wanting to record a piece of melody, press *rec* . Then by pressing *stop* the recording ends.

3. **Track list:** Here will appear *the blobs* of audio tracks of the recorded melodies/sounds; a blob appears automatically after the recording by pressing on *stop*; it is then possible to download the audio!

4. **Peaking:** The peaking filter allows all frequencies through, but adds a boost (or attenuation) to a range of frequencies.

   * For more information on filters/equalizers: https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode; https://rebootrecording.com/high-and-low-shelf/ 

## Technologies Used

### HTML, CSS & JS

Our project is based on HTLM, CSS and JS code. We use HTML to make the structure of our interface, CSS to design the style of each element in the web page(Including the color of elements, the typeface, and shape/size of the buttons), and JS to make the interaction between the elements(including WebAudio APIs, all the function related to clicks, drags, and rotations made by the users with mouse or keyboard).

### Web Audio API

We call many functions in the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). Web audio usually works look something like this:
> 1. Create audio context
> 2. Inside the context, create sources — such as `<audio>`, oscillator, stream
> 3. Create effects nodes, such as reverb, biquad filter, panner, compressor
> 4. Choose final destination of audio, for example your system speakers
> 5. Connect the sources up to the effects, and the effects to the destination

![A simple box diagram with an outer box labeled Audio context, and three inner boxes labeled Sources, Effects and Destination. The three inner boxes have arrow between them pointing from left to right, indicating the flow of audio information.](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/audio-context_.png)

## Project Demo

Here is our project please have a look and try - - > [Project of Group7](https://cocii.github.io/Project_Group7/)

And here is a short demo of the project - - > [Demo](https://youtu.be/dbg_LCANT-c)
