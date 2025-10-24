/**
 * https://www.instagram.com/reel/DKVMNq1BbA7/
 */

setCps(140/60/4)

samples('github:tidalcycles/dirt-samples')

const kickk = [
  "~",
  "x*4",
]

const postgainnn = [
    "{1}",
    "{0.5 1!9 0.5 1!5}",
]

const basslines = [
    "{f@7 g@9 c@7 a#@9}%8",
    "{g#@15 d4 c@7 a#@5.5 d@3.5}%8",
]

const leads = [
    "{d#@7 a#@9 d#@7 f@6 d#@3}%8"
]

const ssaw = s("supersaw:0:0.1").lpf(10).lpdecay(.3).lpq(0).distort("3:.15")

const bassnotes = pick("<0 1 1 1>/4", basslines).sub(12)

const b34t = 0

const energy = slider(7.488, 4, 12)

BASS: note(bassnotes.add("{-12 0}%8"))
  .sound(ssaw)
  .detune(.5)
  .unison(4)
  .decay(0.25).release(1).sustain(0.4)
  .gain(1.5)
  .postgain(pick(postgainnn, b34t))
  .lpenv(energy)
  .color("yellow")
  ._punchcard({height:60, width: 900})

DRUMS: stack(
    s("bd").bank("RolandTR909").postgain(1.5).struct(pick(kickk, b34t)),
    s("~ cp").bank("RolandTR808").fast(2).gain(0.6).lpf(5000).speed(1.2).end(0.045),
    s("~ hh!4 ~!5 hh!6").bank("RolandTR808").gain(0.3),
    s("~!1.33 lt").bank("RolandTR808").gain(0.4),
    s("hh*8").bank("RolandTR808").gain(0.4),
    s("~ oh").bank("KorgMinipops").postgain(0.2).fast(4).lpf(sine.range(5000,8000)),
    s("white").struct("x(8,8)").decay(saw.range(0.03, 0.2).fast(4)).postgain(.3).almostNever(ply("2")),
).color("cyan")._punchcard({height:60, width: 900})

SUB: note(bassnotes.add("0").sub("0")).struct("{0 1}%8")
    .s("gm_percusive_organ:1")
    .room(".08")
    .postgain(2)
    .lpenv(energy)
    .color("pink")._punchcard({height:60, width: 900})

                              
SYNTH_LEAD: note(pick("<0>/4", leads)).add(12).sound(ssaw).struct("x(8,8)")
    .gain(0.5)
    .detune(.55)
    .sustain(0.4)
    .hpf(100)
    .mask(1)
    .lpenv(energy)
    .postgain(pick(postgainnn, b34t))
    .color("purple")._punchcard({height:60, width: 900})

_VOCALS: s("cycles")
    .chop(64).loopAt(8).fit().gain(1.75).note("c2")
    .postgain(pick(postgainnn, b34t))
    .hpf(slider(200, 200, 500))
    .lpf(slider(0.4, 0.4, 1).mul(100).pow(2))
    .lpq(5)
    .color("lightgreen")._scope({height:60, width: 900})

