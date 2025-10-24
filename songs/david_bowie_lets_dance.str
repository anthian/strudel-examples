// David Bowie "Let's Dance" transcribed by Bernhard Wagner
// https://www.youtube.com/watch?v=VbD_kBJc_gI
// TODO: bass sound (there are two: a natural and a synthetic)
// TODO: bend bass notes
// TODO: Refrain
// TODO: Intro
// TODO: percussion woodblock with delay
// TODO: proper delays: left: eighth, reight: dotted eighth.
setcps(1)

const bpm = 113.64

let dly_vol = .5
let dly_fbk = .25
let bass_gain = 0.6 
let bass_cutoff = 300
let drum_gain = 0.3
let chrds_gain = 0.3

function guitar(){
  function part(chords) { // 1 bar
    const rhythm = "x ~ ~ x ~!4 x ~!3 ~!4"
    return note(chords).struct(rhythm).s("sawtooth").gain(chrds_gain)
    .delay(dly_vol).delayfeedback(dly_fbk)
    .jux(echo(2, 1/8, .8)).legato(.7)
  }
  return cat(
    part("[a#3,f4,g#4,d#5]").color('#F5A623'),
    silence,
    part("[a#3,f4,g4,c#5]"),
    silence,
    part("[c#4,f#4,a#4,d#5]"),
    silence,
    part("[a#3,f4,g#4,c#5]"),
    silence,
  ).color("red")
}

function bass(){
  return cat( 
    note("bb2 ~!3 ab2 ~!3 g2 ~!3 f2 ~!3"),
    note("a#2 ~ ~ a#2 g#2 ~ a2 ~ a#2 ~!3 ~!4"),
    note("a#2 ~ ~ a#2 g#2 ~ a2 ~ a#2 ~!3 ~!4"),
    note("d#3 ~!3 c#3 ~!3 c3 ~!3 a#2@3 ~"),
    note("f#2 ~ ~ f#2 ~ ~ f#2 ~ f#2 ~!5 c3 c#3"),
    note("f#2 ~ ~ f#2 ~ ~ f#2 ~ f#2 ~!7"),
    note("bb2 ~!3 ab2 ~!3 g2 ~!3 f2 ~!3"),
    note("a#2 ~ ~ a#2 g#2 ~ a2 ~ a#2 ~!7"),
  ).s("sawtooth").cutoff(bass_cutoff).gain(bass_gain).color("yellow")
}

function drums(){
  return stack(
    s("cr/8").gain(.1),
    cat(
    s("bd:6 [sd, oh] bd:6 [sd, oh]"),
    s("bd:6 ~!2 bd:6 [sd, oh] ~ bd:6 ~ bd:6 ~!3 [sd, oh] ~!3"),
    s("bd:6 ~!2 bd:6 [sd, oh] ~ bd:6 ~ bd:6 ~!3 [sd, oh] ~!3"),
    s("bd:6 [sd, oh] bd:6 [sd, oh]"),
    s("bd:6 ~!2 bd:6 [sd, oh] ~ bd:6 ~ bd:6 ~!3 [sd, oh] ~!3"),
    s("bd:6 ~!2 bd:6 [sd, oh] ~ bd:6 ~ bd:6 ~!3 [sd, oh] ~!3"),
    s("bd:6 [sd, oh] bd:6 [sd, oh]"),
    s("bd:6 ~!2 bd:6 [sd, oh] ~ bd:6 ~ bd:6 ~ [sd, oh] ~ [sd!2, oh] bd:6 ~!2"),
  ).gain(drum_gain)).color("green")
}

stack(
  guitar(),
  bass(),
  drums(),
).fast(bpm/60/4)//.pianoroll({fold:1})


// @version 1.0